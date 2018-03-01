import React, { Component } from 'react'

export default class AddDish extends Component {
  createDish = evt => {
    evt.preventDefault()
    const dish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }

    this.props.addDish(dish)
    this.dishForm.reset()
  }

  render() {
    return (
      <form
        ref={form => {
          this.dishForm = form
        }}
        className="dish-edit"
        onSubmit={this.createDish}
      >
        <input
          ref={input => {
            this.name = input
          }}
          type="text"
          placeholder="Nombre del Platillo"
        />
        <input
          ref={input => {
            this.price = input
          }}
          type="text"
          placeholder="Precio del Platillo"
        />
        <select
          ref={input => {
            this.status = input
          }}
        >
          <option value="available">Disponible</option>
          <option value="unavailable">Agotado!</option>
        </select>
        <textarea
          ref={input => {
            this.desc = input
          }}
          placeholder="Descripción del platillo"
        />
        <input
          ref={input => {
            this.image = input
          }}
          type="text"
          placeholder="Imagen del platillo"
        />

        <button type="submit">+ Agregar Platillo</button>
      </form>
    )
  }
}
