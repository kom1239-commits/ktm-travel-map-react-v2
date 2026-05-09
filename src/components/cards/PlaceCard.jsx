import { Star, Car, Bookmark, X, MessageCircle, Plus } from 'lucide-react'

export default function PlaceCard() {
  return (
    <section className="mx-3 rounded-3xl bg-white px-3 pt-2 pb-3 shadow-2xl">
      <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-black/15" />

      <div className="flex gap-3">
        <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=400&q=80"
            alt="차른캐년"
            className="h-full w-full object-cover"
          />
          <button className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full bg-white/95 shadow">
            <Bookmark size={13} />
          </button>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-[18px] font-black tracking-tight">차른캐년</h2>
            <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111923] text-white">
              <X size={16} />
            </button>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-[13px] font-bold">
            <Star size={14} fill="#F4C400" color="#F4C400" />
            <span>4.9</span>
            <span className="text-black/55 font-medium">(230)</span>
          </div>

          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-black/65">
            <Car size={13} />
            <span>알마티에서 3시간 30분 (195km)</span>
          </div>

          <div className="mt-1.5 flex gap-1">
            <span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[10px] font-semibold text-black/65">자연 명소</span>
            <span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[10px] font-semibold text-black/65">트레킹 가능</span>
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="flex h-10 items-center justify-center gap-1.5 rounded-xl border border-black/10 bg-white text-[13px] font-bold">
          <MessageCircle size={16} />
          기사 문의
        </button>
        <button
          className="flex h-10 items-center justify-center gap-1.5 rounded-xl text-[13px] font-bold text-black"
          style={{ backgroundColor: '#F4C400' }}
        >
          <Plus size={18} />
          일정에 추가
        </button>
      </div>
    </section>
  )
}
