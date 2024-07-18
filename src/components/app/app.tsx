import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Layout from '../layout/layout';
import PageNotFound from '../page-not-found/page-not-found';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { PublicRoute } from '../public-route/public-route';
import { Offer } from '../../types/types';

const currentStatus = AuthorizationStatus.Auth;

type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />} >
          <Route index element={
            < MainPage
              offers={offers}
            />
          }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path={AppRoute.Login} element={
            <PublicRoute
              authorizationStatus={currentStatus}
            >
              <LoginPage />
            </PublicRoute>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute
              authorizationStatus={currentStatus}
            >
              <FavoritesPage />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
