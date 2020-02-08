import React from "react";
import "./Product.scss";
import ProductItem from "./ProductItem";

function ProductList(props) {

    return (
        <div className="Container">
            <h1>Surfboards</h1>

            <ProductItem
                productList={props.productList}
                addToCart={props.addToCart}
            />
        </div>
    );
}

export default ProductList;
