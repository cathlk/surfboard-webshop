import React, { Component } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';
import Navbar from "./components/navbarFooter/Navbar";
import Footer from "./components/navbarFooter/Footer"
import Admin from './components/admin/Admin';
import Home from './components/home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //states for view
      showProductList: true,
      showCheckout: false,
      showConfirmPage: false,
      showAdmin: false,

      // list product and sizes 
      productList: [],
      boardSizeList: [],

      //All orders 
      allOrders: [],
    }
    this.goToProducts = this.goToProducts.bind(this);
    this.goToCheckout = this.goToCheckout.bind(this);
    this.goToOrderconfirmation = this.goToOrderconfirmation.bind(this);

    this.goToAdmin = this.goToAdmin.bind(this);
    this.getallOrders = this.getallOrders.bind(this);
  }

  componentDidMount() {
    this.getBoards()
    this.getBoardSizes()
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

  async getBoardSizes() {
    try {
      await axios.get('http://localhost:5001/size')
        .then(res => {
          this.setState({ boardSizeList: res.data })
          console.log("size", res)
        })
    } catch (e) {
      console.log(`😱 Axios boardSizeList request failed: ${e}`);
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

  goToAdmin() {
    this.setState({
      showAdmin: true,
      showCheckout: false,
      showProductList: false,
      showConfirm: false,
    });
    // this.getallOrders();
  }

  render() {
    const {
      showCheckout,
      showProductList,
      showConfirmPage,

      productList,
      boardSizeList,

      showAdmin,
      allOrders,
    } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar
            goToProducts={this.goToProducts}
            showCheckout={showCheckout}
            goToCheckout={this.goToCheckout}
            showAdmin={showAdmin}
          />

          <Switch>
            <Route path="/admin">
              <Admin
                showAdmin={showAdmin}
                allOrders={allOrders}
                goToAdmin={this.goToAdmin}
                getallOrders={this.getallOrders}
              />
            </Route>

            <Route path="/">
              <Home
                showCheckout={showCheckout}
                showProductList={showProductList}
                showConfirmPage={showConfirmPage}
                goToOrderconfirmation={this.goToOrderconfirmation}
                productList={productList}
                boardSizeList={boardSizeList}
              />
            </Route>
          </Switch>

          <Footer
            goToOrderconfirmation={this.goToOrderconfirmation}
          />
        </div>
      </Router>
    );
  }
}

export default App;
