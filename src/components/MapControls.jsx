import { Crosshair, Layers, SlidersHorizontal, Navigation } from 'lucide-react'

function CircleButton({ children, label, className = '' }) {
  return (
    <button
      aria-label={label}
      className={`grid place-items-center w-11 h-11 rounded-full bg-white shadow-card text-ktm-navy active:scale-95 transition-transform ${className}`}
    >
      {children}
    </button>
  )
}

export default function MapControls() {
  return (
    <>
      <div className="absolute top-3 right-3 flex flex-col gap-2 z-overlay">
        <CircleButton label="recenter">
          <Crosshair size={18} strokeWidth={2.2} />
        </CircleButton>
        <CircleButton label="layers">
          <Layers size={18} strokeWidth={2.2} />
        </CircleButton>
        <CircleButton label="filter">
          <SlidersHorizontal size={18} strokeWidth={2.2} />
        </CircleButton>
      </div>

      <button
        aria-label="navigate"
        className="absolute bottom-3 right-3 z-overlay grid place-items-center w-12 h-12 rounded-full bg-ktm-yellow text-ktm-navy shadow-fab active:scale-95 transition-transform"
      >
        <Navigation size={20} strokeWidth={2.4} className="-rotate-12 translate-x-[1px]" fill="#0E2D50" />
      </button>
    </>
  )
}
