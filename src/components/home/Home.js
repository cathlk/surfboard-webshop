import React, { Component } from 'react';
import axios from "axios";

import '../../App.scss';
import ProductList from "../product/ProductList";
import Checkout from "../checkout/Checkout";
import ConfirmationPage from '../checkout/ConfirmationPage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //cart and size state  
            sizeId: null,
            cart: [],
            selectedSize: [],
            // totPrice: 0,

            //customer, make as an object instead? 
            firstName: "",
            lastName: "",
            address: "",
        }

        this.setState({
            showProductList: true,
            showCheckout: false,
            showConfirmPage: false,
            showAdmin: false,

        })

        this.updateSizeId = this.updateSizeId.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeCartItem = this.removeCartItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sendOrder = this.sendOrder.bind(this);
    }

    updateSizeId(selected) {
        this.selectedSize = this.props.boardSizeList.find(s => s.name === selected);
        this.setState({ selectedSize: this.selectedSize });
        this.setState({ sizeId: this.selectedSize.id });

        console.log("selectedSize", this.selectedSize)
        console.log("selectedSize id", this.selectedSize.id)
    }

    addToCart(theid) {
        let addBoard = this.props.productList.find(i => i.id === theid);
        addBoard.SizeId = this.state.sizeId;

        let newCartList = [...this.state.cart, addBoard];
        console.log("Found board to add: ", newCartList);

        this.setState({
            cart: newCartList
        });
    }

    removeCartItem(id) {
        const filteredCart = this.state.cart.filter(i => i.id !== id);
        this.setState({ cart: filteredCart });
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    sendOrder(e) {
        e.preventDefault();
        const order = {
            cart: this.state.cart,
            customer: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address
            }
        }
        console.log("order", order)

        axios.post('http://localhost:5001/order', order)
            .then(res => {
                console.log("res data", res.data.data)
            })
            .then(this.props.goToOrderconfirmation())
    }

    render() {
        const {
            cart,
            selectedSize,
            firstName,
            lastName,
            address,
        } = this.state;

        const {
            showProductList,
            showCheckout,
            showConfirmPage,
            productList,
            boardSizeList,
        } = this.props;

        // const showProdList = this.state.showProductList;
        // const showCheckout = this.state.showCheckout;
        // const showConfirm = this.state.showConfirmPage;

        const prodList = (
            <ProductList
                productList={productList}
                boardSizeList={boardSizeList}
                updateSizeId={this.updateSizeId}
                cart={cart}
                handleChange={this.handleChange}
                addToCart={this.addToCart}
            />);

        const checkout = (
            <Checkout
                cart={cart}
                selectedSize={selectedSize}
                sendOrder={this.sendOrder}
                removeCartItem={this.removeCartItem}

                firstName={firstName}
                lastName={lastName}
                address={address}
                handleChange={this.handleChange}
            />
        );

        const confirmPage = (
            <ConfirmationPage
                cart={cart}
                selectedSize={selectedSize}
                firstName={firstName}
                lastName={lastName}
                address={address}
                handleChange={this.handleChange}
            />);
        return (
            <div>

                {showProductList === true &&
                    showCheckout === false &&
                    showConfirmPage === false && (
                        prodList
                    )}

                {showCheckout === true &&
                    showProductList === false &&
                    showConfirmPage === false && (
                        checkout
                    )}

                {showConfirmPage === true &&
                    showCheckout === false &&
                    showProductList === false && (
                        confirmPage
                    )}
            </div>
        );
    }
}

export default Home;
