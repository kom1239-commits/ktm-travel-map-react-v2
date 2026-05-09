export const PLACES = [
  { id: 'seoul',     name: '서울',       country: 'South Korea', lng: 126.98, lat: 37.57, status: 'visited',  trips: 12, note: '집 같은 도시. 한강 야경.' },
  { id: 'busan',     name: '부산',       country: 'South Korea', lng: 129.08, lat: 35.18, status: 'visited',  trips: 4,  note: '광안리 바다와 돼지국밥.' },
  { id: 'jeju',      name: '제주',       country: 'South Korea', lng: 126.50, lat: 33.49, status: 'visited',  trips: 3,  note: '오름 트래킹과 흑돼지.' },
  { id: 'gangneung', name: '강릉',       country: 'South Korea', lng: 128.88, lat: 37.75, status: 'wishlist', trips: 0,  note: '커피 거리, 정동진 일출.' },
  { id: 'tokyo',     name: '도쿄',       country: 'Japan',       lng: 139.76, lat: 35.68, status: 'visited',  trips: 2,  note: '시부야와 맛있는 라멘.' },
  { id: 'osaka',     name: '오사카',     country: 'Japan',       lng: 135.50, lat: 34.69, status: 'visited',  trips: 1,  note: '도톤보리 스트리트 푸드.' },
  { id: 'kyoto',     name: '교토',       country: 'Japan',       lng: 135.77, lat: 35.01, status: 'wishlist', trips: 0,  note: '단풍철에 가보고 싶은 곳.' },
  { id: 'sapporo',   name: '삿포로',     country: 'Japan',       lng: 141.35, lat: 43.06, status: 'wishlist', trips: 0,  note: '겨울 눈 축제.' },
  { id: 'taipei',    name: '타이페이',   country: 'Taiwan',      lng: 121.56, lat: 25.03, status: 'visited',  trips: 1,  note: '야시장 그리고 망고 빙수.' },
  { id: 'hongkong',  name: '홍콩',       country: 'Hong Kong',   lng: 114.16, lat: 22.32, status: 'visited',  trips: 2,  note: '빅토리아 피크 야경.' },
  { id: 'shanghai',  name: '상하이',     country: 'China',       lng: 121.47, lat: 31.23, status: 'visited',  trips: 1,  note: '와이탄 산책.' },
  { id: 'beijing',   name: '베이징',     country: 'China',       lng: 116.40, lat: 39.90, status: 'wishlist', trips: 0,  note: '만리장성.' },
  { id: 'bangkok',   name: '방콕',       country: 'Thailand',    lng: 100.50, lat: 13.75, status: 'visited',  trips: 2,  note: '거리 음식 천국.' },
  { id: 'chiangmai', name: '치앙마이',   country: 'Thailand',    lng: 98.99,  lat: 18.79, status: 'wishlist', trips: 0,  note: '느긋한 북부 여행.' },
  { id: 'hanoi',     name: '하노이',     country: 'Vietnam',     lng: 105.85, lat: 21.03, status: 'wishlist', trips: 0,  note: '하롱베이 크루즈.' },
  { id: 'danang',    name: '다낭',       country: 'Vietnam',     lng: 108.22, lat: 16.05, status: 'visited',  trips: 1,  note: '미케 비치와 반미.' },
  { id: 'singapore', name: '싱가포르',   country: 'Singapore',   lng: 103.82, lat: 1.35,  status: 'wishlist', trips: 0,  note: '가든스 바이 더 베이.' },
  { id: 'bali',      name: '발리',       country: 'Indonesia',   lng: 115.19, lat: -8.41, status: 'wishlist', trips: 0,  note: '우붓 라이스 테라스.' },
  { id: 'manila',    name: '마닐라',     country: 'Philippines', lng: 120.98, lat: 14.60, status: 'wishlist', trips: 0,  note: '보라카이 경유.' },
  { id: 'kl',        name: '쿠알라룸푸르', country: 'Malaysia',  lng: 101.69, lat: 3.14,  status: 'wishlist', trips: 0,  note: '페트로나스 트윈 타워.' },
]

export const FILTERS = [
  { id: 'all',      label: '전체',     count: (p) => p.length },
  { id: 'visited',  label: '다녀온 곳', count: (p) => p.filter(x => x.status === 'visited').length },
  { id: 'wishlist', label: '가고 싶은', count: (p) => p.filter(x => x.status === 'wishlist').length },
]
