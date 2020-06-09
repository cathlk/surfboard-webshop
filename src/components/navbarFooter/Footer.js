import React from "react";
// import { Link } from "react-router-dom";

function Footer(props) {

    return (
        <footer>
            {/* <Link to="/admin"> */}
            <span onClick={() => props.goToAdmin()}> Admin route: see all orders</span>
            {/* </Link> */}
            <span onClick={() => props.goToOrderconfirmation()}>OrderConfirmPage</span>

        </footer>
    )
}
export default Footer; 