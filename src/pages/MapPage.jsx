import React from 'react'
import {
  Menu, Search, Bell, LocateFixed, Layers, Filter, Navigation,
  ChevronRight,
} from 'lucide-react'
import PlaceCard from '../components/cards/PlaceCard'
import BottomNav from '../components/layout/BottomNav'

export default function MapPage() {
  return (
    <div className="relative w-full max-w-md mx-auto h-screen bg-gray-100 overflow-hidden font-sans shadow-2xl">

      {/* 1. 배경: 지도 영역 */}
      <div className="absolute inset-0 bg-[#E8E6E1]">
        <div className="w-full h-full opacity-20 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* 2. 상단 영역 */}
      <div className="absolute top-0 left-0 w-full z-10 pt-12 pb-4 px-4">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-4">
          <button className="p-3 bg-white rounded-full shadow-sm">
            <Menu size={20} className="text-gray-700" />
          </button>

          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-yellow-500 italic">KTM</span>
            <span className="text-[10px] font-semibold text-gray-800">KAZAKHSTAN TRAVEL MANAGER</span>
          </div>

          <div className="flex gap-2">
            <button className="p-3 bg-white rounded-full shadow-sm">
              <Search size={20} className="text-gray-700" />
            </button>
            <button className="p-3 bg-white rounded-full shadow-sm relative">
              <Bell size={20} className="text-gray-700" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-yellow-500 rounded-full" />
            </button>
          </div>
        </div>

        {/* '내 여행' 드롭다운 배지 */}
        <div className="inline-flex flex-col bg-[#1A2530] text-white rounded-xl px-4 py-2 shadow-lg">
          <span className="text-xs text-gray-400">내 여행</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">알마티 자연여행 3박 4일</span>
            <ChevronRight size={16} className="rotate-90 text-gray-400" />
          </div>
        </div>
      </div>

      {/* 3. 우측 지도 컨트롤 영역 */}
      <div className="absolute top-32 right-4 z-10 flex flex-col gap-3">
        <button className="p-3 bg-white rounded-full shadow-md"><LocateFixed size={20} className="text-gray-700" /></button>
        <button className="p-3 bg-white rounded-full shadow-md"><Layers size={20} className="text-gray-700" /></button>
        <button className="p-3 bg-white rounded-full shadow-md"><Filter size={20} className="text-gray-700" /></button>
      </div>

      {/* 내비게이션 플로팅 버튼 */}
      <div className="absolute bottom-[360px] right-4 z-10">
        <button className="p-4 bg-[#1A2530] rounded-full shadow-lg">
          <Navigation size={24} className="text-white" />
        </button>
      </div>

      {/* 4. 하단 영역 (카드 및 네비게이션) */}
      <div className="absolute bottom-0 left-0 w-full z-20">

        <div className="pb-24 flex flex-col gap-3">

          {/* 장소 상세 카드 (차른캐년) */}
          <PlaceCard />

          {/* 진행 중인 여행 요약 카드 */}
          <div className="mx-3 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-blue-100">
                <img src="https://images.unsplash.com/photo-1542382156909-9240d0281483?q=80&w=150&auto=format&fit=crop" alt="알마티 자연여행" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-gray-900">알마티 자연여행 3박 4일</h4>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-sm">진행 중</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">2025.06.20 ~ 2025.06.23</p>
                <div className="flex gap-3 text-[10px] text-gray-500 mt-1">
                  <span>📍 장소 12</span>
                  <span>🗓 예약 2</span>
                  <span>👨‍✈️ 기사 연결됨</span>
                </div>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* 5. 바텀 네비게이션 */}
        <BottomNav />
      </div>
    </div>
  )
}
