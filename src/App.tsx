import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Navbar from './app/layout/components/navbar';
import Footer from './app/layout/components/footer';
import HomePage from './features/home/homepage';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollRestoration />
      <Navbar title="Truong Nhon Blog" />
      {
        location.pathname === '/' ? <HomePage /> :
          <>
            <Outlet />
          </>
      }
      <Footer />
    </>
  );
}

export default App;
