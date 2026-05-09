// src/components/layout/TopBar.jsx
import { Menu, Search, Bell } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="flex-shrink-0 px-4 pt-3 pb-3 bg-transparent">
      <div className="flex items-start justify-between gap-2">
        {/* 좌측 메뉴 버튼 */}
        <button className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-md flex-shrink-0">
          <Menu size={22} strokeWidth={2.5} className="text-gray-900" />
        </button>

        {/* 중앙 로고 */}
        <div className="flex-1 pt-1 pl-1">
          <div className="text-2xl font-black italic leading-none" style={{ color: '#F4C400' }}>
            KTM
          </div>
          <div className="mt-1 text-[9px] font-bold tracking-[0.12em] text-gray-700 whitespace-nowrap">
            KAZAKHSTAN TRAVEL MANAGER
          </div>
        </div>

        {/* 우측 버튼들 */}
        <div className="flex gap-2 flex-shrink-0">
          <button className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-md">
            <Search size={22} strokeWidth={2.5} className="text-gray-900" />
          </button>
          <button className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-md">
            <Bell size={22} strokeWidth={2.5} className="text-gray-900" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full" style={{ backgroundColor: '#F4C400' }} />
          </button>
        </div>
      </div>
    </header>
  )
}
