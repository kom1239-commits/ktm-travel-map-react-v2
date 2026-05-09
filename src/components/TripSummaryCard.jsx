import { MapPin, CalendarDays, MessageCircle, ChevronRight } from 'lucide-react'

function MountainThumb() {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="mtnSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9DC8E6" />
          <stop offset="100%" stopColor="#D6EBF5" />
        </linearGradient>
        <linearGradient id="mtnLake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3F8FB3" />
          <stop offset="100%" stopColor="#1E5A77" />
        </linearGradient>
      </defs>
      <rect width="80" height="80" fill="url(#mtnSky)" />
      <path d="M0 40 L18 18 L30 30 L46 12 L62 26 L80 18 L80 56 L0 56 Z" fill="#3D5A3F" />
      <path d="M14 22 L18 18 L24 28 Z M40 16 L46 12 L52 24 Z M60 22 L65 19 L72 30 Z" fill="#FFFFFF" opacity="0.9" />
      <rect y="56" width="80" height="24" fill="url(#mtnLake)" />
      <path d="M0 62 L80 62" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.4" />
      <path d="M0 70 L80 70" stroke="#FFFFFF" strokeWidth="0.4" opacity="0.3" />
    </svg>
  )
}

export default function TripSummaryCard({ trip }) {
  return (
    <div className="rounded-card bg-white shadow-card p-3 flex items-center gap-3">
      <div className="w-[60px] h-[60px] rounded-card overflow-hidden shrink-0">
        <MountainThumb />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h4 className="text-[15px] font-extrabold tracking-tight text-ktm-navy truncate">
            {trip.title}
          </h4>
          <span className="px-1.5 py-0.5 rounded-chip bg-ktm-yellow text-ktm-navy text-[10px] font-bold shrink-0">
            {trip.status}
          </span>
        </div>
        <div className="mt-0.5 text-[12px] text-ink-muted">
          {trip.startDate} ~ {trip.endDate}
        </div>
        <div className="mt-1.5 flex items-center gap-2 text-[11.5px] text-ink-muted">
          <span className="inline-flex items-center gap-0.5">
            <MapPin size={12} strokeWidth={2.2} />
            장소 {trip.placeCount}
          </span>
          <span className="text-surface-border">·</span>
          <span className="inline-flex items-center gap-0.5">
            <CalendarDays size={12} strokeWidth={2.2} />
            예약 {trip.reservationCount}
          </span>
          <span className="text-surface-border">·</span>
          <span className="inline-flex items-center gap-0.5">
            <MessageCircle size={12} strokeWidth={2.2} />
            기사 {trip.driverConnected ? '연결됨' : '미연결'}
          </span>
        </div>
      </div>
      <ChevronRight size={18} className="text-ink-muted shrink-0" />
    </div>
  )
}
