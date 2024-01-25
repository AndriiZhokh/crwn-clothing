import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../../../contexts/categories.context'
import { useNavigate, useParams } from 'react-router-dom';
import CategoryPreview from '../category-preview/category-preview.component';

const Categories = () => {
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
  
  const categoriesList = selectedCategory ? [ selectedCategory ] : Object.keys(categoriesMap);

  return (
    <Fragment>
      {
        categoriesList.map((title, _, list) => 
          <CategoryPreview
            key={ title }
            category={ title }
            categoriesMap={ categoriesMap }
            onCategoryTitleClick={ list.length > 1 ? (category) => setNavigateTo(category) : undefined }
          />
        )
      }
    </Fragment>
  );
};

export default Categories;
