import { CheckoutTableRow, CheckoutTableImage } from './checkout-item.styles';

import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../../../../components/button/button.component";
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
        <CheckoutTableRow>
            <td>
                <CheckoutTableImage src={ imageUrl } alt={ name }/>
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
                    <Button buttonType={ BUTTON_TYPE_CLASSES.small } onClick={removeItem}>X</Button>
                </div>
            </td>
        </CheckoutTableRow>
    );
}

export default CheckoutItem;