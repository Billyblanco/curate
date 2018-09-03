import React, { Component } from 'react'
import '../css/Footer.css'
import logo from '../img/logo_transparent.png'

class Footer extends Component {

  render () {
    return (
      <div className='footer'>
       
        <p> Copywrite Curate 2018</p>
          <img src={logo} alt='logo' height='180' width='180'/>
          <div className='social'>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fab fa-twitter"></i>
          </div>
           
      </div>
    )
  }
}
export default Footer 