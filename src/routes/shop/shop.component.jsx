import { Routes, Route } from 'react-router-dom';
import Categories from './components/categories/categories.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={ <Categories /> } />
            <Route path=':categoryId' element={ <Categories /> } />
        </Routes>
    );
};

export default Shop;