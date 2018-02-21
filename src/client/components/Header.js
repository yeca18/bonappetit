import React from 'react'

const Header = props => (
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
      <span>{props.tagline}</span>
    </h3>
  </header>
)

export default Header
