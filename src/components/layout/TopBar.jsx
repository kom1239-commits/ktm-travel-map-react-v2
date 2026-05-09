import { Menu, Search, Bell, ChevronDown, Map } from 'lucide-react'

export default function TopBar() {
  return (
    <>
      {/* 헤더 영역 */}
      <header className="absolute top-6 left-5 right-5 z-50 flex items-center gap-3">
        {/* 좌측 메뉴 버튼 */}
        <button
          className="w-12 h-12 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform"
          aria-label="메뉴"
        >
          <Menu size={22} strokeWidth={2.5} className="text-gray-900" />
        </button>

        {/* 중앙 로고 영역 */}
        <div className="flex-1 flex flex-col items-start justify-center pl-1">
          <h1
            className="text-[28px] font-black italic leading-none tracking-tight"
            style={{ color: '#F4C400', fontStyle: 'italic' }}
          >
            KTM
          </h1>
          <p className="text-[10px] font-medium text-gray-800 tracking-[0.08em] mt-0.5 whitespace-nowrap">
            KAZAKHSTAN TRAVEL MANAGER
          </p>
        </div>

        {/* 우측 검색 버튼 */}
        <button
          className="w-12 h-12 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform"
          aria-label="검색"
        >
          <Search size={22} strokeWidth={2.5} className="text-gray-900" />
        </button>

        {/* 우측 알림 버튼 (노란 dot 포함) */}
        <button
          className="relative w-12 h-12 bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform"
          aria-label="알림"
        >
          <Bell size={22} strokeWidth={2.5} className="text-gray-900" />
          {/* 노란색 알림 표시 dot */}
          <span
            className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border-2 border-white"
            style={{ backgroundColor: '#F4C400' }}
          />
        </button>
      </header>

      {/* "내 여행" 다크 카드 (헤더 바로 아래) */}
      <div className="absolute top-[88px] left-5 z-40">
        <button
          className="bg-[#0E2D50] text-white rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-[0_4px_16px_rgba(0,0,0,0.15)] active:scale-95 transition-transform"
        >
          {/* 노란 세로 막대 + 지도 아이콘 */}
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-9 rounded-full" style={{ backgroundColor: '#F4C400' }} />
            <Map size={20} className="text-white" strokeWidth={2} />
          </div>

          {/* 텍스트 영역 */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] text-gray-300 font-normal leading-tight">
              내 여행
            </span>
            <span className="text-[14px] font-bold leading-tight mt-0.5">
              알마티 자연여행 3박 4일
            </span>
          </div>

          {/* 화살표 아이콘 */}
          <ChevronDown size={18} className="text-white ml-1" strokeWidth={2.5} />
        </button>
      </div>
    </>
  )
}
