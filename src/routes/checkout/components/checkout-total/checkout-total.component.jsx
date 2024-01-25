import { CheckoutTotalContainer } from './checkout-total.styles';

import { useContext } from 'react';
import { CartContext } from '../../../../contexts/cart.context';

const CheckoutTotal = () => {
    const { totalPrice } = useContext(CartContext);

    return (
        <CheckoutTotalContainer>
            Total: ${ totalPrice }
        </CheckoutTotalContainer>
    );
};

export default CheckoutTotal;