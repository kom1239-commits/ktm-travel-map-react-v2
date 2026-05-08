export default function MapPage() {
  return (
    <div className="relative w-full h-screen bg-map-bg overflow-hidden">
      {/* Topbar */}
      <header className="absolute top-0 inset-x-0 z-topbar h-topbar bg-surface border-b border-surface-border flex items-center px-4 gap-3">
        <span className="font-display font-semibold text-ktm-orange tracking-tight text-lg">
          KTM Travel Map
        </span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-surface-muted" />
        </div>
      </header>

      {/* Map canvas placeholder */}
      <main className="absolute inset-0 pt-topbar bg-map-bg flex items-center justify-center">
        <div className="text-ink-light text-sm">지도 영역</div>
      </main>

      {/* Sidebar placeholder */}
      <aside className="absolute top-topbar bottom-0 left-0 z-sidebar w-sidebar bg-surface border-r border-surface-border flex flex-col p-4 gap-4">
        <div className="h-10 rounded-card bg-surface-muted" />
        <div className="flex-1 rounded-card bg-surface-subtle border border-surface-border" />
      </aside>
    </div>
  )
}
