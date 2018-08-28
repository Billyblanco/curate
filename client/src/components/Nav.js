import React, { Component } from 'react'
import '../css/Nav.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Nav extends Component {
  
render() {
  return (
  
  this.props.location.pathname === '/' ? 
  null :
        
  <div className="navbar">
    <ul>
      <li><Link to='/'><i className="fas fa-home"></i></Link></li>
        <li><Link to='/settings'><i className="fas fa-user-cog"></i></Link></li>
          <li><Link to='/cart'><i className="fas fa-shopping-cart"></i></Link></li>
     </ul>
 </div>
    )
  }
}
export default withRouter(Nav)