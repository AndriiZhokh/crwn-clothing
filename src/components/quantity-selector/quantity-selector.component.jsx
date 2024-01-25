import { QuantitySelectorContainer, QuantityValue, ArrowButton } from './quantity-selector.styles';

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    const increaseQuantity = () => {
        onQuantityChange(1);
    };

    const decreaseQuantity = () => {
        onQuantityChange(-1);
    };

    return (
        <QuantitySelectorContainer>
            <ArrowButton buttonType={ BUTTON_TYPE_CLASSES.small } onClick={decreaseQuantity}>{`${'<'}`}</ArrowButton>
            <QuantityValue>{ quantity }</QuantityValue>
            <ArrowButton buttonType={ BUTTON_TYPE_CLASSES.small } onClick={increaseQuantity}>{`${'>'}`}</ArrowButton>
        </QuantitySelectorContainer>
    );
};

export default QuantitySelector;