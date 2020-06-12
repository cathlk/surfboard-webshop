import React from "react";
import "./Product.scss";
import ProductItem from "./ProductItem";

function ProductList(props) {

    return (
        <div className="Container">
            <h1>Surfboards</h1>

            <ProductItem
                productList={props.productList}
                boardSizeList={props.boardSizeList}
                updateSizeId={props.updateSizeId}
                addToCart={props.addToCart}
                handleChange={props.handleChange}
            />
        </div>
    );
}

export default ProductList;
