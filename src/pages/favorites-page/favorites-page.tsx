import FavoriteContainer from '../../components/favorite-container/favorite-container';
import FavoriteEmpty from '../../components/favorite-empty/favorite-empty';
import { Offer } from '../../types/types';

type FavoritesPageProps = {
  favorites: Offer[];
}

function FavoritesPage({favorites}: FavoritesPageProps): JSX.Element {

  return (
    <div className={`page ${favorites.length < 1 ? 'page--favorites-empty' : ''}`}>
      <main className={`page__main page__main--favorites ${favorites.length < 1 ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {favorites.length < 1 ? <FavoriteEmpty /> : <FavoriteContainer favorites={favorites}/>}
        </div>
      </main>
    </div>
  );
}

export default FavoritesPage;
