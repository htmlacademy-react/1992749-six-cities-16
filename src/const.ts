export const NUMBER_OF_RENTAL_OFFERS = 5;

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
