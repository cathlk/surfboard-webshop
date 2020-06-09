import React, { Component } from 'react';
import axios from "axios";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./components/navbarFooter/Navbar";
import Footer from "./components/navbarFooter/Footer"
import Checkout from "./components/checkout/Checkout";

import ProductList from "./components/product/ProductList";
import ConfirmationPage from './components/checkout/ConfirmationPage';
import Admin from './components/admin/Admin';
// import ProductItem from './components/ProductItem';
// import Home from './components/boards/Boards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //states for view
      showProductList: true,
      showCheckout: false,
      showConfirmPage: false,
      showAdmin: false,

      //products in stock and added to cart 
      productList: [],
      cart: [],
      // totPrice: 0,

      //customer, make as an object instead? 
      firstName: "",
      lastName: "",
      address: "",

      //All orders 
      allOrders: [],
    }

    this.goToCheckout = this.goToCheckout.bind(this);
    this.goToProducts = this.goToProducts.bind(this);
    this.goToAdmin = this.goToAdmin.bind(this);

    this.addToCart = this.addToCart.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendOrder = this.sendOrder.bind(this);

    this.goToOrderconfirmation = this.goToOrderconfirmation.bind(this);
    this.getallOrders = this.getallOrders.bind(this);
  }

  componentDidMount() {
    this.getBoards()
  }

  async getBoards() {
    try {
      await axios.get('http://localhost:5001/surfboard')
        .then(res => {
          this.setState({ productList: res.data })
          console.log("surfboards", res)

        })
    } catch (e) {
      console.log(`😱 Axios boards request failed: ${e}`);
    }
  }

  async getallOrders() {
    try {
      await axios.get('http://localhost:5001/order')
        .then(res => {
          this.setState({ allOrders: res.data })
          console.log("allOrders", res)
        })
    } catch (e) {
      console.log(`😱 Axios allORderRows request failed: ${e}`);
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
      showConfirmPage: false,
      showAdmin: false,
    });
    // console.log("Checkout");
  }

  goToProducts() {
    this.setState({
      showProductList: true,
      showCheckout: false,
      showConfirmPage: false,
      showAdmin: false,
    });
  }

  goToOrderconfirmation() {
    this.setState({
      showConfirmPage: true,
      showCheckout: false,
      showProductList: false,
      showAdmin: false,
    })
  }

  removeCartItem(id) {
    const filteredCart = this.state.cart.filter(i => i.id !== id);
    this.setState({ cart: filteredCart });
  }

  goToAdmin() {
    this.setState({
      showAdmin: true,
      showCheckout: false,
      showProductList: false,
      showConfirm: false,
    });
    this.getallOrders();
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
      .then(this.goToOrderconfirmation())
  }

  render() {
    const {
      showProductList,
      showCheckout,
      showConfirmPage,
      showAdmin,
      productList,
      cart,
      firstName,
      lastName,
      address,
      allOrders,
    } = this.state;

    // const showProdList = this.state.showProductList;
    // const showCheckout = this.state.showCheckout;
    // const showConfirm = this.state.showConfirmPage;

    const nav = (
      <Navbar
        showProductList={showProductList}
        goToProducts={this.goToProducts}
        showCheckout={showCheckout}
        goToCheckout={this.goToCheckout}
        showAdmin={showAdmin}
        goToAdmin={this.goToAdmin}
        goToOrderconfirmation={this.goToOrderconfirmation}
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

    const admin = (
      <Admin
        allOrders={allOrders}
      // getallOrders={this.getallOrders}
      />);

    return (
      <Router>
        <div className="App">
          {nav}

          {showProductList === true && showCheckout === false && showConfirmPage === false && showAdmin === false && (
            prodList
          )}

          {showCheckout === true && showProductList === false && showConfirmPage === false && showAdmin === false && (
            checkout
          )}

          {showConfirmPage === true && showCheckout === false && showProductList === false && showAdmin === false && (
            confirmPage
          )}

          {showAdmin === true && showConfirmPage === false && showCheckout === false && showProductList === false && (
            admin
          )}


          {/* <Switch> */}
          {/* <Route path="/admin"> */}
          {/* <Admin /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          {/* <Home
                productList={productList}
                cart={cart}
                addToCart={this.addToCart}
              /> */}
          {/* </Route>
          </Switch> */}

          <Footer
            goToAdmin={this.goToAdmin}
            goToOrderconfirmation={this.goToOrderconfirmation} />
        </div>
      </Router>
    );
  }
}

export default App;
