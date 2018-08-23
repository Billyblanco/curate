import React, { Component } from 'react'
import '../css/Footer.css'
import ig from '../img/instagram-icon.png'
import fb from '../img/facebook-icon.png'
import pin from '../img/pinterest-icon.png'
import twitter from '../img/twitter-icon.png'
class Footer extends Component {

  render () {
    return (
      <div className='footer'>
      <p> This Is A Cute Footer Message </p>
            <div className='footer-logo-box'>
              <img src={ig} height={60}/>
              <img src={fb} height={60}/>
              <img src={pin} height={60}/>
              <img src={twitter} height={60}/>
            </div>
      </div>
    )
  }
}
export default Footer 