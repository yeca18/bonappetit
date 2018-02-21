import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header className="top">
        <h1>
          Bon
          <span className="ofThe">
            <span className="of">19</span>
            <span className="the">99</span>
          </span>
          Appetit
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    )
  }
}
