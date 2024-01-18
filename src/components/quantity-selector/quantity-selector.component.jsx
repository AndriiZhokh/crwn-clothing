import "./quantity-selector.styles.scss";

import Button from "../button/button.component";

const QuantitySelector = ({ quantity, onQuantityChange }) => {
    const increaseQuantity = () => {
        onQuantityChange(1);
    };

    const decreaseQuantity = () => {
        onQuantityChange(-1);
    };

    return (
        <div className="quantity-selector-container">
            <Button buttonType='small' onClick={decreaseQuantity}>{`${'<'}`}</Button>
            <span>{ quantity }</span>
            <Button buttonType='small' onClick={increaseQuantity}>{`${'>'}`}</Button>
        </div>
    );
};

export default QuantitySelector;