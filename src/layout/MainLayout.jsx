import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import SocialItems from '../components/SocialItems';

const MainLayout = () => {
  return (
    <div className='main-content'>
      <Navbar />
      <Outlet />
      <SocialItems />
      <Footer />
    </div>
  );
};
export default MainLayout;
