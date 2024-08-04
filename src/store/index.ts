import { configureStore } from '@reduxjs/toolkit';
import { rentalReducer } from '../features/sorting-offers-by-cities';


export const store = configureStore({
  reducer: {
    rental: rentalReducer, //rental: rentalReducer, другие редюсеры также через свойство добавлять в объект
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

