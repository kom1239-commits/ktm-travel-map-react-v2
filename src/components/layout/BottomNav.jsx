import { Home, Map, Mountain, Bookmark, User } from 'lucide-react'

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 px-4 pb-3 pt-3 rounded-t-3xl"
      style={{ backgroundColor: '#0E2D50' }}
    >
      <div className="grid grid-cols-5">
        <BottomTab active icon={<Home size={22} fill="#F4C400" color="#F4C400" />} label="홈" />
        <BottomTab icon={<Map size={22} />} label="지도" />
        <BottomTab icon={<Mountain size={22} />} label="코스" />
        <BottomTab icon={<Bookmark size={22} />} label="저장" />
        <BottomTab icon={<User size={22} />} label="내 여행" />
      </div>
    </nav>
  )
}

function BottomTab({ icon, label, active = false }) {
  const color = active ? '#F4C400' : 'rgba(255,255,255,0.85)'
  return (
    <button className="flex flex-col items-center justify-center gap-0.5 py-1">
      <div style={{ color }}>{icon}</div>
      <div className="text-[10px] font-bold" style={{ color }}>{label}</div>
    </button>
  )
}
