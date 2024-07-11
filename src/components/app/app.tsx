import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  numberOfRentalOffers: number;
}

function App({numberOfRentalOffers}: AppProps): JSX.Element {
  return (
    <MainPage numberOfRentalOffers={numberOfRentalOffers} />
  );
}

export default App;
