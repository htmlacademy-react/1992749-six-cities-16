
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types';
import { AppDispatch } from '../store';
import { offers } from '../mocks/offers';


export type SortOption = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

type InitialState = {
  currentCity: string;
  offers: Offer[];
  sortOption: SortOption;
}

const initialState: InitialState = {
  currentCity: 'Paris',
  offers: [],
  sortOption: 'Popular'
};

const rentalSlice = createSlice({
  name: 'rental',
  initialState,
  reducers: {
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
    },
  }
});

export const { setCurrentCity, setOffers, setSortOption} = rentalSlice.actions;

export const rentalReducer = rentalSlice.reducer;

export const loadOffers = () => (dispatch: AppDispatch) => { // func для загрузки моковых данных в store
  dispatch(setOffers(offers));
};

