import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { AuthStatus } from '../../types/types';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
