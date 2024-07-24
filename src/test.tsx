// export default function App({offers}: AppScreenProps): JSX.Element {
//   const authorizationStatus = getAuthorizationStatus();

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={AppRoute.Root} element={<Layout />}>
//           <Route
//             index
//             element={<MainScreen />}
//           />
//           <Route
//             path={AppRoute.Login}
//             element={(
//               <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
//                 <LoginScreen />
//               </PrivateRoute>
//             )}
//           />
//           <Route
//             path={AppRoute.Favorites}
//             element={(
//               <PrivateRoute authorizationStatus={authorizationStatus}>
//                 <FavoritesScreen />
//               </PrivateRoute>
//             )}
//           />
//           <Route
//             path={AppRoute.Offer}
//             element={<OfferScreen offers={offers}/>}
//           />
//           <Route
//             path='*'
//             element={<NotFoundScreen />}
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
