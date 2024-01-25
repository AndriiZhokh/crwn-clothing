import { CategoryTitle, CategoryTitleCenter, ProductsContainer } from './category-preview.styles';

import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../../../components/product-card/product-card.component';

const CategoryPreview = ({ category, categoriesMap, onCategoryTitleClick }) => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const listOfProducts = onCategoryTitleClick ? categoriesMap[category].slice(0, 4) : categoriesMap[category];
    setProducts(listOfProducts)
  }, [categoriesMap, category, setProducts, onCategoryTitleClick]);

  const CustomCategoryTitle = onCategoryTitleClick ? CategoryTitle : CategoryTitleCenter;

  return (
    <Fragment>
      <CustomCategoryTitle
        className={onCategoryTitleClick ? 'category-title' : 'category-title-center'}
        onClick={() => onCategoryTitleClick && onCategoryTitleClick(category)}
      >
        { category.toUpperCase() }
      </CustomCategoryTitle>

      <ProductsContainer>
        { products && products.map(product => <ProductCard key={ product.id } product={ product }></ProductCard>) }
      </ProductsContainer>
    </Fragment>
  );
};

export default CategoryPreview;
