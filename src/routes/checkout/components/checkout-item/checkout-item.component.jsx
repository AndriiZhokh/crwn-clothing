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
        <tr>
            <td><img src={ imageUrl } alt={ name }/></td>
            <td>{ name }</td>
            <td>
                <Button buttonType='small' onClick={decreaseQuantity}>{`${'<'}`}</Button>
                { quantity }
                <Button buttonType='small' onClick={increaseQuantity}>{`${'>'}`}</Button>
            </td>
            <td>{ price }</td>
            <td>
                <Button buttonType='small' onClick={removeItem}>X</Button>
            </td>
        </tr>
    );
}

export default CheckoutItem;