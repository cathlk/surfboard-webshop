import React from "react";

const Navbar = props => (
    <nav>
        <div className="fas fa-hippo fa-lg" onClick={() => props.goToProducts()}> BOARDS </div>
        <div className="fas fa-shopping-basket fa-lg" onClick={() => props.goToCheckout()} />
    </nav>
)

export default Navbar; 