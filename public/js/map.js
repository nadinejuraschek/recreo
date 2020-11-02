mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [20, 20],
  zoom: 8,
});

const marker = new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);
