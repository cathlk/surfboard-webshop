import React from "react";

function ProductItem(props) {
    const productList = props.productList;

    const board = productList.map(item => {
        return <span className="Prod-item" key={item.id}>
            <img src={item.imageUrl} alt={item.shape} />
            <h2 name={item.shape}>{item.shape}</h2>
            <p name={item.description}>{item.description}</p>
            <p name={item.price}>{item.price} kr</p>
            <button onClick={() => props.addToCart(item.id)}> Add to cart</button>
        </span>
    });
    return (
        <div className="Prod-container" >
            {board}
        </div>


    );
}

export default ProductItem;
