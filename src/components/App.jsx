import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));

const App = () => (
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
