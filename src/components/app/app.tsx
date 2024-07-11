import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Layout from '../layout/layout';

type AppProps = {
  numberOfRentalOffers: number;
}

function App({numberOfRentalOffers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage numberOfRentalOffers={numberOfRentalOffers} />} />
          <Route path='offer-page' element={<OfferPage />} />
          <Route path='login-page' element={<LoginPage />} />
          <Route path='favorites-page' element={<FavoritesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
