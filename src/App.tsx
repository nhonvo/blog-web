import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import Footer from './app/layout/footer';
import Home from './features/home/home';
import Navbar from './app/layout/navbar';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollRestoration />
      <Navbar title="Truong Nhon Blog" />
      {
        location.pathname === '/' ? <Home /> :
          <>
            <Outlet />
          </>
      }
      <Footer />
    </>
  );
}

export default App;
