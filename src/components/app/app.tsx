import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import Layout from '../layout/layout';
import PageNotFound from '../page-not-found/page-not-found';
import { AppRoute } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { PublicRoute } from '../public-route/public-route';
import { FullOffer, Offer } from '../../types/types';
import { getAuthorizationStatus } from '../../authorization-status';
import { reviews } from '../../mocks/reviews';


type AppProps = {
  offers: Offer[];
  fullOffers: FullOffer[];
}

function App({offers, fullOffers}: AppProps): JSX.Element {
  const favorites = offers.filter((item) => item.isFavorite);
  const authorizationStatus = getAuthorizationStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout favoritesCount={favorites.length}/>} >
          <Route index element={
            < MainPage offers={offers}/>
          }
          />
          <Route path={AppRoute.Offer} element={
            <OfferPage fullOffers={fullOffers} reviews={reviews}/>
          }
          />
          <Route path={AppRoute.Login} element={
            <PublicRoute
              authorizationStatus={authorizationStatus}
            >
              <LoginPage />
            </PublicRoute>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesPage favorites={favorites}/>
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
