import { ArrowLeft, Heart, MapPin, Navigation, Share2 } from 'lucide-react'

export default function PlaceDetail({ place, onBack, onToggleStatus }) {
  const visited = place.status === 'visited'
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 px-3 pb-2">
        <button
          type="button"
          onClick={onBack}
          className="size-9 grid place-items-center rounded-full hover:bg-surface-muted text-ink"
          aria-label="뒤로"
        >
          <ArrowLeft size={18} />
        </button>
        <span className="text-ink-light text-sm">{place.country}</span>
        <button
          type="button"
          onClick={onToggleStatus}
          className={
            'ml-auto h-9 px-3 rounded-full text-sm font-medium flex items-center gap-1.5 ' +
            (visited
              ? 'bg-ktm-orange text-white'
              : 'bg-surface-muted text-ink')
          }
        >
          <Heart size={15} fill={visited ? 'currentColor' : 'none'} strokeWidth={2.2} />
          {visited ? '다녀온 곳' : '가고 싶은'}
        </button>
      </div>

      <div className="px-4 pb-2">
        <h2 className="font-display text-display-sm text-ink">{place.name}</h2>
        <div className="mt-1 flex items-center gap-2 text-sm text-ink-muted">
          <MapPin size={14} className="text-ktm-orange" />
          <span className="tabular-nums">
            {place.lat.toFixed(2)}°N · {place.lng.toFixed(2)}°E
          </span>
        </div>
      </div>

      <div className="px-4 mt-2 grid grid-cols-3 gap-2">
        <Stat label="방문" value={`${place.trips}회`} />
        <Stat label="상태" value={visited ? '다녀옴' : '위시리스트'} />
        <Stat label="국가" value={place.country.split(' ')[0]} />
      </div>

      <p className="px-4 mt-4 text-[15px] leading-relaxed text-ink">
        {place.note}
      </p>

      <div className="px-3 mt-5 mb-4 flex gap-2">
        <button
          type="button"
          className="flex-1 h-11 rounded-card bg-ktm-orange text-white font-medium flex items-center justify-center gap-2 active:translate-y-px"
        >
          <Navigation size={16} />
          길찾기
        </button>
        <button
          type="button"
          className="h-11 px-4 rounded-card bg-surface-muted text-ink font-medium flex items-center justify-center gap-2"
        >
          <Share2 size={16} />
          공유
        </button>
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-card bg-surface-subtle border border-surface-border px-3 py-2">
      <div className="text-[11px] text-ink-light">{label}</div>
      <div className="text-[15px] text-ink font-medium tabular-nums truncate">{value}</div>
    </div>
  )
}
