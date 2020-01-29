import React, { Component } from "react";
import axios from "axios";
// import '../App.css';

import ProductItem from "./ProductItem";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            cart: [],
            customer: {
                firstName: "",
                lastName: "",
                address: "",

            }
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidMount() {
        this.getBoards()
    }

    getBoards() {
        axios.get('http://localhost:5001/surfboard')
            .then(res => {
                this.setState({ productList: res.data })
            })
    }

    addToCart(theid) {
        const addBoard = this.state.productList.find(i => i.id === theid);
        let newCartList = [...this.state.cart, addBoard];
        // console.log("Found board to add: ", newCartList);


        this.setState({
            cart: newCartList
        });
        // console.log(addBoard);
    }

    //skicka cart till order
    //skapa kund till order 
    //skicka till order

    createCustomer() {

    }


    sendOrder() {
    }


    render() {
        // console.log("Cart in render: ", this.state.cart);
        const boards = this.state.productList;
        const addBoard = this.addToCart;

        return (
            <div>
                <h1>Surfboards</h1>
                <ProductItem
                    productList={boards}
                    addToCart={addBoard}
                />
            </div>
            // </div>
        );
    }

}

export default ProductList; 
