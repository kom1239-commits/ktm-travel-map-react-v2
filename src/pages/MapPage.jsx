import React from "react";
import {
  Menu, Search, Bell, Crosshair, Layers, SlidersHorizontal,
  Navigation, X, Star, Car, MessageCircle, Plus,
  Map, Heart, Bookmark, User, Home, ChevronRight, ChevronDown,
  MapPinned, CalendarCheck, Route, Flag,
  Mountain, Waves, Landmark,
} from "lucide-react";
import PlaceCard from '../components/cards/PlaceCard'
import BottomNav from '../components/layout/BottomNav'

const YELLOW = "#F4C400";
const NAVY = "#0E2D50";

const places = [
  { id: "shymbulak", nameKo: "침블락", nameEn: "Chimbulak", x: "55%", y: "15%", type: "mountain", color: "#2FA85A" },
  { id: "kolsai", nameKo: "콜사이 호수", nameEn: "Kolsai Lakes", x: "70%", y: "40%", type: "lake", color: "#2B96A5" },
  { id: "kaindy", nameKo: "카인디 호수", nameEn: "Kaindy Lake", x: "60%", y: "75%", type: "lake", color: "#2B96A5" },
  { id: "charyn", nameKo: "차른캐년", nameEn: "Charyn Canyon", x: "28%", y: "70%", type: "canyon", color: "#C97816" },
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#e9ece7] flex justify-center">
      <main className="relative flex flex-col w-full max-w-[430px] min-h-screen bg-[#f7f4ec] text-[#111] overflow-hidden">

        {/* ============ 1. 상태바 ============ */}
        <div className="flex items-center justify-between px-7 pt-3 pb-1 text-[15px] font-bold flex-shrink-0">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-4 rounded-[2px] border-[1.5px] border-black" />
            <span className="h-3 w-5 rounded-[2px] border-[1.5px] border-black" />
            <span className="h-3 w-6 rounded-[2px] border-[1.5px] border-black" />
          </div>
        </div>

        {/* ============ 2. 헤더 ============ */}
        <header className="flex-shrink-0 px-4 pt-3 pb-3 z-30">
          <div className="flex items-start justify-between gap-2">
            <button className="grid h-[48px] w-[48px] place-items-center rounded-2xl bg-white shadow-md">
              <Menu size={24} strokeWidth={2.5} />
            </button>

            <div className="flex-1 pt-1 pl-1">
              <div className="text-[26px] font-black italic leading-none tracking-tight" style={{ color: YELLOW }}>
                KTM
              </div>
              <div className="mt-1 text-[9px] font-bold tracking-[0.12em] text-black/75 whitespace-nowrap">
                KAZAKHSTAN TRAVEL MANAGER
              </div>
            </div>

            <div className="flex gap-2">
              <button className="grid h-[48px] w-[48px] place-items-center rounded-2xl bg-white shadow-md">
                <Search size={22} strokeWidth={2.5} />
              </button>
              <button className="relative grid h-[48px] w-[48px] place-items-center rounded-2xl bg-white shadow-md">
                <Bell size={22} strokeWidth={2.5} />
                <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full" style={{ backgroundColor: YELLOW }} />
              </button>
            </div>
          </div>
        </header>

        {/* ============ 3. 지도 영역 (핵심: flex-1로 남은 공간 다 차지) ============ */}
        <div className="relative flex-1 mx-0 overflow-hidden">

          {/* 지도 배경 */}
          <div className="absolute inset-0 bg-[#f4f1e9]">
            <div className="absolute inset-0 opacity-60">
              <div className="absolute -left-20 top-10 h-[260px] w-[540px] rotate-[-12deg] rounded-full bg-[#e5dccd] blur-2xl" />
              <div className="absolute -right-28 top-40 h-[380px] w-[620px] rotate-[18deg] rounded-full bg-[#d8e4d1] blur-2xl" />
              <div className="absolute left-4 top-[200px] h-[330px] w-[600px] rotate-[-18deg] rounded-full bg-[#d2dcc9] blur-xl" />
            </div>
          </div>

          {/* "내 여행" 다크 카드 (지도 위 좌측 상단) */}
          <button className="absolute left-4 top-3 z-30 flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-white shadow-xl"
                  style={{ backgroundColor: "#111923" }}>
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#F4C400]/45" style={{ color: YELLOW }}>
              <MapPinned size={18} />
            </div>
            <div>
              <div className="text-[10px] font-medium text-white/60">내 여행</div>
              <div className="text-[14px] font-bold tracking-tight">알마티 자연여행 3박 4일</div>
            </div>
            <ChevronDown size={18} className="text-white/80" />
          </button>

          {/* 우측 도구 버튼들 */}
          <div className="absolute right-4 top-3 z-30 flex flex-col gap-2.5">
            <ToolButton icon={<Crosshair size={22} strokeWidth={2.5} />} />
            <ToolButton icon={<Layers size={22} strokeWidth={2.5} />} />
            <ToolButton icon={<SlidersHorizontal size={22} strokeWidth={2.5} />} />
          </div>

          {/* 경로 SVG */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full z-10" viewBox="0 0 400 600" preserveAspectRatio="none">
            <path d="M105 320 C130 290 160 250 200 200 C220 175 220 150 220 100"
                  fill="none" stroke={YELLOW} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M105 320 C95 380 110 440 145 480 C175 510 220 540 270 480"
                  fill="none" stroke={YELLOW} strokeWidth="3.5" strokeLinecap="round" />
            <path d="M270 480 C300 440 305 400 280 360 C260 330 200 340 130 420"
                  fill="none" stroke={YELLOW} strokeWidth="3.5" strokeLinecap="round" />
          </svg>

          {/* 알마티 라벨 + 점 */}
          <div className="absolute left-[20%] top-[52%] z-20">
            <div className="text-[20px] font-semibold leading-none">Almaty</div>
            <div className="mt-0.5 text-[15px] font-bold">알마티</div>
          </div>
          <div className="absolute left-[24%] top-[57%] z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="h-5 w-5 rounded-full border-[4px] border-white shadow-lg" style={{ backgroundColor: NAVY }} />
          </div>

          {/* 차 마커 */}
          <div className="absolute left-[40%] top-[48%] z-30 grid h-9 w-9 place-items-center rounded-full bg-white shadow-lg">
            <Car size={18} />
          </div>

          {/* POI 핀들 */}
          {places.map((spot) => <PlacePin key={spot.id} spot={spot} />)}

          {/* 우측 하단 네비게이션 버튼 */}
          <button className="absolute right-5 bottom-5 z-40 grid h-[56px] w-[56px] place-items-center rounded-full text-white shadow-2xl"
                  style={{ backgroundColor: NAVY }}>
            <Navigation size={24} fill="white" />
          </button>
        </div>

        {/* ============ 4. 차른캐년 상세 카드 ============ */}
        <PlaceCard />

        {/* ============ 5. 진행중 여행 카드 ============ */}
        <section className="flex-shrink-0 mx-3 mt-2 z-30 rounded-2xl bg-white px-3 py-2.5 shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=80"
                   alt="" className="h-full w-full object-cover" />
              <div className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full" style={{ backgroundColor: YELLOW }}>
                <Flag size={10} className="text-white" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3 className="truncate text-[14px] font-black tracking-tight">알마티 자연여행 3박 4일</h3>
                <span className="shrink-0 rounded-full bg-[#DCF6E6] px-1.5 py-0.5 text-[9px] font-bold text-[#2D8A57]">진행 중</span>
              </div>
              <p className="mt-0.5 text-[11px] font-medium text-black/55">2025.06.20 ~ 2025.06.23</p>
              <div className="mt-1 flex items-center gap-3 text-[10px] font-bold text-black/70">
                <span className="flex items-center gap-1"><MapPinned size={11} />장소 12</span>
                <span className="flex items-center gap-1"><CalendarCheck size={11} />예약 2</span>
                <span className="flex items-center gap-1 text-[#2D8A57]"><Route size={11} />기사 연결됨</span>
              </div>
            </div>

            <ChevronRight size={20} className="shrink-0 text-black/60" />
          </div>
        </section>

        <div className="h-20" />

        {/* ============ 6. 하단 탭바 ============ */}
        <BottomNav />
      </main>
    </div>
  );
}

function ToolButton({ icon }) {
  return (
    <button className="grid h-[44px] w-[44px] place-items-center rounded-2xl bg-white shadow-md">
      {icon}
    </button>
  );
}

function PlacePin({ spot }) {
  return (
    <div className="absolute z-30" style={{ left: spot.x, top: spot.y, transform: "translate(-50%, -50%)" }}>
      <div className="flex items-center gap-1.5">
        <div className="grid h-9 w-9 place-items-center rounded-full border-[3px] border-white text-white shadow-lg"
             style={{ backgroundColor: spot.color }}>
          {spot.type === "lake" && <Waves size={16} strokeWidth={2.5} />}
          {spot.type === "mountain" && <Mountain size={16} strokeWidth={2.5} />}
          {spot.type === "canyon" && <Landmark size={15} strokeWidth={2.5} />}
        </div>
        <div className="leading-tight">
          <div className="whitespace-nowrap text-[11px] font-bold text-black">{spot.nameEn}</div>
          <div className="whitespace-nowrap text-[10px] font-semibold text-black/70">{spot.nameKo}</div>
        </div>
      </div>
      <div className="mx-auto mt-0.5 h-2.5 w-2.5 rounded-full border-2 border-white" style={{ backgroundColor: NAVY }} />
    </div>
  );
}
