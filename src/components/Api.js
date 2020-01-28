import React, { Component } from "react";
import axios from "axios";

class Api extends Component {


    getAllBoards() {
        axios.get('http://localhost:5001/surfboard')
            .then(res => {
                console.log(res.data)
                console.log("res.data")
            })
    }

    render() {
        return (
            <div>
                {/* <h1>ProductList</h1> */}
            </div>
        );
    }
}

export default Api; 
