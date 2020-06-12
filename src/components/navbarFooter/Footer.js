import React from "react";
// import { Link } from "react-router-dom";

function Footer(props) {

    return (
        <footer>
            {/* <span onClick={() => props.goToAdmin()}> Admin route: see all orders</span> */}
            <span onClick={() => props.goToOrderconfirmation()}>OrderConfirmPage</span>
        </footer>
    )
}
export default Footer; 