import React from "react";


function ProductItem(props) {
    const productList = props.productList;

    const board = productList.map(item => {
        return <div key={item.id}>
            <h2 name={item.shape}>{item.shape}</h2>
            <p name={item.description}>{item.description}</p>
            <p name={item.price}>{item.price} kr</p>
        </div>
    });
    return (
        <div>
            {board}
        </div>
    );
}

export default ProductItem;
/* const listItems =
    todoList.map(item => {
      return <div className="list" key={item.id} >
        <p>
          <input
            type="checkbox"
            onClick={() => props.checkDone(item.id)}
            defaultChecked={item.isChecked}
          />
          <input type="text"
            id={item.id}
            value={item.text}
            onChange={
              (event) => { props.setUpdate(event.target.value, item.id) }}
          />
          <span onClick={() => props.deleteItem(item.id)}>x </span>

        </p>

      </div>
    }) */