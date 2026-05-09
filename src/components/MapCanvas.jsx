import { useEffect, useImperativeHandle, forwardRef, useMemo } from 'react'
import { LAND_PATHS } from '@/lib/asiaShapes'
import { VIEW, project } from '@/lib/projection'
import { useMapTransform } from '@/hooks/useMapTransform'

const GRATICULE_LNG = [100, 110, 120, 130, 140]
const GRATICULE_LAT = [-10, 0, 10, 20, 30, 40]

const MapCanvas = forwardRef(function MapCanvas(
  { places, activePlaceId, onSelectPlace, routeIds = [] },
  ref,
) {
  const { containerRef, transform, handlers, zoomBy, focusOn, fit } = useMapTransform({
    width: VIEW.width,
    height: VIEW.height,
  })

  useImperativeHandle(ref, () => ({ zoomBy, focusOn, fit }), [zoomBy, focusOn, fit])

  // When the active place changes, gently focus the map on it.
  useEffect(() => {
    if (!activePlaceId) return
    const place = places.find((p) => p.id === activePlaceId)
    if (!place) return
    const { x, y } = project(place.lng, place.lat)
    focusOn(x, y, Math.max(transform.scale, 2.2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePlaceId])

  const projected = useMemo(
    () => places.map((p) => ({ ...p, ...project(p.lng, p.lat) })),
    [places],
  )

  const routePoints = useMemo(() => {
    const lookup = new Map(projected.map((p) => [p.id, p]))
    return routeIds.map((id) => lookup.get(id)).filter(Boolean)
  }, [projected, routeIds])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden touch-none select-none"
      style={{ background: 'radial-gradient(120% 80% at 50% 0%, #DEEBF4 0%, #C8DDEB 60%, #B7CEDF 100%)' }}
      {...handlers}
    >
      <svg
        width={VIEW.width}
        height={VIEW.height}
        viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
        className="block origin-top-left"
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(${transform.scale})`,
          transformOrigin: '0 0',
        }}
      >
        {/* Subtle graticule */}
        <g stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="0.6">
          {GRATICULE_LNG.map((lng) => {
            const a = project(lng, -12)
            const b = project(lng, 50)
            return <line key={`lng-${lng}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          })}
          {GRATICULE_LAT.map((lat) => {
            const a = project(92, lat)
            const b = project(148, lat)
            return <line key={`lat-${lat}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          })}
        </g>

        {/* Land masses */}
        <g>
          {LAND_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              fill="#E8E0D5"
              stroke="#C9BFAF"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          ))}
        </g>

        {/* Route line connecting visited places in order */}
        {routePoints.length > 1 && (
          <g>
            <path
              d={routePoints
                .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
                .join(' ')}
              fill="none"
              stroke="#FF6B00"
              strokeOpacity="0.85"
              strokeWidth={2.5}
              strokeDasharray="6 5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        )}

        {/* Pins */}
        <g>
          {projected.map((p) => (
            <Pin
              key={p.id}
              x={p.x}
              y={p.y}
              place={p}
              active={p.id === activePlaceId}
              onClick={() => onSelectPlace?.(p.id)}
              scale={transform.scale}
            />
          ))}
        </g>
      </svg>
    </div>
  )
})

function Pin({ x, y, place, active, onClick, scale }) {
  const visited = place.status === 'visited'
  const color = visited ? '#FF6B00' : '#5A5550'
  const r = active ? 9 : 7
  // Counter-scale so pins keep visual size as we zoom.
  const inv = 1 / scale
  return (
    <g
      transform={`translate(${x} ${y}) scale(${inv})`}
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.()
      }}
      className="cursor-pointer"
    >
      {active && (
        <circle r={r + 8} fill={color} fillOpacity="0.18">
          <animate attributeName="r" values={`${r + 6};${r + 14};${r + 6}`} dur="2s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.25;0;0.25" dur="2s" repeatCount="indefinite" />
        </circle>
      )}
      <circle r={r + 2} fill="#FFFFFF" />
      <circle r={r} fill={color} />
      {visited && <circle r={r - 3} fill="#FFFFFF" fillOpacity="0.85" />}
    </g>
  )
}

export default MapCanvas
