import React from "react";
import "./Checkout.scss";


function Customer(props) {

    return (
        <div className="Checkout-child">
            <h2>Send them my way </h2>
            <form onSubmit={props.sendOrder}>
                <label> First name:
                    <input type="text" name="firstName" value={props.firstName} onChange={props.handleChange} />
                </label>
                <label> Last name:
                    <input type="text" name="lastName" value={props.lastName} onChange={props.handleChange} />
                </label>
                <label> Address:
                    <input type="text" name="address" value={props.address} onChange={props.handleChange} />
                </label>

                <input type="submit" value="Get ma' boards" />
            </form>
        </div>

    );
}

export default Customer; 