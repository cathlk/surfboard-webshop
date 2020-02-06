import React, { Component } from 'react';
import axios from "axios";
import './App.scss';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import ProductList from "./components/ProductList";
import Checkout from "./components/Checkout"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //states for which view
      showProductList: true,
      showCheckout: false,

      //product in stock, products added to cart 
      productList: [],
      cart: [
        {
          id: 2,
          shape: "Hybrid",
          description: "En shortboard med longboard outline i framdelen! Fånga vågor är enkelt med denna bräda och den flatta rockern ger dig bästa glid. Bottenkurvan med pintail (samt subtil rocker vid tailen) ser till att du behåller full kontroll och manövrerbarhet. Inte nog med detta, Lovechild erbjuder dessutom 3 olika fin set up möjligheter. Single-fin, 2+1 eller quad!",
          imageUrl: "https://shopcdn2.textalk.se/shop/26254/art54/h7693/38987693-origpic-98a47a.jpg?max-width=549&max-height=549&quality=85",
          price: 2222
        }
      ],

      //customer 
      firstName: "Hej hej",
      lastName: "hemskt mycket",
      address: "hej",

      //use an object instead?
      /* customer: {
        firstName: "Hej hej",
        lastName: "hemskt mycket",
        address: "hej"
      } */
    }

    this.addToCart = this.addToCart.bind(this);

    this.goToCheckout = this.goToCheckout.bind(this);
    this.goToProducts = this.goToProducts.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.sendOrder = this.sendOrder.bind(this);
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
      showProductList: false
    });
    // console.log("Checkout");
  }

  goToProducts() {
    this.setState({
      showCheckout: false,
      showProductList: true
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

  // createCustomer(e) {
  //   e.preventDefault();
  //   console.log("create customer");
  // }

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
  }

  render() {
    // console.log("Cart in render: ", this.state.cart);

    const nav = (
      <Navbar
        showCheckout={this.state.showCheckout}
        showProductList={this.state.showProductList}
        goToCheckout={this.goToCheckout}
        goToProducts={this.goToProducts}
      />
    );

    // const startPage = this.state.showProductList;
    // const checkout = this.state.showCheckout;

    return (
      <div className="App">
        {nav}

        {this.state.showProductList === true && this.state.showCheckout === false && (
          <div className="Container">
            <h1>Surfboards</h1>

            <ProductList
              productList={this.state.productList}
              addToCart={this.addToCart}
            />
          </div>
        )}

        {this.state.showCheckout === true && (
          <div className="Container">
            <h1>Checkout</h1>
            <Checkout
              cart={this.state.cart}
              sendOrder={this.sendOrder}
              removeCartItem={this.removeCartItem}

              firstName={this.state.firstName}
              lastName={this.state.lastName}
              address={this.state.address}
              handleChange={this.handleChange}
            />
          </div>
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
