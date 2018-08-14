import React, { Component } from 'react'
import '../css/Nav.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor (props) {
    super(props)
  }


  render() {
    // console.log(this.props)
    return (
  
          this.props.location.pathname === '/'
          ? 
          null
          :
        
          <div className="nav-container">
            <div className="button-container">
              <Link to='/'><h2>Logout</h2> </Link>
      
            </div>
          </div>
        

    )
  }
}
export default withRouter(Nav)