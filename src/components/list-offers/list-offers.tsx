import { Offer } from '../../types/types';
import PlaceCard from '../place-card/place-card';


type PlacesListProps = {
  offers: Offer[];
  onListOfferHover: (activeId?: string) => void;
}

function ListOffers({offers, onListOfferHover}: PlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((item) => <PlaceCard onListOfferHover={onListOfferHover} key={item.id} offer={item} className='cities'/>)}

    </div>
  );
}

export default ListOffers;

