import React from "react";
import "./Checkout.scss";

function ConfirmationPage(props) {
    const cart = props.cart;
    const selectedSize = props.selectedSize;
    const totPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    const orderRow = cart.map(item => {
        return (
            <div className="Order-row" key={item.id}>
                <img src={item.imageUrl} alt={item.shape} />
                <span className="">
                    <span className="Prod-header">{item.shape} </span>
                    <span className="Prod-header">{selectedSize.name} </span>
                    <span className="Prod-price"> {item.price} kr </span>
                </span>
            </div>
        )
    });

    return (
        <div className="Container">
            <div className="Checkout">
                <h1>Whoop, your boards will soon be with you </h1>
                <div className="Checkout-child" id="Confirm-Box">
                    <h2>Your boards:</h2>
                    {orderRow}
                    <p className="Tot-price">Total sum: {totPrice} kr </p>
                    <h2>...will be sent too:</h2>
                    <p>Name: {props.firstName} {props.lastName}</p>
                    <p>Address: {props.address} </p>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationPage;
