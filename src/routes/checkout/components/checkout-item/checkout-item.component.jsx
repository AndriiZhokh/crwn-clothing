import './checkout-item.styles.scss';

import { useContext } from "react";
import Button from "../../../../components/button/button.component";
import { CartContext } from "../../../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const { id, imageUrl, name, quantity, price } = cartItem;
    const { removeItemFromCart, updateProduct } = useContext(CartContext);

    const removeItem = () => {
        removeItemFromCart(id);
    };

    const updateQuantity = (val) => {
        const updatedItem = { ...cartItem, quantity: cartItem.quantity + val };
        updateProduct(updatedItem);
    };

    const increaseQuantity = () => {
        updateQuantity(1);
    };
    const decreaseQuantity = () => {
        updateQuantity(-1);
    };

    return (
        <tr className='checkout-row'>
            <td>
                <img className='checkout-image' src={ imageUrl } alt={ name }/>
            </td>
            <td>{ name }</td>
            <td>
                <div className="quantity-selector-container">
                    <Button buttonType='small' onClick={decreaseQuantity}>{`${'<'}`}</Button>
                    <span>{ quantity }</span>
                    <Button buttonType='small' onClick={increaseQuantity}>{`${'>'}`}</Button>
                </div>
            </td>
            <td>{ price }</td>
            <td>
                <div>
                    <Button buttonType='small' onClick={removeItem}>X</Button>
                </div>
            </td>
        </tr>
    );
}

export default CheckoutItem;