import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "./components/checkout-item/checkout-item.component";
import CheckoutHeader from "./components/checkout-header/checkout-header.component";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <table>
                <thead>
                    <CheckoutHeader />
                </thead>
                <tbody>
                    {
                        cartItems.map(item => <CheckoutItem key={ item.id } cartItem={ item } />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;