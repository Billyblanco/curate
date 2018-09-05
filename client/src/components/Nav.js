import React, { Component } from 'react'
import '../css/Nav.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/usersReducer'


class Nav extends Component {

     state = {
      visible: false,
      menuClosed: 'menuClosed'
    }


toggleMenu = () => {
  this.setState({
    visible: !this.state.visible
  })
}

handleMouseUp = (e) => {
  this.toggleMenu()
    console.log("clicked");
    e.stopPropagation();
    if (this.state.visible && this.state.menuClosed === 'menuClosed') {
      this.setState({
        menuClosed: 'menuOpened'
      })
    } else if ( !this.state.visible && this.state.menuClosed === 'menuOpened' ) {
      this.setState({
        menuClosed: 'menuClosed'
      })
    }
}

  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`;
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
      window.location = location 
  }

render() {
  
  return (
    
  // this.props.location.pathname === '/' ? 
  //   null :  
    <div>   
      <div className="navbar">
        <ul>
          <li><Link to='/dashboard'><i class="far fa-smile"></i></Link></li>
             <h1>curate.</h1>

             {/* <div classname= 'nav-right'>
             {this.props.user &&  <span className='menu-item'><Link to='/settings'>{this.props.user.name}</Link></span>}
             <span className='menu-item'><Link to='/cart'>CART</Link></span>
                 <button className="menu-item" onClick={this.login}>LOGIN</button>
            </div> */}

                 <div class='menu-toggle' onMouseUp={this.handleMouseUp} visible={this.state.visible}>
                  <div className='bar1'></div>
                  <div className='bar2'></div>
                  <div className='bar3'></div>
                 </div>      
        </ul>
      </div>
    { this.state.visible ?
   <div className={this.state.menuClosed}>
         {this.props.user &&  <span className='menu-item'><Link to='/settings'>{this.props.user.name}</Link></span>}
            <span className='menu-item'><Link to='/cart'>CART</Link></span>
                 <button className="menu-item" onClick={this.login}>LOGIN</button>
                        
    </div>
                :
                null 
           }

                
 </div>
    )
  }
}
let mapStateToProps = state => {
  return {
    user: state.users.user
  }
}
export default withRouter(connect(mapStateToProps)(Nav))