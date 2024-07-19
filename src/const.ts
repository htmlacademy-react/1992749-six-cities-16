export enum AppRoute {
  Main = '/',
  Offer = 'offer/:id',
  Login = '/login',
  Favorites = 'favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const REVIEWS_RATING = [{title: 'perfect', id: 5}, {title: 'good', id: 4}, {title: 'not bad', id: 3},{title: 'badly', id: 2},{title: 'terribly', id: 1}];


