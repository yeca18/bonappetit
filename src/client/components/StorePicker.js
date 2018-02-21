import React, { Component } from 'react'
import { getFunName } from '../utils/helpers'

export default class StorePicker extends Component {
  render() {
    return (
      <form className="store-selector">
        {/* ejemplo de comentario */}
        <h2>Ingrese Una Tienda</h2>
        <input
          type="text"
          required
          placeholder="Nombre de la Tienda"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}
