import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT } from '../../const';
import { City, Offer } from '../../types/types';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// const currentCustomIcon = leaflet.icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40],
// });

type MapProps = {
  city: City;
  offers: Offer[];
}

function Map({city, offers}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
