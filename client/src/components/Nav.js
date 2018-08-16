import React, { Component } from 'react'
import '../css/Nav.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Nav extends Component {
  
  render() {
    // console.log(this.props)
    return (
  
          this.props.location.pathname === '/'
          ? 
          null
          :
        
          <div className="nav-container">
            <div className="button-container">
            <h2> C U R A T E</h2>
              <Link to='/'><h3>Logout</h3> </Link>
      
            </div>
          </div>
        

    )
  }
}
export default withRouter(Nav)