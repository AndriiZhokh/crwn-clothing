import './shop.styles.scss';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context'
import ProductCard from '../../components/product-card/product-card.component';
import { useNavigate, useParams } from 'react-router-dom';

const Products = ({ category, categoriesMap, onCategoryTitleClick }) => {
  return (
    <Fragment>
      <h2 onClick={() => onCategoryTitleClick && onCategoryTitleClick(category)}>{ category }</h2>

      <div className="products-container">
        {
          categoriesMap[category].map(product => (
            <ProductCard key={ product.id } product={ product }></ProductCard>
          ))
        }
      </div>
    </Fragment>
  );
};

const Shop = () => {
  const [ selectedCategory, setSelectedCategory ] = useState(null);
  const [ navigateTo, setNavigateTo ] = useState(null);
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();
  const { categoryId } = useParams();

  useEffect(() => {
    setSelectedCategory(categoryId);
  }, [ categoryId ]);

  useEffect(() => {
    if (navigateTo) {
      navigate(`/shop/${navigateTo}`);
    }

    return () => {
      setNavigateTo(null);
    };
  }, [ navigateTo, navigate ]);

  return (
    <Fragment>
      {
        selectedCategory
        ? (
          <Products
            category={ selectedCategory }
            categoriesMap={ categoriesMap }
          />
        )
        : (
          Object.keys(categoriesMap).map(title => 
            <Products
              key={title}
              category={ title }
              categoriesMap={ categoriesMap }
              onCategoryTitleClick={(category) => setNavigateTo(category)}
            />
          )
        ) 
      }
    </Fragment>
  );
};

export default Shop;
