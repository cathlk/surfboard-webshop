import React from "react";
import Customer from "./Customer";
import "./Checkout.scss";


function Checkout(props) {
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

    // console.log(cart.price);

    return (
        <div id="Checkout">
            <div className="Checkout-child">
                <h2>Boards soon to be yours</h2>
                {board}
                <p id="Tot-price">Total price {totPrice} kr </p>
            </div>
            <Customer
                firstName={props.firstName}
                lastName={props.lastName}
                address={props.address}
                handleChange={props.handleChange}
                sendOrder={props.sendOrder}
            />
        </div>
    )
}

export default Checkout; 
