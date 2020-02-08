import React, { Component } from 'react';
import axios from "axios";
import './App.scss';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout";
import ConfirmationPage from './components/ConfirmationPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //states for view
      showProductList: true,
      showCheckout: false,
      showConfirmPage: false,

      //products in stock and added to cart 
      productList: [],
      cart: [],
      // totPrice: 0,

      //customer, make as an object instead? 
      firstName: "",
      lastName: "",
      address: ""
    }

    this.goToCheckout = this.goToCheckout.bind(this);
    this.goToProducts = this.goToProducts.bind(this);

    this.addToCart = this.addToCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendOrder = this.sendOrder.bind(this);

    this.goToOrderconfirmation = this.goToOrderconfirmation.bind(this);
  }

  componentDidMount() {
    this.getBoards()
  }

  async getBoards() {
    try {
      await axios.get('http://localhost:5001/surfboard')
        .then(res => {
          this.setState({ productList: res.data })
        })
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);

    }
  }

  addToCart(theid) {
    let addBoard = this.state.productList.find(i => i.id === theid);
    addBoard.SizeId = 1;
    let newCartList = [...this.state.cart, addBoard];
    // console.log("Found board to add: ", newCartList);

    this.setState({
      cart: newCartList
    });
  }

  goToCheckout() {
    this.setState({
      showCheckout: true,
      showProductList: false,
      showConfirmPage: false
    });
    // console.log("Checkout");
  }

  goToProducts() {
    this.setState({
      showProductList: true,
      showCheckout: false,
      showConfirmPage: false
    });
  }

  goToOrderconfirmation() {
    this.setState({
      showConfirmPage: true,
      showCheckout: false,
      showProductList: false
    })
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
        console.log("res data", res.data)
      })
      .then(this.goToOrderconfirmation())
  }

  render() {
    const { showProductList, showCheckout, showConfirmPage, productList, cart, firstName, lastName, address } = this.state;

    // const showProdList = this.state.showProductList;
    // const showCheckout = this.state.showCheckout;
    // const showConfirm = this.state.showConfirmPage;

    const nav = (
      <Navbar
        showProductList={showProductList}
        goToProducts={this.goToProducts}
        showCheckout={showCheckout}
        goToCheckout={this.goToCheckout}
      />
    );

    const prodList = (
      <ProductList
        productList={productList}
        cart={cart}
        addToCart={this.addToCart}
      />);

    const checkout = (
      <Checkout
        cart={cart}
        sendOrder={this.sendOrder}
        removeCartItem={this.removeCartItem}

        firstName={firstName}
        lastName={lastName}
        address={address}
        handleChange={this.handleChange}

        showCheckout={showCheckout}
        showConfirm={showConfirmPage}
        showProdList={showProductList}
      />
    );

    const confirmPage = (
      <ConfirmationPage
        cart={cart}
        firstName={firstName}
        lastName={lastName}
        address={address}
        handleChange={this.handleChange}

        showConfirm={showConfirmPage}
        showCheckout={showCheckout}
        showProdList={showProductList}
      />);

    return (
      <div className="App">
        {nav}

        {showProductList === true && showCheckout === false && showConfirmPage === false && (
          prodList
        )}

        {showCheckout === true && showProductList === false && showConfirmPage === false && (
          checkout
        )}

        {showConfirmPage === true && showCheckout === false && showProductList === false && (
          confirmPage
        )}

        <Footer
          goToOrderconfirmation={this.goToOrderconfirmation} />

      </div>
    );
  }
}

export default App;
