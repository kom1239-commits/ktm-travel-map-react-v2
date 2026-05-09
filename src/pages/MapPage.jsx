import { useState } from 'react'
import TopBar from '../components/TopBar'
import TripSelector from '../components/TripSelector'
import MapCanvas from '../components/MapCanvas'
import MapControls from '../components/MapControls'
import PlaceDetailCard from '../components/PlaceDetailCard'
import TripSummaryCard from '../components/TripSummaryCard'
import BottomTabBar from '../components/BottomTabBar'
import { trip, places } from '../data/trip'

export default function MapPage() {
  const [selectedId, setSelectedId] = useState('charyn')
  const [activeTab, setActiveTab] = useState('home')
  const selected = places.find((p) => p.id === selectedId && !p.isCity)

  return (
    <div
      className="h-full w-full max-w-[440px] mx-auto bg-surface-subtle flex flex-col"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <TopBar />

      <main className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0">
          <MapCanvas selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        <div className="absolute top-3 left-3 z-overlay">
          <TripSelector title={trip.title} />
        </div>

        <MapControls />

        <div className="absolute left-0 right-0 bottom-0 z-sheet px-3 pb-3 pt-2 flex flex-col gap-2 pointer-events-none">
          <div className="pointer-events-auto">
            <PlaceDetailCard place={selected} onClose={() => setSelectedId(null)} />
          </div>
          <div className="pointer-events-auto">
            <TripSummaryCard trip={trip} />
          </div>
        </div>
      </main>

      <BottomTabBar active={activeTab} onChange={setActiveTab} />
    </div>
  )
}
