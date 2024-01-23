import { CategoryContainer, BackgroundImage, CategoryBodyContainer } from './category-item.styles';

const CategoryItem = ({ category }) => {
  const { title, imageUrl} = category;

  return (
    <CategoryContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CategoryBodyContainer>
        <h2>{ title }</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
};

export default CategoryItem;