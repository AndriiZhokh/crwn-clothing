import './checkout-item.styles.scss';

import { useContext } from "react";
import Button from "../../../../components/button/button.component";
import { CartContext } from "../../../../contexts/cart.context";
import QuantitySelector from '../../../../components/quantity-selector/quantity-selector.component';

const CheckoutItem = ({ cartItem }) => {
    const { id, imageUrl, name, quantity, price } = cartItem;
    const { removeItemFromCart, updateProduct } = useContext(CartContext);

    const removeItem = () => {
        removeItemFromCart(id);
    };

    const updateQuantity = (val) => {
        const updatedItem = { ...cartItem, quantity: cartItem.quantity + val };

        if (updatedItem.quantity !== 0) {
            updateProduct(updatedItem);
        }
    };

    return (
        <tr className='checkout-row'>
            <td>
                <img className='checkout-image' src={ imageUrl } alt={ name }/>
            </td>
            <td>{ name }</td>
            <td>
                <QuantitySelector
                    quantity={ quantity }
                    onQuantityChange={ updateQuantity } />
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