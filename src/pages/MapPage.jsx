import { useMemo, useRef, useState } from 'react'
import MapCanvas from '@/components/MapCanvas'
import TopBar from '@/components/TopBar'
import FilterChips from '@/components/FilterChips'
import BottomSheet from '@/components/BottomSheet'
import PlaceList from '@/components/PlaceList'
import PlaceDetail from '@/components/PlaceDetail'
import MapControls from '@/components/MapControls'
import { PLACES, FILTERS } from '@/data/places'

export default function MapPage() {
  const [places, setPlaces] = useState(PLACES)
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState(null)
  const [sheetSnap, setSheetSnap] = useState('half')
  const [showRoute, setShowRoute] = useState(true)
  const mapRef = useRef(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return places.filter((p) => {
      if (filter === 'visited' && p.status !== 'visited') return false
      if (filter === 'wishlist' && p.status !== 'wishlist') return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q)
      )
    })
  }, [places, filter, query])

  const stats = useMemo(() => {
    const visited = places.filter((p) => p.status === 'visited')
    const countries = new Set(visited.map((p) => p.country)).size
    return { total: places.length, visited: visited.length, countries }
  }, [places])

  const routeIds = useMemo(
    () => (showRoute ? places.filter((p) => p.status === 'visited').map((p) => p.id) : []),
    [places, showRoute],
  )

  const activePlace = activeId ? places.find((p) => p.id === activeId) : null

  const handleSelectPlace = (id) => {
    setActiveId(id)
    setSheetSnap('half')
  }

  const handleToggleStatus = () => {
    if (!activePlace) return
    setPlaces((list) =>
      list.map((p) =>
        p.id === activePlace.id
          ? {
              ...p,
              status: p.status === 'visited' ? 'wishlist' : 'visited',
              trips: p.status === 'visited' ? p.trips : Math.max(p.trips, 1),
            }
          : p,
      ),
    )
  }

  return (
    <div className="relative w-full h-[100svh] bg-map-bg overflow-hidden font-sans">
      <MapCanvas
        ref={mapRef}
        places={filtered}
        activePlaceId={activeId}
        onSelectPlace={handleSelectPlace}
        routeIds={routeIds}
      />

      <TopBar
        query={query}
        onQueryChange={setQuery}
        onMenuClick={() => setSheetSnap(sheetSnap === 'full' ? 'half' : 'full')}
        stats={stats}
      />

      <FilterChips
        filters={FILTERS}
        value={filter}
        onChange={setFilter}
        places={places}
      />

      <MapControls
        onZoomIn={() => mapRef.current?.zoomBy(1.4)}
        onZoomOut={() => mapRef.current?.zoomBy(1 / 1.4)}
        onRecenter={() => {
          setActiveId(null)
          mapRef.current?.fit()
        }}
        onToggleLayer={() => setShowRoute((v) => !v)}
        layerActive={showRoute}
      />

      <BottomSheet snap={sheetSnap} onSnapChange={setSheetSnap}>
        {activePlace ? (
          <PlaceDetail
            place={activePlace}
            onBack={() => setActiveId(null)}
            onToggleStatus={handleToggleStatus}
          />
        ) : (
          <PlaceList
            places={filtered}
            activeId={activeId}
            onSelect={handleSelectPlace}
            headline={
              filter === 'visited'
                ? '다녀온 곳'
                : filter === 'wishlist'
                ? '가고 싶은 곳'
                : '내 여행 지도'
            }
          />
        )}
      </BottomSheet>
    </div>
  )
}
