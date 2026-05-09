import React from "react";
import {
  Menu,
  Search,
  Bell,
  Crosshair,
  Layers,
  SlidersHorizontal,
  Navigation,
  X,
  Star,
  Car,
  MessageCircle,
  Plus,
  Map,
  Heart,
  Bookmark,
  User,
  Home,
  ChevronRight,
  ChevronDown,
  MapPinned,
  CalendarCheck,
  Route,
  Flag,
  Mountain,
  Waves,
  Landmark,
} from "lucide-react";

const YELLOW = "#F4C400";
const NAVY = "#0E2D50";

const places = [
  {
    id: "almaty",
    nameKo: "알마티",
    nameEn: "Almaty",
    x: "28%",
    y: "39%",
    type: "city",
  },
  {
    id: "shymbulak",
    nameKo: "침블락",
    nameEn: "Chimbulak",
    x: "53%",
    y: "25%",
    type: "mountain",
    color: "#2FA85A",
  },
  {
    id: "charyn",
    nameKo: "차른캐년",
    nameEn: "Charyn Canyon",
    x: "30%",
    y: "64%",
    type: "canyon",
    color: "#C97816",
  },
  {
    id: "kolsai",
    nameKo: "콜사이 호수",
    nameEn: "Kolsai Lakes",
    x: "69%",
    y: "51%",
    type: "lake",
    color: "#2B96A5",
  },
  {
    id: "kaindy",
    nameKo: "카인디 호수",
    nameEn: "Kaindy Lake",
    x: "61%",
    y: "70%",
    type: "lake",
    color: "#2B96A5",
  },
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#e9ece7] flex justify-center">
      <main className="relative min-h-screen w-full max-w-[430px] overflow-hidden bg-[#f7f4ec] text-[#111]">
        {/* Map background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#f4f1e9]" />

          {/* Real map 느낌의 부드러운 배경 */}
          <div className="absolute inset-0 opacity-80">
            <div className="absolute -left-20 top-10 h-[260px] w-[540px] rotate-[-12deg] rounded-full bg-[#e5dccd] blur-2xl" />
            <div className="absolute -right-28 top-40 h-[380px] w-[620px] rotate-[18deg] rounded-full bg-[#d8e4d1] blur-2xl" />
            <div className="absolute left-4 top-[310px] h-[430px] w-[600px] rotate-[-18deg] rounded-full bg-[#d2dcc9] blur-xl" />
            <div className="absolute left-[-80px] top-[530px] h-[290px] w-[550px] rotate-[9deg] rounded-full bg-[#e2dfd1] blur-2xl" />
          </div>

          {/* 지도 선 느낌 */}
          <svg
            className="absolute inset-0 h-full w-full opacity-30"
            viewBox="0 0 430 900"
            preserveAspectRatio="none"
          >
            <path
              d="M-40 180 C80 150 150 250 260 190 C330 150 390 170 470 130"
              stroke="#b8a995"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M-20 390 C100 350 170 440 290 400 C360 378 390 360 470 390"
              stroke="#b8a995"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M80 0 C120 150 80 280 130 420 C170 530 125 680 180 900"
              stroke="#c7a39a"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M300 0 C270 140 340 260 300 390 C270 500 340 650 300 900"
              stroke="#9db6c2"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className="absolute inset-0 bg-white/20" />
        </div>

        {/* Route line */}
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 430 900"
          preserveAspectRatio="none"
        >
          <path
            d="M118 350 C160 326 188 290 230 230 C248 205 253 178 254 152"
            fill="none"
            stroke={YELLOW}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118 350 C105 435 120 512 151 575 C177 625 221 665 263 712"
            fill="none"
            stroke={YELLOW}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M263 712 C315 663 341 604 343 535 C345 500 338 465 326 430"
            fill="none"
            stroke={YELLOW}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Status bar */}
        <div className="relative z-40 flex h-9 items-center justify-between px-7 pt-2 text-[15px] font-black">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-4 rounded-[3px] border-2 border-black" />
            <span className="h-3 w-5 rounded-[3px] border-2 border-black" />
            <span className="h-3 w-6 rounded-[3px] border-2 border-black" />
          </div>
        </div>

        {/* Header */}
        <header className="relative z-40 px-5 pt-4">
          <div className="flex items-start justify-between">
            <button className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-white/95 shadow-[0_10px_26px_rgba(0,0,0,0.12)]">
              <Menu size={27} strokeWidth={3} />
            </button>

            <div className="ml-3 flex-1 pt-1">
              <div className="text-[30px] font-black italic leading-none tracking-[-0.07em] text-[#F4C400]">
                KTM
              </div>
              <div className="mt-1 text-[13px] font-black tracking-[-0.02em] text-black/75">
                카자흐스탄 여행 관리자
              </div>
            </div>

            <div className="flex gap-2.5">
              <button className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-white/95 shadow-[0_10px_26px_rgba(0,0,0,0.12)]">
                <Search size={28} strokeWidth={3} />
              </button>
              <button className="relative grid h-[52px] w-[52px] place-items-center rounded-2xl bg-white/95 shadow-[0_10px_26px_rgba(0,0,0,0.12)]">
                <Bell size={26} strokeWidth={2.7} />
                <span className="absolute right-[12px] top-[10px] h-2.5 w-2.5 rounded-full bg-[#F4C400]" />
              </button>
            </div>
          </div>

          {/* Current trip card */}
          <button
            className="mt-4 flex h-[78px] w-full items-center justify-between rounded-[20px] px-5 text-left text-white shadow-[0_18px_35px_rgba(0,0,0,0.18)]"
            style={{ backgroundColor: "#111923" }}
          >
            <div className="flex min-w-0 items-center gap-4">
              <div className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-2xl border border-[#F4C400]/55 text-[#F4C400]">
                <MapPinned size={25} />
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-white/55">내 여행</div>
                <div className="truncate text-[20px] font-black tracking-[-0.04em]">
                  알마티 자연여행 3박 4일
                </div>
              </div>
            </div>
            <ChevronDown size={24} className="shrink-0 text-white/80" />
          </button>
        </header>

        {/* Right buttons */}
        <div className="absolute right-5 top-[250px] z-40 flex flex-col gap-3">
          <MapTool icon={<Crosshair size={25} strokeWidth={2.8} />} />
          <MapTool icon={<Layers size={25} strokeWidth={2.8} />} />
          <MapTool icon={<SlidersHorizontal size={25} strokeWidth={2.8} />} />
        </div>

        {/* Map labels and pins */}
        <div className="absolute inset-0 z-20">
          <div className="absolute left-[26%] top-[38%] -translate-x-1/2">
            <div className="text-[24px] font-semibold leading-none">Almaty</div>
            <div className="mt-1 text-[18px] font-bold">알마티</div>
          </div>

          <div className="absolute left-[28%] top-[44%] -translate-x-1/2 -translate-y-1/2">
            <div className="h-[23px] w-[23px] rounded-full border-[5px] border-white bg-[#0E2D50] shadow-xl shadow-black/25" />
          </div>

          <div className="absolute left-[40%] top-[35.5%] grid h-9 w-9 place-items-center rounded-full bg-white shadow-xl shadow-black/15">
            <Car size={19} />
          </div>

          {places
            .filter((p) => p.id !== "almaty")
            .map((spot) => (
              <PlacePin key={spot.id} spot={spot} />
            ))}
        </div>

        {/* Floating navigation */}
        <button
          className="absolute right-6 top-[58%] z-40 grid h-[62px] w-[62px] place-items-center rounded-full text-white shadow-[0_14px_35px_rgba(0,0,0,0.28)]"
          style={{ backgroundColor: NAVY }}
        >
          <Navigation size={29} fill="white" />
        </button>

        {/* Detail Card - 비율 조정 */}
        <section className="absolute left-4 right-4 bottom-[188px] z-50 rounded-[24px] bg-white/95 px-4 pb-4 pt-3 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <div className="mx-auto mb-3 h-1.5 w-[70px] rounded-full bg-black/15" />

          <div className="flex gap-4">
            <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-[20px] bg-orange-100">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80"
                alt="Charyn Canyon"
                className="h-full w-full object-cover"
              />
              <button className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-[#0E2D50]/90 text-white">
                <Bookmark size={18} />
              </button>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h2 className="truncate text-[24px] font-black tracking-[-0.06em]">
                    차른캐년
                  </h2>

                  <div className="mt-1.5 flex items-center gap-1.5 text-[16px] font-black">
                    <Star size={18} fill={YELLOW} color={YELLOW} />
                    <span>4.9</span>
                    <span className="font-semibold text-black/55">(230)</span>
                  </div>
                </div>

                <button className="grid h-[46px] w-[46px] shrink-0 place-items-center rounded-full bg-[#111923] text-white">
                  <X size={26} />
                </button>
              </div>

              <div className="mt-2.5 flex items-start gap-2 text-[14px] font-bold leading-snug text-black/65">
                <Car size={18} className="mt-0.5 shrink-0" />
                <span>알마티에서 3시간 30분 (195km)</span>
              </div>

              <div className="mt-2.5 flex gap-2">
                <span className="rounded-full bg-black/[0.06] px-3 py-1.5 text-[12px] font-bold text-black/60">
                  자연 명소
                </span>
                <span className="rounded-full bg-black/[0.06] px-3 py-1.5 text-[12px] font-bold text-black/60">
                  트레킹 가능
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="flex h-[50px] items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white text-[15px] font-black shadow-sm">
              <MessageCircle size={21} />
              기사 문의
            </button>
            <button
              className="flex h-[50px] items-center justify-center gap-2 rounded-2xl text-[15px] font-black text-black shadow-sm"
              style={{ backgroundColor: YELLOW }}
            >
              <Plus size={23} />
              일정에 추가
            </button>
          </div>
        </section>

        {/* Trip Card - 겹치지 않게 축소 */}
        <section className="absolute left-4 right-4 bottom-[84px] z-40 rounded-[22px] bg-white/95 px-4 py-3 shadow-[0_14px_35px_rgba(0,0,0,0.13)]">
          <div className="flex items-center gap-3">
            <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=220&q=80"
                alt="Kolsai"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute right-0 top-0 grid h-6 w-6 place-items-center rounded-full"
                style={{ backgroundColor: YELLOW }}
              >
                <Flag size={13} className="text-white" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-[18px] font-black tracking-[-0.05em]">
                  알마티 자연여행 3박 4일
                </h3>
                <span className="shrink-0 rounded-full bg-[#DCF6E6] px-2 py-1 text-[11px] font-black text-[#2D8A57]">
                  진행 중
                </span>
              </div>

              <p className="mt-1 text-[13px] font-bold text-black/55">
                2025.06.20 ~ 2025.06.23
              </p>

              <div className="mt-2 flex items-center justify-between text-[12px] font-black text-black/70">
                <div className="flex items-center gap-1">
                  <MapPinned size={16} />
                  장소 12
                </div>
                <div className="flex items-center gap-1">
                  <CalendarCheck size={16} />
                  예약 2
                </div>
                <div className="flex items-center gap-1">
                  <Route size={16} className="text-[#2D8A57]" />
                  기사 연결
                </div>
              </div>
            </div>

            <ChevronRight size={27} className="shrink-0 text-black/75" />
          </div>
        </section>

        {/* Bottom Navigation - 낮게 조정 */}
        <nav
          className="absolute bottom-0 left-0 right-0 z-50 rounded-t-[27px] px-4 pb-4 pt-3 text-white shadow-[0_-16px_40px_rgba(0,0,0,0.25)]"
          style={{ backgroundColor: NAVY }}
        >
          <div className="grid grid-cols-5 items-center">
            <BottomTab active icon={<Home size={26} fill={YELLOW} />} label="홈" />
            <BottomTab icon={<Map size={26} />} label="지도" />
            <BottomTab icon={<Heart size={26} />} label="코스" />
            <BottomTab icon={<Bookmark size={25} />} label="저장" />
            <BottomTab icon={<User size={26} />} label="내 여행" />
          </div>

          <div className="mx-auto mt-3 h-1.5 w-[125px] rounded-full bg-white/90" />
        </nav>
      </main>
    </div>
  );
}

function MapTool({ icon }) {
  return (
    <button className="grid h-[52px] w-[52px] place-items-center rounded-2xl bg-white/95 shadow-[0_10px_24px_rgba(0,0,0,0.14)]">
      {icon}
    </button>
  );
}

function PlacePin({ spot }) {
  const isLake = spot.type === "lake";
  const isMountain = spot.type === "mountain";
  const isCanyon = spot.type === "canyon";

  return (
    <div
      className="absolute z-30"
      style={{
        left: spot.x,
        top: spot.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex items-center gap-1.5">
        <div
          className="grid h-[38px] w-[38px] place-items-center rounded-full border-[4px] border-white text-white shadow-[0_8px_18px_rgba(0,0,0,0.22)]"
          style={{ backgroundColor: spot.color }}
        >
          {isLake && <Waves size={20} strokeWidth={3} />}
          {isMountain && <Mountain size={20} strokeWidth={3} />}
          {isCanyon && <Landmark size={19} strokeWidth={3} />}
        </div>

        <div className="leading-tight drop-shadow-sm">
          <div className="whitespace-nowrap text-[12px] font-black text-black">
            {spot.nameEn}
          </div>
          <div className="whitespace-nowrap text-[11px] font-black text-black/75">
            {spot.nameKo}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-[#0E2D50] shadow-md" />
    </div>
  );
}

function BottomTab({ icon, label, active = false }) {
  return (
    <button className="flex flex-col items-center justify-center gap-1">
      <div className={active ? "text-[#F4C400]" : "text-white/90"}>{icon}</div>
      <div
        className={`text-[12px] font-black ${
          active ? "text-[#F4C400]" : "text-white/90"
        }`}
      >
        {label}
      </div>
    </button>
  );
}
