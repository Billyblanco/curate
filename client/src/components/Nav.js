import React, { Component } from 'react'
import '../css/Nav.css'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    console.log(this.props)
    return (
      // {/* <h1>CURATE</h1> */}
        
          this.props.location.pathname === '/'
          ? 
          null
          :
        
          <div className="nav-container">
            <div className="button-container">
              <h2>Logout</h2>
              <h2>Cart</h2>
            </div>
          </div>
        

    )
  }
}
export default withRouter(Nav)