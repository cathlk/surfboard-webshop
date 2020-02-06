import React from "react";
// import ProductItem from "./ProductItem";
import "./Product.scss"

function ProductList(props) {
    const productList = props.productList;

    const board = productList.map(item => {
        return (
            <span className="Prod-item" key={item.id}>
                <img src={item.imageUrl} alt={item.shape} />
                <h2 className="Prod-header">{item.shape}</h2>
                <p className="Prod-descr">{item.description}</p>
                <span className="Prod-bottom">
                    <p className="Prod-price">{item.price} kr</p>
                    <button onClick={() => props.addToCart(item.id)}>
                        Add to cart
                    </button>
                </span>
            </span>
        )
    });

    return (
        <div id="Products">
            {/* <ProductItem
        productList={props.productList}
        addToCart={props.addToCart}
/> */}
            {board}
        </div>
    );
}

export default ProductList;
