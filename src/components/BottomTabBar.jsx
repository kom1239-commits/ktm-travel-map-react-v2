import { Home, Map, Route, Bookmark, Briefcase } from 'lucide-react'

const TABS = [
  { id: 'home',  label: '홈',     icon: Home },
  { id: 'map',   label: '지도',   icon: Map },
  { id: 'plan',  label: '코스',   icon: Route },
  { id: 'saved', label: '저장',   icon: Bookmark },
  { id: 'trip',  label: '내 여행', icon: Briefcase },
]

export default function BottomTabBar({ active = 'home', onChange }) {
  return (
    <nav
      className="z-tab bg-white border-t border-surface-border"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="grid grid-cols-5 h-14">
        {TABS.map((t) => {
          const Icon = t.icon
          const isActive = t.id === active
          return (
            <li key={t.id}>
              <button
                onClick={() => onChange?.(t.id)}
                className="w-full h-full flex flex-col items-center justify-center gap-0.5"
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.6 : 2}
                  className={isActive ? 'text-ktm-navy' : 'text-ink-light'}
                />
                <span className={`text-[10.5px] font-semibold ${isActive ? 'text-ktm-navy' : 'text-ink-light'}`}>
                  {t.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
