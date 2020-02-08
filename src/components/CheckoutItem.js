import React from "react";

function CheckoutItem(props) {
    const cart = props.cart;
    const totPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    const board = cart.map(item => {
        return (
            <p className="Order-row" key={item.id}>
                <img src={item.imageUrl} alt={item.shape} />
                <span className="">
                    <span className="Prod-header">{item.shape} </span>
                    <span className="Prod-price"> {item.price} kr </span>
                </span>
                <i className="fas fa-times-circle" onClick={() => props.removeCartItem(item.id)}></i>
            </p>
        )
    });

    return (
        <div className="Checkout-child">
            <h2>Boards soon to be yours</h2>
            {board}
            <p className="Tot-price">Total sum: {totPrice} kr </p>

        </div>
    );
}

export default CheckoutItem;
