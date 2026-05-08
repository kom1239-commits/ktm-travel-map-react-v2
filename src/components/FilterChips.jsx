export default function FilterChips({ filters, value, onChange, places }) {
  return (
    <div className="absolute left-0 right-0 z-overlay pointer-events-none px-3" style={{ top: 'calc(env(safe-area-inset-top) + 96px)' }}>
      <div className="flex gap-2 overflow-x-auto pointer-events-auto no-scrollbar">
        {filters.map((f) => {
          const count = f.count(places)
          const active = value === f.id
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id)}
              className={
                'shrink-0 h-8 px-3 rounded-chip border text-[13px] font-medium transition-colors flex items-center gap-1.5 ' +
                (active
                  ? 'bg-ktm-orange text-white border-ktm-orange shadow-card'
                  : 'bg-surface/90 backdrop-blur text-ink border-surface-border shadow-card')
              }
            >
              <span>{f.label}</span>
              <span
                className={
                  'tabular-nums text-[11px] px-1.5 py-0.5 rounded-full ' +
                  (active ? 'bg-white/25 text-white' : 'bg-surface-muted text-ink-muted')
                }
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
