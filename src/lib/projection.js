// Equirectangular projection for a focused Asia view.
// Map viewBox is 800 (w) x 1000 (h) covering the longitude/latitude window below.

export const VIEW = { width: 800, height: 1000 }

export const BOUNDS = {
  minLng: 92,
  maxLng: 148,
  minLat: -12,
  maxLat: 50,
}

export function project(lng, lat) {
  const { minLng, maxLng, minLat, maxLat } = BOUNDS
  const x = ((lng - minLng) / (maxLng - minLng)) * VIEW.width
  const y = ((maxLat - lat) / (maxLat - minLat)) * VIEW.height
  return { x, y }
}
