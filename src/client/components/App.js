import React, { Component } from 'react'
import shortId from 'simple-id'
import axios from 'axios'

import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Dish from './Dish'
import sampleDishes from '../../../sample-dishes'

export default class App extends Component {
  state = {
    dishes: [],
    order: {},
  }

  componentDidMount = () => {
    axios
      .get('/api/dishes')
      .then(({ data: dishes }) => {
        console.log(dishes)
        this.setState({
          dishes,
        })
      })
      .catch(err => console.log(`Ohhh no ha ocurrido algo 😮 ${err}`))
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

  addToOrder = dishId => {
    const order = { ...this.state.order }
    order[dishId] = order[dishId] + 1 || 1
    this.setState({ order })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood market" />
          <ul className="list-of-dishes">
            {/* Primero hacer el ejemplo sin key */}
            {this.state.dishes.map(({ id, ...details }) => (
              <Dish
                key={id}
                details={details}
                id={id}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order dishes={this.state.dishes} order={this.state.order} />
        <Inventory addDish={this.addDish} loadDishes={this.loadDishes} />
      </div>
    )
  }
}
