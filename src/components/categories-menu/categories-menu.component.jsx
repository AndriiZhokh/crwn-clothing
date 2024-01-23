import CategoryItem from '../category-item/category-item.component';
import { CategoriesContainer } from './categories-menu.styles';

const CategoriesMenu = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map(category => (
        <CategoryItem key={ category.id } category={ category } />
      ))}
    </CategoriesContainer>
  );
};

export default CategoriesMenu;
