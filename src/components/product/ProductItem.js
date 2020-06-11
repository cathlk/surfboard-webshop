import React from "react";
// import "./Product.scss";

function ProductItem(props) {
    const productList = props.productList;
    const boardSizeList = props.boardSizeList;


    const sizeSelect = (
        <select onChange={e => props.updateSizeId(e.target.value)}>
            <option value="defaultValue" disabled="disabled">Sizes</option>
            {boardSizeList.map(s => {
                return (
                    <option key={s.id} value={s.name}>{s.name}</option>
                )
            })}
        </select>
    )

    const board = productList.map(item => {
        return (
            <span className="Prod-item" key={item.id}>
                <img src={item.imageUrl} alt={item.shape} />
                <h2 className="Prod-header">{item.shape}</h2>
                <p className="Prod-descr">{item.description}</p>
                <span className="Prod-bottom">
                    <div>
                        Choose surfboard size: {"  "}
                        {sizeSelect}
                    </div>
                    <p className="Prod-price">Price: {item.price} kr </p>
                    <button onClick={() => props.addToCart(item.id)}>
                        Add to cart
                    </button>
                </span>
            </span>
        )
    });

    return (
        <div id="Products">
            {board}
        </div>
    );
}

export default ProductItem;
