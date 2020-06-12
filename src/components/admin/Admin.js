import React, { useEffect } from "react";
import "../checkout/Checkout.scss";

function Admin(props) {
    const allOrders = props.allOrders;
    console.log("Admin", allOrders);

    useEffect(() => {
        props.getallOrders();
    }, [props.showAdmin]);
    useEffect(() => {
        props.goToAdmin();
    }, [props.allOrders]);

    const order = allOrders.map(o => {
        return (
            <div key={o.id} style={{ textAlign: "left", padding: 20 }}>
                <h2>Order id {o.id}</h2>
                <p>Customer: {o.customer.firstName} {o.customer.lastName}</p>
                <p>Address: {o.customer.address} </p>
                <p>Order Date: {o.orderDate}</p>
                <p>OrderRows: </p>
                {o.orderRows.map(or => {
                    return (
                        <ul key={or.id}>
                            <span>Surfboard shape: {or.surfboard.shape}, </span>
                            <span>Size: {or.size.name}, </span>
                            <span>Price: {or.surfboard.price} kr </span>
                        </ul>
                    )
                })}
                {/* <p className="Tot-price">Price: {o.price}</p> */}
            </div>
        )
    });

    return (
        <div style={{ margin: "auto", paddingTop: "20vh" }}>
            <h1>All Orders</h1>
            {order}
        </div>
    )
}

export default Admin; 
