import { useCallback, useEffect, useRef, useState } from 'react'

const MIN_SCALE = 0.8
const MAX_SCALE = 6

export function useMapTransform({ width, height }) {
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 })
  const containerRef = useRef(null)
  const pointers = useRef(new Map())
  const lastPinch = useRef(null)
  const lastPan = useRef(null)

  const clampToBounds = useCallback((next) => {
    const el = containerRef.current
    if (!el) return next
    const rect = el.getBoundingClientRect()
    const scaledW = width * next.scale
    const scaledH = height * next.scale
    const minX = Math.min(0, rect.width - scaledW)
    const minY = Math.min(0, rect.height - scaledH)
    const maxX = Math.max(0, rect.width - scaledW)
    const maxY = Math.max(0, rect.height - scaledH)
    return {
      ...next,
      x: Math.min(Math.max(next.x, minX), maxX),
      y: Math.min(Math.max(next.y, minY), maxY),
    }
  }, [width, height])

  // Fit map to container on mount and resize.
  const fit = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return
    const scale = Math.min(rect.width / width, rect.height / height)
    const x = (rect.width - width * scale) / 2
    const y = (rect.height - height * scale) / 2
    setTransform({ x, y, scale })
  }, [width, height])

  useEffect(() => {
    fit()
    const ro = new ResizeObserver(fit)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [fit])

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId)
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    if (pointers.current.size === 1) {
      lastPan.current = { x: e.clientX, y: e.clientY }
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()]
      const dx = a.x - b.x
      const dy = a.y - b.y
      lastPinch.current = {
        dist: Math.hypot(dx, dy),
        cx: (a.x + b.x) / 2,
        cy: (a.y + b.y) / 2,
      }
      lastPan.current = null
    }
  }

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })

    if (pointers.current.size === 1 && lastPan.current) {
      const dx = e.clientX - lastPan.current.x
      const dy = e.clientY - lastPan.current.y
      lastPan.current = { x: e.clientX, y: e.clientY }
      setTransform((t) => clampToBounds({ ...t, x: t.x + dx, y: t.y + dy }))
    } else if (pointers.current.size === 2 && lastPinch.current) {
      const [a, b] = [...pointers.current.values()]
      const dx = a.x - b.x
      const dy = a.y - b.y
      const dist = Math.hypot(dx, dy)
      const cx = (a.x + b.x) / 2
      const cy = (a.y + b.y) / 2
      const factor = dist / lastPinch.current.dist
      lastPinch.current = { dist, cx, cy }
      setTransform((t) => zoomAt(t, factor, cx, cy, containerRef.current, clampToBounds))
    }
  }

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) lastPinch.current = null
    if (pointers.current.size === 1) {
      const [p] = [...pointers.current.values()]
      lastPan.current = { x: p.x, y: p.y }
    }
    if (pointers.current.size === 0) lastPan.current = null
  }

  const onWheel = (e) => {
    e.preventDefault()
    const factor = Math.exp(-e.deltaY * 0.0015)
    setTransform((t) => zoomAt(t, factor, e.clientX, e.clientY, containerRef.current, clampToBounds))
  }

  const zoomBy = (factor) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setTransform((t) => zoomAt(t, factor, rect.left + rect.width / 2, rect.top + rect.height / 2, el, clampToBounds))
  }

  const focusOn = (svgX, svgY, scale = 3) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = clampToBounds({
      scale,
      x: rect.width / 2 - svgX * scale,
      y: rect.height / 2 - svgY * scale,
    })
    setTransform(next)
  }

  return {
    containerRef,
    transform,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
      onWheel,
    },
    fit,
    zoomBy,
    focusOn,
  }
}

function zoomAt(t, factor, clientX, clientY, el, clampToBounds) {
  if (!el) return t
  const rect = el.getBoundingClientRect()
  const px = clientX - rect.left
  const py = clientY - rect.top
  const nextScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.scale * factor))
  const real = nextScale / t.scale
  return clampToBounds({
    scale: nextScale,
    x: px - (px - t.x) * real,
    y: py - (py - t.y) * real,
  })
}
