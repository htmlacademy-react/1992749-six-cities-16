import { useState } from 'react';
import { Offer } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getCapitalLetter } from '../../utils';

type PlaceCardProps = {
  offer: Offer;
  className: string;
}

function PlaceCard({offer, className}: PlaceCardProps): JSX.Element {
  const {price, previewImage, title, type, isPremium, rating, id, isFavorite} = offer;
  const [activeId] = useState(id);


  return (
    <article className={`${className}__card place-card`} onMouseEnter={() => (activeId)} >
      { isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', id)}>
          <img className="place-card__image" src={previewImage} width={(className === 'favorites') ? '150' : '260'} height={(className === '/favorites') ? '110' : '200'} alt="Place image" />
        </Link>
      </div>
      <div className={`${className === 'favorites' ? 'favorites__card-info' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(rating * 20)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{getCapitalLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;