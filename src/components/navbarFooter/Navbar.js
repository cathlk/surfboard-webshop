import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
    const shoppingbasket = (
        <div className="fas fa-shopping-basket fa-lg" onClick={() => props.goToCheckout()} />
    )
    return (
        <nav>
            <div>
                <Link to="/">
                    <div className="fas fa-hippo fa-lg" onClick={() => props.goToProducts()}> BOARDS </div>
                </Link>
                <Link to="/admin" style={{ textDecoration: "none" }}>
                    <p style={{ paddingRight: 20 }}> Admin route: see all orders </p>
                </Link>
            </div>
            {props.showAdmin === false && (
                shoppingbasket
            )}
        </nav>
    )
}
export default Navbar; 