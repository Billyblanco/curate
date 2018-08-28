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
          <h1 className='heading-primary'> 
            <span className='heading-primary--main'>Curate
                  </span>
            <span className='heading-primary--sub'> Something </span>
          </h1>
          <br></br>
            {/* <a href='#'
              className='button button--white button--animated'>Start Designing</a> */}
        </div>
   </div>
     
    )
  }
}
export default Header;