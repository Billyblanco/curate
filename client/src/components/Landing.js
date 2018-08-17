import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Landing.css'
import { Link } from 'react-router-dom'

class Landing extends Component {
 
  login = () => {
    let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`;
    let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    let scope = encodeURIComponent('openid profile email')
    let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
      window.location = location 
  }

  render() {
    console.log(this.props.user)
    return (
      <div className='background'>
        <h1>CURATE</h1>
        
          <div>
            {this.props.user ? 
            <h1> Welcome Back, {this.props.user.name}!</h1> 
            :
            <button className="login-button" onClick={this.login}>LOGIN</button>}
          </div>
          <Link to='/dashboard'><button>Go to your Designs</button></Link>
     </div>
    )
  }
}
  
let mapStateToProps = state => {
  return {
    user: state.users.user
  }
}
export default connect (mapStateToProps)(Landing)


