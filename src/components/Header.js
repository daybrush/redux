import React, {  Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {



  render() {
    return (
      <header id="header">
        <Link className="header-logo" to="/">LOGO</Link>
      </header>
    )
  }
}
