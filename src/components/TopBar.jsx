import { Search, Menu, MapPin } from 'lucide-react'

export default function TopBar({ query, onQueryChange, onMenuClick, stats }) {
  return (
    <header className="absolute top-0 inset-x-0 z-topbar pt-[env(safe-area-inset-top)]">
      <div className="px-3 pt-3 pb-2 bg-gradient-to-b from-surface/95 to-surface/70 backdrop-blur-md border-b border-surface-border/70">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onMenuClick}
            className="size-10 grid place-items-center rounded-full bg-surface border border-surface-border shadow-card text-ink active:scale-95 transition-transform"
            aria-label="메뉴"
          >
            <Menu size={18} />
          </button>

          <div className="flex-1 flex items-center gap-2 h-10 px-3 rounded-full bg-surface border border-surface-border shadow-card">
            <Search size={16} className="text-ink-light shrink-0" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="도시나 나라 검색"
              className="flex-1 bg-transparent outline-none text-[15px] text-ink placeholder:text-ink-light min-w-0"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                className="text-xs text-ink-light px-1"
                aria-label="검색 지우기"
              >
                지우기
              </button>
            )}
          </div>

          <div className="size-10 grid place-items-center rounded-full bg-ktm-orange text-white shadow-card">
            <MapPin size={18} strokeWidth={2.5} />
          </div>
        </div>

        <div className="mt-2 flex items-center gap-3 text-[11px] text-ink-muted px-1">
          <span className="font-display font-semibold text-ktm-orange tracking-tight text-sm">
            KTM Travel Map
          </span>
          <span className="ml-auto tabular-nums">
            <strong className="text-ink">{stats.visited}</strong>
            <span className="text-ink-light"> / {stats.total} 다녀옴</span>
          </span>
          <span className="tabular-nums">
            <strong className="text-ink">{stats.countries}</strong>
            <span className="text-ink-light"> 개국</span>
          </span>
        </div>
      </div>
    </header>
  )
}
