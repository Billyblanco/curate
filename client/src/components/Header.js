import React, { Component } from 'react'
import '../css/Header.css'
import Nav from './Nav'

class Header extends Component {


  render () {
    return (
      <div className='header'>
      <Nav />
        <div className='header__logo-box'>
    
        </div>

        <div className='header__text-box'>
            {/* <span className='heading-primary--main'>Curate.
                  </span> */}
            {/* <span className='heading-primary--sub'> Something should go here. </span> */}
          
          
        </div>
   </div>
     
    )
  }
}
export default Header;