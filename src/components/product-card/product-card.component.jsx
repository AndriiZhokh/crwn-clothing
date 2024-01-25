// import './product-card.styles.scss';
import {
  ProductCardContainer,
  ProductImage,
  AddToCartButton,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from './product-card.styles';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <ProductImage src={ imageUrl } alt={ name } />
      <ProductCardFooter>
        <ProductName>{ name }</ProductName>
        <ProductPrice>{ price }</ProductPrice>
        <AddToCartButton
          onClick={ addProductToCart }
          buttonType={ BUTTON_TYPE_CLASSES.inverted }
        >
          Add to card
        </AddToCartButton>
      </ProductCardFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
