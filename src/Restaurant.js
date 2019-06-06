import React, { Component } from "react";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order />
        </ul>
      </div>
    );
  }
}
const RestaurantButton = props => (
  <button className="btn btn-primary" onClick={props.handleClick}>
    Add Order
  </button>
);
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: 0
    };
  }
  addOrder = () => {
    this.setState(function(currentState) {
      return {
        orders: currentState.orders + 1
      };
    });
  };
  render() {
    return (
      <li>
        Pizzas: {this.state.orders} <br /> Salads:{this.state.orders} <br />
        <RestaurantButton handleClick={this.addOrder} />
      </li>
    );
  }
}
export default Restaurant;
