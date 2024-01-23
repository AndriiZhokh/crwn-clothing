import "./quantity-selector.styles.scss";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    const increaseQuantity = () => {
        onQuantityChange(1);
    };

    const decreaseQuantity = () => {
        onQuantityChange(-1);
    };

    return (
        <div className="quantity-selector-container">
            <Button buttonType={ BUTTON_TYPE_CLASSES.small } onClick={decreaseQuantity}>{`${'<'}`}</Button>
            <span>{ quantity }</span>
            <Button buttonType={ BUTTON_TYPE_CLASSES.small } onClick={increaseQuantity}>{`${'>'}`}</Button>
        </div>
    );
};

export default QuantitySelector;