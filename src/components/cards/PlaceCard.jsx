import { Star, Car, Bookmark, X, MessageCircle, Plus } from 'lucide-react'

export default function PlaceCard() {
  return (
    <section className="mx-3 rounded-3xl bg-white px-3 pt-2 pb-2.5 shadow-2xl">
      <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-black/15" />

      <div className="flex gap-3">
        <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1604537466573-5e94508fd354?auto=format&fit=crop&w=400&q=80"
            alt="차른캐년"
            className="h-full w-full object-cover"
          />
          <button className="absolute right-1.5 top-1.5 grid h-6 w-6 place-items-center rounded-full bg-white/95 shadow">
            <Bookmark size={11} />
          </button>
        </div>

        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-[16px] font-bold tracking-[-0.01em] text-[#1a1a1a]">차른캐년</h2>
            <button className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#111923] text-white">
              <X size={14} strokeWidth={2.5} />
            </button>
          </div>

          <div className="mt-1 flex items-center gap-1 text-[12px]">
            <Star size={12} fill="#F4C400" color="#F4C400" />
            <span className="font-semibold text-[#1a1a1a]">4.9</span>
            <span className="text-black/45 font-normal">(230)</span>
          </div>

          <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-black/55">
            <Car size={11} strokeWidth={2} />
            <span>알마티에서 3시간 30분 (195km)</span>
          </div>

          <div className="mt-1.5 flex gap-1">
            <span className="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-black/60">자연 명소</span>
            <span className="rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-black/60">트레킹 가능</span>
          </div>
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-2">
        <button className="flex h-9 items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-white text-[12px] font-semibold text-[#1a1a1a]">
          <MessageCircle size={14} strokeWidth={2} />
          기사 문의
        </button>
        <button
          className="flex h-9 items-center justify-center gap-1.5 rounded-xl text-[12px] font-bold text-[#1a1a1a]"
          style={{ backgroundColor: '#F4C400' }}
        >
          <Plus size={16} strokeWidth={2.5} />
          일정에 추가
        </button>
      </div>
    </section>
  )
}
