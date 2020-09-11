// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    // const { user, product, price } = this.props.order;

    return (
      <div className="order">
        {/* <p> {user} bought {product} for {price.value} {price.currency} </p> */}
        <p> {this.props.user} bought {this.props.product} for {this.props.price.value} {this.props.price.currency} </p>
      </div>
    );
  }
}

export default Order;
