import { CheckoutContainer, CheckoutTable } from './checkout.styles';

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "./components/checkout-item/checkout-item.component";
import CheckoutHeader from "./components/checkout-header/checkout-header.component";
import CheckoutTotal from './components/checkout-total/checkout-total.component';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutTable>
                <thead>
                    <CheckoutHeader />
                </thead>
                <tbody>
                    { cartItems.map(item => <CheckoutItem key={ item.id } cartItem={ item } />) }
                </tbody>
            </CheckoutTable>
            <CheckoutTotal />
        </CheckoutContainer>
    );
};

export default Checkout;