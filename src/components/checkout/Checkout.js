import React from "react";
import Customer from "./Customer";
import CheckoutItem from './CheckoutItem';
import "./Checkout.scss";

function Checkout(props) {
    const customer = (
        <Customer
            firstName={props.firstName}
            lastName={props.lastName}
            address={props.address}
            handleChange={props.handleChange}
            sendOrder={props.sendOrder}
        />
    );

    const order = (
        <div className="Checkout">
            <CheckoutItem
                cart={props.cart}
                selectedSize={props.selectedSize}
                removeCartItem={props.removeCartItem}
            />
            {customer}
        </div>
    );

    return (
        <div className="Container">
            <h1>Checkout</h1>
            {order}
        </div>
    );
}

export default Checkout; 
