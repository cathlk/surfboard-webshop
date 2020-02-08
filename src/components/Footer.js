import React from "react";

function Footer(props) {

    return (
        <footer>
            <span>hello footer </span>
            <span onClick={() => props.goToOrderconfirmation()}>OrderConfirmPage</span>

        </footer>
    )
}
export default Footer; 