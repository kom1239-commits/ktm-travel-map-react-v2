import { ChevronRight, MapPin, Heart } from 'lucide-react'

export default function PlaceList({ places, activeId, onSelect, headline }) {
  return (
    <div>
      <div className="px-4 pt-1 pb-3 flex items-baseline justify-between">
        <h2 className="text-ink font-display font-semibold text-[17px] tracking-tight">
          {headline}
        </h2>
        <span className="text-ink-light text-xs tabular-nums">{places.length}곳</span>
      </div>

      {places.length === 0 ? (
        <div className="px-4 py-12 text-center text-ink-light text-sm">
          조건에 맞는 장소가 없어요.
        </div>
      ) : (
        <ul className="px-2 pb-4">
          {places.map((p) => {
            const visited = p.status === 'visited'
            const active = p.id === activeId
            return (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => onSelect(p.id)}
                  className={
                    'w-full flex items-center gap-3 rounded-card px-3 py-3 transition-colors text-left ' +
                    (active ? 'bg-ktm-orange/10' : 'hover:bg-surface-subtle active:bg-surface-muted')
                  }
                >
                  <div
                    className={
                      'shrink-0 size-10 grid place-items-center rounded-full ' +
                      (visited ? 'bg-ktm-orange/15 text-ktm-orange' : 'bg-surface-muted text-ink-muted')
                    }
                  >
                    {visited ? <MapPin size={18} strokeWidth={2.4} /> : <Heart size={18} strokeWidth={2.2} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-ink font-medium text-[15px] truncate">{p.name}</span>
                      {visited && (
                        <span className="text-[10px] uppercase tracking-wider text-ktm-orange-dark bg-ktm-orange/10 px-1.5 py-0.5 rounded">
                          {p.trips}회 방문
                        </span>
                      )}
                    </div>
                    <div className="text-ink-light text-xs mt-0.5 truncate">
                      {p.country} · {p.note}
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-ink-light shrink-0" />
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
