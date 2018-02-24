import React, { Component } from 'react'
import shortId from 'simple-id'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

export default class App extends Component {
  // Metodo un poco viejo de definir el state
  // constructor() {
  //   super()

  //   this.state = {
  //     dishes: [],
  //   }
  // }

  state = {
    dishes: [],
  }

  addDish = dish => {
    const dishes = [...this.state.dishes]
    dishes.push({ ...dish, id: shortId(5) })

    // como se salva el estado?
    // { dishes: dishes }
    this.setState({ dishes })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood market" />
        </div>
        <Order />
        <Inventory addDish={this.addDish} />
      </div>
    )
  }
}
