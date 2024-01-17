import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "./components/checkout-item/checkout-item.component";
import CheckoutHeader from "./components/checkout-header/checkout-header.component";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);
    const { setCartState } = useContext(CartContext);

    useEffect(() => {
        setCartState(false);
    });

    return (
        <div>
            <table>
                <thead>
                    <CheckoutHeader />
                </thead>
                <tbody>
                    { cartItems.map(item => <CheckoutItem key={ item.id } cartItem={ item } />) }
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;