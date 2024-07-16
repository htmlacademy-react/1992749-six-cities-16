export type AuthStatus = 'AUTH' | 'NO_AUTH' | 'UNKNOWN';

export type NameCity = 'Paris' | 'Cologne' | 'Brussels'| 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: NameCity;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

