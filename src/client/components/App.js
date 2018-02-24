import React, { Component } from 'react'
import shortId from 'simple-id'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Dish from './Dish'
import sampleDishes from '../../../sample-dishes'

export default class App extends Component {
  state = {
    dishes: [],
  }

  addDish = dish => {
    const dishes = [...this.state.dishes]
    dishes.push({ ...dish, id: shortId(5) })

    this.setState({ dishes })
  }

  loadDishes = () => {
    this.setState({
      dishes: sampleDishes,
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood market" />
          <ul className="list-of-dishes">
            {/* Primero hacer el ejemplo sin key */}
            {this.state.dishes.map(({ id, ...details }) => (
              <Dish key={id} details={details} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addDish={this.addDish} loadDishes={this.loadDishes} />
      </div>
    )
  }
}
