import { Link } from 'react-router-dom';
import ListOffers from '../../components/list-offers/list-offers';
import { CITY_NAMES } from '../../const';
import { Offer } from '../../types/types';
import Map from '../../components/map/map';
import { useState } from 'react';
import { setCurrentCity } from '../../features/sorting-offers-by-cities';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handleListOfferHover = (id?: string) => {
    const currentOffer = offers.find((point) => point.id === id);

    setSelectedOffer(currentOffer);
  };

  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((state) => state.rental.currentCity);
  const handleCityChange = (city: string) => {
    dispatch(setCurrentCity(city));
  };
  const offersForCurrentCity = offers.filter((item) => item.city.name === currentCity);

  return (

    <div className="page page--gray page--main">

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <ul className="locations__list tabs__list">
              {CITY_NAMES.map((item) => (
                <li className="locations__item" key={item} onClick={() => handleCityChange(item)}>
                  <Link className={`locations__item-link tabs__item ${(item === currentCity) ? 'tabs__item--active' : ''}`} to="#">
                    <span>{item}</span>
                  </Link>
                </li>
              ))}

            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersForCurrentCity.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>

              <ListOffers offers={offersForCurrentCity} onListOfferHover={handleListOfferHover} />

            </section>
            <div className="cities__right-section">
              <Map city={offersForCurrentCity[0].city} offers={offersForCurrentCity} selectedOffer={selectedOffer} className='cities'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

