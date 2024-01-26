import { Outlet } from 'react-router-dom';
import CategoriesMenu from '../../components/categories-menu/categories-menu.component';

const Home = () => {


  return (
    <div>
      <CategoriesMenu />
      <Outlet />
    </div>
  );
}

export default Home;
