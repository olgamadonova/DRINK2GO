const ZOOM_DEFAULT = 20;
const pictureMap = document.querySelector('.map__picture');

pictureMap.classList.add('map__picture--hidden');

const map = L.map('map-canvas');

const DEFAULT_COORDINATES = {
  lat: '59.968322',
  lng: '30.317359',
};

const mainPinIcon = L.icon({
  iconUrl: '../../img/content-images/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  DEFAULT_COORDINATES,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainPinMarker.addTo(map);

const initMap = () => {
  map
    .setView(
      DEFAULT_COORDINATES,
      ZOOM_DEFAULT
    );
};

export {initMap};
