import { Offer } from '../../types/types';
import { getOfferCardsByCity } from '../../utils';
import PlaceCard from '../place-card/place-card';

type FavoriteContainerProps = {
  favorites: Offer[];
  onListOfferHover: (activeId?: string) => void;
}

function FavoriteContainer({favorites, onListOfferHover}: FavoriteContainerProps): JSX.Element {
  const offerCardsByCity = getOfferCardsByCity(favorites);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        { Object.entries(offerCardsByCity).map(([cityName, offerCards]) => (
          <li className="favorites__locations-items" key={cityName}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{cityName}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offerCards.map((item) => <PlaceCard onListOfferHover={onListOfferHover} key={item.id} offer={item} className='favorites'/>)}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoriteContainer;

