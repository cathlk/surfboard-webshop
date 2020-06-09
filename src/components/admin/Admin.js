import React from "react";
import "../checkout/Checkout.scss";

function Admin(props) {
    console.log("Admin");
    const allOrders = props.allOrders;

    const order = allOrders.map(o => {
        return (
            <div key={o.id} style={{ textAlign: "left", padding: 20 }}>
                <h2>Order id {o.id}</h2>
                <p>Customer: {o.customer.firstName} {o.customer.lastName}</p>
                <p>Order Date: {o.orderDate}</p>
                <p>OrderRows: {o.orderRows.map(or => {
                    return (
                        <ul key={or.id}>
                            <span>Surfboard shape: {or.surfboard.shape}, </span>
                            <span>Size: {or.size.name}, </span>
                            <span>Price: {or.surfboard.price} kr </span>
                        </ul>
                    )
                })}</p>
                {/* <p className="Tot-price">Price: {o.price}</p> */}
            </div>
        )
    });

    return (
        <div style={{ margin: "auto", paddingTop: "40vh" }}>
            <h1>All Orders</h1>
            {order}
        </div>
    )
}
export default Admin; 