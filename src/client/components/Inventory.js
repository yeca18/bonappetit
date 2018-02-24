import React, { Component } from 'react'

import AddDishForm from './AddDish'

export default class Inventory extends Component {
  render() {
    return (
      <div>
        <h2>Inventario</h2>
        <AddDishForm addDish={this.props.addDish} />
        <button onClick={this.props.loadDishes}>Cargar Platillos</button>
      </div>
    )
  }
}
