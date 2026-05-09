import { Menu, Search, Bell } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="sticky top-0 z-topbar bg-white">
      <div className="flex items-center gap-2 px-4 pt-3 pb-3">
        <button
          aria-label="menu"
          className="grid place-items-center w-10 h-10 rounded-full text-ktm-navy active:bg-ktm-navy/5"
        >
          <Menu size={22} strokeWidth={2.2} />
        </button>

        <div className="flex-1 flex flex-col items-center -ml-4">
          <div className="flex items-baseline">
            <span className="font-extrabold tracking-tight text-[26px] leading-none text-ktm-navy">K</span>
            <span className="font-extrabold tracking-tight text-[26px] leading-none text-ktm-yellow">T</span>
            <span className="font-extrabold tracking-tight text-[26px] leading-none text-ktm-navy">M</span>
          </div>
          <span className="mt-0.5 text-[9px] font-semibold tracking-[0.18em] text-ktm-navy/70">
            KAZAKHSTAN TRAVEL MANAGER
          </span>
        </div>

        <button
          aria-label="search"
          className="grid place-items-center w-10 h-10 rounded-full text-ktm-navy active:bg-ktm-navy/5"
        >
          <Search size={20} strokeWidth={2.2} />
        </button>
        <button
          aria-label="notifications"
          className="relative grid place-items-center w-10 h-10 rounded-full text-ktm-navy active:bg-ktm-navy/5"
        >
          <Bell size={20} strokeWidth={2.2} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-ktm-yellow ring-2 ring-white" />
        </button>
      </div>
    </header>
  )
}
