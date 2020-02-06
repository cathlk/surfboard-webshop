// import React from "react";

// function ProductItem(props) {
//     const productList = props.productList;

//     const board = productList.map(item => {
//         return (
//             <span className="Prod-item" key={item.id}>
//                 <img src={item.imageUrl} alt={item.shape} />
//                 <h2 className="Prod-header">{item.shape}</h2>
//                 <p className="Prod-descr">{item.description}</p>
//                 <span className="Prod-bottom">
//                     <p className="Prod-price">{item.price} kr</p>
//                     <button onClick={() => props.addToCart(item.id)}>
//                         Add to cart
//                     </button>
//                 </span>
//             </span>
//         )
//     });
//     return (
//         <div className="List-container" >
//             {board}
//         </div>


//     );
// }

// export default ProductItem;
