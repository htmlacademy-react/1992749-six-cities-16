import { AppRoute } from './const';
import { Offer, CardsByCityType } from './types/types';


export const getCapitalLetter = (item: string) => `${item[0].toUpperCase()}${item.slice(1)}`;

export const getPhrases = (item: string) => item.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');

export const getLayoutState = (pathname: AppRoute) => {
  let rootClassName = '';
  let linkClassName = '';
  let shouldRenderUser = true;
  let shouldRenderFooter = false;

  if (pathname === AppRoute.Main) {
    rootClassName = 'page--gray page--main';
    linkClassName = 'header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    rootClassName = 'page--gray page--login';
    shouldRenderUser = false;
  } else if (pathname === AppRoute.Favorites) {
    shouldRenderFooter = true;
  }

  return {rootClassName, linkClassName, shouldRenderUser, shouldRenderFooter};
};

export const getOfferCardsByCity = (offerCards: Offer[]) => {
  const cardsByCity: CardsByCityType = {};

  for (const card of offerCards) {
    if (!cardsByCity[card.city.name]) {
      cardsByCity[card.city.name] = [];
    }

    cardsByCity[card.city.name].push(card);
  }

  return cardsByCity;
};
