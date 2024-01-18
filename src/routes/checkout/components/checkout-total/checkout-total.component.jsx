import { useContext } from "react";
import { CartContext } from "../../../../contexts/cart.context";

const CheckoutTotal = () => {
    const { totalPrice } = useContext(CartContext);

    return (
        <div className='checkout-total'>
            Total: ${ totalPrice }
        </div>
    );
};

export default CheckoutTotal;