import { useEffect, useRef, useState } from 'react'

const SNAP = {
  collapsed: 84,    // peek height (px) - drag handle + summary
  half: 0.45,       // fraction of viewport height
  full: 0.85,
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function BottomSheet({ snap = 'half', onSnapChange, children }) {
  const [vh, setVh] = useState(() => window.innerHeight)
  const [dragOffset, setDragOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startRef = useRef(null)

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const heights = {
    collapsed: SNAP.collapsed,
    half: vh * SNAP.half,
    full: vh * SNAP.full,
  }
  const baseHeight = heights[snap]
  const height = clamp(baseHeight - dragOffset, heights.collapsed, heights.full)

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId)
    startRef.current = { y: e.clientY, base: baseHeight }
    setDragging(true)
  }

  const onPointerMove = (e) => {
    if (!startRef.current) return
    const dy = e.clientY - startRef.current.y
    setDragOffset(dy)
  }

  const onPointerUp = () => {
    if (!startRef.current) return
    const finalH = clamp(startRef.current.base - dragOffset, heights.collapsed, heights.full)
    startRef.current = null
    setDragOffset(0)
    setDragging(false)
    const distances = [
      { snap: 'collapsed', d: Math.abs(finalH - heights.collapsed) },
      { snap: 'half',      d: Math.abs(finalH - heights.half) },
      { snap: 'full',      d: Math.abs(finalH - heights.full) },
    ]
    distances.sort((a, b) => a.d - b.d)
    onSnapChange?.(distances[0].snap)
  }

  return (
    <section
      className="absolute left-0 right-0 bottom-0 z-sidebar bg-surface rounded-t-panel shadow-panel border-t border-surface-border flex flex-col"
      style={{
        height,
        transition: dragging ? 'none' : 'height 280ms cubic-bezier(0.22, 1, 0.36, 1)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div
        className="pt-2 pb-3 px-3 flex flex-col items-center cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="h-1.5 w-12 rounded-full bg-surface-border" />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">{children}</div>
    </section>
  )
}
