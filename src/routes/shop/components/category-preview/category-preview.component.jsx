import './category-preview.styles.scss';

import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../../../../components/product-card/product-card.component';

const CategoryPreview = ({ category, categoriesMap, onCategoryTitleClick }) => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const listOfProducts = onCategoryTitleClick ? categoriesMap[category].slice(0, 4) : categoriesMap[category];
    setProducts(listOfProducts)
  }, [categoriesMap, category, setProducts, onCategoryTitleClick]);


  return (
    <Fragment>
      <h2 className={onCategoryTitleClick ? 'category-title' : 'category-title-center'} onClick={() => onCategoryTitleClick && onCategoryTitleClick(category)}>{ category.toUpperCase() }</h2>

      <div className="products-container">
        { products && products.map(product => <ProductCard key={ product.id } product={ product }></ProductCard>) }
      </div>
    </Fragment>
  );
};

export default CategoryPreview;
