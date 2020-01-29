import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer"

class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar />
        <ProductList />
        <Footer />
      </div>
    );
  }
}

export default App;
