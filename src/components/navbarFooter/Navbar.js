import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
    <nav>
        <div>
            <div className="fas fa-hippo fa-lg" onClick={() => props.goToProducts()}> BOARDS </div>
            <p onClick={() => props.goToAdmin()} style={{ paddingRight: 20 }}> Admin route: see all orders </p>
        </div>
        <div className="fas fa-shopping-basket fa-lg" onClick={() => props.goToCheckout()} />
    </nav>
)

export default Navbar; 