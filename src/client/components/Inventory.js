import React, { Component } from 'react'

import AddDishForm from './AddDish'

export default class Inventory extends Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddDishForm addDish={this.props.addDish} />
      </div>
    )
  }
}
