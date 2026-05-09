import React from "react";
import {
  Menu,
  Search,
  Bell,
  Crosshair,
  Layers,
  Filter,
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
} from "lucide-react";

const YELLOW = "#F4C400";
const NAVY = "#0E2D50";

const spots = [
  {
    id: 1,
    nameKo: "침블락",
    nameEn: "Chimbulak",
    type: "mountain",
    icon: "▲",
    x: "55%",
    y: "19%",
    color: "#30A852",
  },
  {
    id: 2,
    nameKo: "콜사이 호수",
    nameEn: "Kolsai Lakes",
    type: "lake",
    icon: "≋",
    x: "70%",
    y: "47%",
    color: "#2B96A5",
  },
  {
    id: 3,
    nameKo: "카인디 호수",
    nameEn: "Kaindy Lake",
    type: "lake",
    icon: "≋",
    x: "61%",
    y: "72%",
    color: "#2B96A5",
  },
  {
    id: 4,
    nameKo: "차른캐년",
    nameEn: "Charyn Canyon",
    type: "canyon",
    icon: "▱",
    x: "31%",
    y: "65%",
    color: "#C97816",
  },
];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#eef2ea] flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen overflow-hidden bg-[#f8f5ed] text-[#111] shadow-2xl">
        {/* Map Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://tile.openstreetmap.org/8/181/99.png')] bg-cover bg-center opacity-40" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(255,255,255,0.3),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0.08))]" />

          {/* Fake terrain / map texture */}
          <div className="absolute inset-0 opacity-80">
            <div className="absolute left-[-20%] top-[32%] h-[330px] w-[700px] rotate-[-18deg] rounded-[50%] bg-[#cfdcc1]/45 blur-xl" />
            <div className="absolute right-[-30%] top-[20%] h-[300px] w-[620px] rotate-[18deg] rounded-[50%] bg-[#d9d6c8]/50 blur-lg" />
            <div className="absolute left-[10%] top-[50%] h-[420px] w-[600px] rotate-[14deg] rounded-[50%] bg-[#d5e3cd]/50 blur-xl" />
          </div>
        </div>

        {/* Route SVG */}
        <svg
          className="absolute left-0 top-0 z-10 h-full w-full pointer-events-none"
          viewBox="0 0 430 900"
          preserveAspectRatio="none"
        >
          <path
            d="M111 323 C134 310 153 292 173 268 C192 244 216 222 239 187 C252 166 252 146 253 128"
            fill="none"
            stroke={YELLOW}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M111 323 C101 381 109 438 136 508 C155 557 170 597 195 625 C217 651 251 682 276 704"
            fill="none"
            stroke={YELLOW}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M276 704 C314 665 340 620 345 565 C350 510 344 471 329 430"
            fill="none"
            stroke={YELLOW}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Top Status Area */}
        <div className="relative z-30 px-7 pt-4">
          <div className="flex items-center justify-between text-sm font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-3 w-4 rounded-sm border-2 border-black" />
              <span className="h-3 w-5 rounded-sm border-2 border-black" />
              <span className="h-3 w-6 rounded-sm border-2 border-black" />
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="relative z-30 px-5 pt-5">
          <div className="flex items-start justify-between">
            <button className="grid h-[56px] w-[56px] place-items-center rounded-2xl bg-white/95 shadow-lg shadow-black/10">
              <Menu size={27} />
            </button>

            <div className="ml-3 flex-1">
              <div className="text-[31px] font-black italic leading-none tracking-[-0.06em] text-[#F4C400]">
                KTM
              </div>
              <div className="mt-1 text-[10px] font-bold tracking-[0.08em] text-black/80">
                KAZAKHSTAN TRAVEL MANAGER
              </div>
            </div>

            <div className="flex gap-2">
              <button className="grid h-[56px] w-[56px] place-items-center rounded-2xl bg-white/95 shadow-lg shadow-black/10">
                <Search size={27} />
              </button>
              <button className="relative grid h-[56px] w-[56px] place-items-center rounded-2xl bg-white/95 shadow-lg shadow-black/10">
                <Bell size={25} />
                <span className="absolute right-[13px] top-[12px] h-2.5 w-2.5 rounded-full bg-[#F4C400]" />
              </button>
            </div>
          </div>

          {/* Current Trip Select */}
          <button
            className="mt-5 flex h-[70px] w-[290px] items-center justify-between rounded-2xl px-5 text-left text-white shadow-xl shadow-black/15"
            style={{ backgroundColor: "#111923" }}
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-[#F4C400]/45 text-[#F4C400]">
                <MapPinned size={20} />
              </div>
              <div>
                <div className="text-[12px] text-white/65">내 여행</div>
                <div className="mt-0.5 text-[16px] font-extrabold">
                  알마티 자연여행 3박 4일
                </div>
              </div>
            </div>
            <ChevronDown size={20} className="text-white/80" />
          </button>
        </header>

        {/* Right Tool Buttons */}
        <div className="absolute right-6 top-[174px] z-30 flex flex-col gap-4">
          <ToolButton icon={<Crosshair size={28} />} />
          <ToolButton icon={<Layers size={28} />} />
          <ToolButton icon={<Filter size={28} />} />
        </div>

        {/* City Label */}
        <div className="absolute left-[145px] top-[365px] z-20">
          <div className="text-[24px] font-semibold leading-none">Almaty</div>
          <div className="mt-1 text-[18px] font-bold">알마티</div>
        </div>

        {/* Almaty Point */}
        <div className="absolute left-[105px] top-[413px] z-30">
          <div className="h-6 w-6 rounded-full border-[5px] border-white bg-[#0E2D50] shadow-lg shadow-black/30" />
        </div>

        {/* Car Marker */}
        <div className="absolute left-[190px] top-[365px] z-30 grid h-10 w-10 place-items-center rounded-full bg-white shadow-lg shadow-black/15">
          <Car size={21} />
        </div>

        {/* Place Pins */}
        {spots.map((spot) => (
          <PlacePin key={spot.id} spot={spot} />
        ))}

        {/* Floating Navigation */}
        <button
          className="absolute bottom-[226px] right-7 z-40 grid h-[70px] w-[70px] place-items-center rounded-full text-white shadow-2xl shadow-black/30"
          style={{ backgroundColor: NAVY }}
        >
          <Navigation size={31} fill="white" />
        </button>

        {/* Bottom Detail Sheet */}
        <section className="absolute bottom-[178px] left-4 right-4 z-40 rounded-[25px] bg-white/95 p-4 shadow-2xl shadow-black/15 backdrop-blur-md">
          <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/15" />

          <div className="mt-4 flex gap-4">
            <div className="relative h-[112px] w-[112px] shrink-0 overflow-hidden rounded-2xl bg-orange-100">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80"
                alt="Charyn Canyon"
                className="h-full w-full object-cover"
              />
              <button className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-[#0E2D50]/90 text-white">
                <Bookmark size={18} />
              </button>
            </div>

            <div className="min-w-0 flex-1 pt-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-[21px] font-black tracking-[-0.03em]">
                    차른캐년
                  </h2>
                  <div className="mt-2 flex items-center gap-1.5 text-[15px] font-bold">
                    <Star size={17} fill={YELLOW} color={YELLOW} />
                    <span>4.9</span>
                    <span className="font-medium text-black/60">(230)</span>
                  </div>
                </div>

                <button className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#111923] text-white">
                  <X size={25} />
                </button>
              </div>

              <div className="mt-3 flex items-center gap-2 text-[13px] font-semibold text-black/70">
                <Car size={17} />
                <span>알마티에서 3시간 30분 (195km)</span>
              </div>

              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-black/5 px-3 py-1.5 text-[12px] font-semibold text-black/65">
                  자연 명소
                </span>
                <span className="rounded-full bg-black/5 px-3 py-1.5 text-[12px] font-semibold text-black/65">
                  트레킹 가능
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="flex h-[58px] items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white text-[16px] font-bold shadow-sm">
              <MessageCircle size={22} />
              기사 문의
            </button>
            <button
              className="flex h-[58px] items-center justify-center gap-2 rounded-2xl text-[16px] font-black text-black shadow-sm"
              style={{ backgroundColor: YELLOW }}
            >
              <Plus size={24} />
              일정에 추가
            </button>
          </div>
        </section>

        {/* Trip Progress Card */}
        <section className="absolute bottom-[88px] left-4 right-4 z-40 rounded-[25px] bg-white/95 p-4 shadow-xl shadow-black/10">
          <div className="flex items-center gap-4">
            <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=200&q=80"
                alt="Kolsai Lake"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute right-0 top-0 grid h-7 w-7 place-items-center rounded-full"
                style={{ backgroundColor: YELLOW }}
              >
                <Flag size={15} className="text-white" />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-[19px] font-black tracking-[-0.04em]">
                  알마티 자연여행 3박 4일
                </h3>
                <span className="shrink-0 rounded-full bg-[#DCF6E6] px-2 py-1 text-[11px] font-bold text-[#2D8A57]">
                  진행 중
                </span>
              </div>

              <p className="mt-1 text-[14px] font-semibold text-black/55">
                2025.06.20 ~ 2025.06.23
              </p>

              <div className="mt-3 flex items-center justify-between text-[13px] font-bold text-black/75">
                <div className="flex items-center gap-1">
                  <MapPinned size={17} />
                  장소 12
                </div>
                <div className="flex items-center gap-1">
                  <CalendarCheck size={17} />
                  예약 2
                </div>
                <div className="flex items-center gap-1">
                  <Route size={17} className="text-[#2D8A57]" />
                  기사 연결됨
                </div>
              </div>
            </div>

            <ChevronRight size={28} className="shrink-0 text-black/80" />
          </div>
        </section>

        {/* Bottom Navigation */}
        <nav
          className="absolute bottom-0 left-0 right-0 z-50 rounded-t-[28px] px-4 pb-5 pt-4 text-white shadow-2xl"
          style={{ backgroundColor: NAVY }}
        >
          <div className="grid grid-cols-5 items-center">
            <BottomTab active icon={<Home size={28} fill={YELLOW} />} label="홈" />
            <BottomTab icon={<Map size={28} />} label="지도" />
            <BottomTab icon={<Heart size={28} />} label="코스" />
            <BottomTab icon={<Bookmark size={27} />} label="저장" />
            <BottomTab icon={<User size={28} />} label="내 여행" />
          </div>

          <div className="mx-auto mt-3 h-1.5 w-[135px] rounded-full bg-white/90" />
        </nav>
      </div>
    </div>
  );
}

function ToolButton({ icon }) {
  return (
    <button className="grid h-[58px] w-[58px] place-items-center rounded-2xl bg-white/95 shadow-xl shadow-black/10">
      {icon}
    </button>
  );
}

function PlacePin({ spot }) {
  return (
    <div
      className="absolute z-30"
      style={{
        left: spot.x,
        top: spot.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex items-center gap-2">
        <div
          className="grid h-10 w-10 place-items-center rounded-full border-[4px] border-white text-[18px] font-black text-white shadow-lg shadow-black/20"
          style={{ backgroundColor: spot.color }}
        >
          {spot.icon}
        </div>

        <div className="leading-tight">
          <div className="whitespace-nowrap text-[14px] font-extrabold text-black">
            {spot.nameEn}
          </div>
          <div className="whitespace-nowrap text-[12px] font-bold text-black/75">
            {spot.nameKo}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-1 h-4 w-4 rounded-full border-[3px] border-white bg-[#0E2D50] shadow-md" />
    </div>
  );
}

function BottomTab({ icon, label, active = false }) {
  return (
    <button className="flex flex-col items-center justify-center gap-1">
      <div className={active ? "text-[#F4C400]" : "text-white/90"}>{icon}</div>
      <div
        className={`text-[13px] font-bold ${
          active ? "text-[#F4C400]" : "text-white/90"
        }`}
      >
        {label}
      </div>
    </button>
  );
}
