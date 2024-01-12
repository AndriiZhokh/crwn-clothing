import { useContext } from "react";
import Button from "../../../../components/button/button.component";
import { CartContext } from "../../../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    const { id, imageUrl, name, quantity, price } = cartItem;
    const { removeItemFromCart } = useContext(CartContext);

    const removeItem = () => {
        removeItemFromCart(id);
    };

    const increaseQuantity = () => {};
    const decreaseQuantity = () => {};

    return (
        <tr>
            <td><img src={ imageUrl } alt={ name }/></td>
            <td>{ name }</td>
            <td>
                <Button buttonType='inverted' onClick={decreaseQuantity}>{`${'<'}`}</Button>
                { quantity }
                <Button buttonType='inverted' onClick={increaseQuantity}>{`${'>'}`}</Button>
            </td>
            <td>{ price }</td>
            <td>
                <Button buttonType='inverted' onClick={removeItem}>X</Button>
            </td>
        </tr>
    );
}

export default CheckoutItem;