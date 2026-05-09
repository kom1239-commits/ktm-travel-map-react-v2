import { Bookmark, X, Star, Car, MessageCircle, Plus } from 'lucide-react'

function CanyonThumb() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD7A0" />
          <stop offset="100%" stopColor="#FFB166" />
        </linearGradient>
        <linearGradient id="rock" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D86B3A" />
          <stop offset="100%" stopColor="#7A3416" />
        </linearGradient>
      </defs>
      <rect width="80" height="80" fill="url(#sky)" />
      <path d="M0 32 L12 26 L22 30 L34 22 L46 28 L60 22 L72 28 L80 24 L80 80 L0 80 Z" fill="#9A4421" />
      <path d="M0 44 L10 40 L24 46 L36 38 L50 44 L66 38 L80 42 L80 80 L0 80 Z" fill="url(#rock)" />
      <path d="M0 60 L18 54 L30 58 L48 52 L66 58 L80 54 L80 80 L0 80 Z" fill="#5A2410" opacity="0.85" />
      <path d="M22 48 L26 44 L30 48 L34 42 L38 48 L34 56 L26 58 Z" fill="#3A1808" opacity="0.6" />
    </svg>
  )
}

export default function PlaceDetailCard({ place, onClose }) {
  if (!place) return null
  return (
    <div className="rounded-card bg-white shadow-card p-3">
      <div className="flex gap-3">
        <div className="relative w-[88px] h-[88px] rounded-card overflow-hidden bg-ktm-navy/10 shrink-0">
          <CanyonThumb />
          <button
            aria-label="bookmark"
            className="absolute top-1.5 left-1.5 grid place-items-center w-7 h-7 rounded-full bg-white/90 text-ktm-navy"
          >
            <Bookmark size={14} strokeWidth={2.2} />
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[17px] font-extrabold tracking-tight text-ktm-navy truncate">
              {place.name}
            </h3>
            <button
              onClick={onClose}
              aria-label="close"
              className="-mt-1 -mr-1 grid place-items-center w-7 h-7 rounded-full text-ink-muted active:bg-ktm-navy/5"
            >
              <X size={16} strokeWidth={2.4} />
            </button>
          </div>
          <div className="mt-0.5 flex items-center gap-1 text-[12.5px]">
            <Star size={13} fill="#F4C400" stroke="#F4C400" />
            <span className="font-bold text-ktm-navy">{place.rating}</span>
            <span className="text-ink-muted">({place.reviewCount})</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[12px] text-ink-muted">
            <Car size={13} strokeWidth={2.2} />
            <span className="truncate">{place.distanceText}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {place.tags?.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-chip bg-ktm-navy/5 text-ktm-navy text-[11px] font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="flex items-center justify-center gap-1.5 h-11 rounded-chip border border-surface-border text-ktm-navy font-semibold text-[14px] active:bg-ktm-navy/5">
          <MessageCircle size={16} strokeWidth={2.2} />
          기사 문의
        </button>
        <button className="flex items-center justify-center gap-1.5 h-11 rounded-chip bg-ktm-yellow text-ktm-navy font-extrabold text-[14px] active:scale-[0.98] transition-transform">
          <Plus size={16} strokeWidth={2.6} />
          일정에 추가
        </button>
      </div>
    </div>
  )
}
