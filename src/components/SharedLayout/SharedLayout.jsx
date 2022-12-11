import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => (
  <Container>
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="movies">Movie</Link>
      </nav>
    </Header>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </Container>
);

export default SharedLayout;
