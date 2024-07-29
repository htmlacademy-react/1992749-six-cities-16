import { Link } from 'react-router-dom';
import ListOffers from '../../components/list-offers/list-offers';
import { ACTIVE_CITY, CITY, CITY_NAMES } from '../../const';
import { Offer } from '../../types/types';
import Map from '../../components/map/map';
import { useState } from 'react';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({offers}: MainPageProps): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(undefined);

  const handleListOfferHover = (activeId?: string) => {
    const currentOffer = offers.find((point) => point.id === activeId);

    setSelectedOffer(currentOffer);
  };
  return (

    <div className="page page--gray page--main">

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            <ul className="locations__list tabs__list">
              {CITY_NAMES.map((item) => (
                <li className="locations__item" key={item}>
                  <Link className={`locations__item-link tabs__item ${(item === ACTIVE_CITY) ? 'tabs__item--active' : ''}`} to="#">
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
              <b className="places__found">{offers.length} places to stay in {ACTIVE_CITY}</b>
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

              <ListOffers offers={offers} onListOfferHover={handleListOfferHover}/>

            </section>
            <div className="cities__right-section">
              <Map city={CITY} offers={offers} selectedOffer={selectedOffer}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

