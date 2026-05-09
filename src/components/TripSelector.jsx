import { ChevronDown } from 'lucide-react'

export default function TripSelector({ title }) {
  return (
    <button className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-chip bg-ktm-navy text-white shadow-card active:scale-[0.98] transition-transform">
      <span className="px-2 py-0.5 rounded-chip bg-ktm-yellow text-ktm-navy text-[11px] font-bold">
        내 여행
      </span>
      <span className="text-[13px] font-semibold tracking-tight">{title}</span>
      <ChevronDown size={16} strokeWidth={2.4} />
    </button>
  )
}
