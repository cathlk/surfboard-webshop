import React, { Component } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
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


    render() {
        const boards = this.state.productList;
        console.log(boards)

        return (
            <div className="App-header">
                <h1>ProductList</h1>
                <ProductItem productList={boards} />

            </div>
        );
    }

}

export default ProductList; 
