import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../Pages/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Layout;
