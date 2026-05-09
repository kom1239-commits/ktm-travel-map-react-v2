import { Plus, Minus, Compass, Layers } from 'lucide-react'

export default function MapControls({ onZoomIn, onZoomOut, onRecenter, onToggleLayer, layerActive }) {
  return (
    <div
      className="absolute right-3 z-overlay flex flex-col gap-2"
      style={{ top: 'calc(env(safe-area-inset-top) + 144px)' }}
    >
      <ControlButton onClick={onZoomIn} aria-label="확대">
        <Plus size={18} />
      </ControlButton>
      <ControlButton onClick={onZoomOut} aria-label="축소">
        <Minus size={18} />
      </ControlButton>
      <div className="h-2" />
      <ControlButton onClick={onRecenter} aria-label="처음 위치">
        <Compass size={18} />
      </ControlButton>
      <ControlButton
        onClick={onToggleLayer}
        aria-label="경로 레이어"
        active={layerActive}
      >
        <Layers size={18} />
      </ControlButton>
    </div>
  )
}

function ControlButton({ children, active, ...props }) {
  return (
    <button
      type="button"
      className={
        'size-10 grid place-items-center rounded-full border shadow-card active:scale-95 transition-transform ' +
        (active
          ? 'bg-ktm-orange text-white border-ktm-orange'
          : 'bg-surface text-ink border-surface-border')
      }
      {...props}
    >
      {children}
    </button>
  )
}
