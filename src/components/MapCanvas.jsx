import { places, route } from '../data/trip'

function smoothPath(points) {
  if (points.length < 2) return ''
  const d = [`M ${points[0].x} ${points[0].y}`]
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6
    d.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`)
  }
  return d.join(' ')
}

const carPos = { x: 175, y: 152 }

export default function MapCanvas({ selectedId, onSelect }) {
  const path = smoothPath(route)

  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full block"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="contour" x="0" y="0" width="36" height="22" patternUnits="userSpaceOnUse">
          <path d="M0 11 Q 9 4 18 11 T 36 11" stroke="#D6C9AC" strokeWidth="0.6" fill="none" opacity="0.6" />
        </pattern>
        <radialGradient id="haze" cx="50%" cy="40%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#0E2D50" stopOpacity="0.06" />
        </radialGradient>
        <filter id="pinShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0E2D50" floodOpacity="0.25" />
        </filter>
      </defs>

      <rect width="400" height="400" fill="#EFE8DA" />
      <rect width="400" height="400" fill="url(#contour)" />

      <path d="M -10 90 Q 80 60 160 110 T 410 80 L 410 -10 L -10 -10 Z" fill="#CFC2A7" opacity="0.55" />
      <path d="M -10 200 Q 100 170 200 220 T 410 190 L 410 90 Q 320 110 230 80 T -10 95 Z" fill="#B7C9A8" opacity="0.55" />
      <path d="M -10 320 Q 90 300 180 340 T 410 310 L 410 200 Q 300 230 200 220 T -10 200 Z" fill="#C9D6BD" opacity="0.45" />
      <path d="M -10 410 L 410 410 L 410 320 Q 320 340 240 330 T -10 320 Z" fill="#D9CFAF" opacity="0.55" />

      <g stroke="#A89970" strokeWidth="0.7" fill="none" opacity="0.55">
        <path d="M 30 70 Q 110 40 200 70 T 380 60" />
        <path d="M 20 130 Q 130 100 220 130 T 380 120" />
        <path d="M 0 240 Q 130 215 240 250 T 400 240" />
        <path d="M 10 290 Q 130 275 230 295 T 400 285" />
        <path d="M 0 360 Q 120 345 220 365 T 400 355" />
      </g>

      <path d="M 250 50 L 270 80 L 300 65 L 320 95 L 345 75 L 365 100" stroke="#8FAA80" strokeWidth="1.2" fill="none" opacity="0.7" />
      <path d="M 30 300 L 55 320 L 90 305 L 120 335" stroke="#8FAA80" strokeWidth="1.2" fill="none" opacity="0.7" />

      <rect width="400" height="400" fill="url(#haze)" />

      <path d={path} stroke="#D9AE00" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
      <path d={path} stroke="#F4C400" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <g transform={`translate(${carPos.x} ${carPos.y})`}>
        <circle r="11" fill="#FFFFFF" stroke="#0E2D50" strokeWidth="1.5" />
        <g transform="translate(-6 -5)" stroke="#0E2D50" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 7 L2 5 L3 3 L9 3 L10 5 L10 7" />
          <path d="M0.5 7 L11.5 7" />
          <circle cx="3" cy="8" r="0.9" fill="#0E2D50" stroke="none" />
          <circle cx="9" cy="8" r="0.9" fill="#0E2D50" stroke="none" />
        </g>
      </g>

      {places.map((p) => (
        <Pin key={p.id} place={p} active={p.id === selectedId} onClick={() => onSelect?.(p.id)} />
      ))}
    </svg>
  )
}

function Pin({ place, active, onClick }) {
  const { x, y, name, nameEn, isCity, labelSide = 'right' } = place

  if (isCity) {
    return (
      <g transform={`translate(${x} ${y})`} onClick={onClick} className="cursor-pointer">
        <circle r="7" fill="#FFFFFF" stroke="#0E2D50" strokeWidth="2.6" />
        <circle r="2.5" fill="#0E2D50" />
        <g transform="translate(0 -16)">
          <text textAnchor="middle" fontSize="13" fontWeight="800" fill="#0E2D50"
            stroke="#FFFFFF" strokeWidth="3" paintOrder="stroke">
            Almaty
          </text>
          <text y="11" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0E2D50"
            stroke="#FFFFFF" strokeWidth="2.5" paintOrder="stroke" opacity="0.85">
            {name}
          </text>
        </g>
      </g>
    )
  }

  const fill = active ? '#E63946' : '#0E2D50'
  const dx = labelSide === 'left' ? -16 : 16
  const anchor = labelSide === 'left' ? 'end' : 'start'

  return (
    <g transform={`translate(${x} ${y})`} onClick={onClick} className="cursor-pointer">
      <g filter="url(#pinShadow)">
        <path
          d="M0 -22 C 8 -22 12 -16 12 -10 C 12 -2 0 8 0 8 C 0 8 -12 -2 -12 -10 C -12 -16 -8 -22 0 -22 Z"
          fill={fill}
        />
        <circle cx="0" cy="-12" r="4.5" fill="#FFFFFF" />
        {active && <circle cx="0" cy="-12" r="2" fill="#E63946" />}
      </g>
      <g transform={`translate(${dx} -10)`}>
        <text textAnchor={anchor} fontSize="11.5" fontWeight="800" fill="#0E2D50"
          stroke="#FFFFFF" strokeWidth="3" paintOrder="stroke">
          {nameEn}
        </text>
        <text y="12" textAnchor={anchor} fontSize="10" fontWeight="700" fill="#0E2D50"
          stroke="#FFFFFF" strokeWidth="2.5" paintOrder="stroke" opacity="0.85">
          {name}
        </text>
      </g>
    </g>
  )
}
