import React, { Component } from 'react'
import '../css/Header.css'
import Nav from './Nav'

class Header extends Component {


  render () {
    return (
      <div className='header'>
        <Nav />
   </div>
     
    )
  }
}
export default Header;