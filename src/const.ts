export const NUMBER_OF_RENTAL_OFFERS = 5;

export enum AppRoute {
  Root = '/',
  Offer = 'offer-page/:id',
  Login = '/login-page',
  Favorites = 'favorites-page',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
