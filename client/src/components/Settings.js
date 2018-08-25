import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/usersReducer'
import '../css/Settings.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

class Settings extends Component {

  state = {
    email: '',
    username: '',
    password: ''
  }

  componentDidMount() {
    this.props.getUser()
  }


  updateEmail = () => {
  axios.put('/api/currentUser/email', {email: this.state.email}).then( () => {
    toast.success("Email Updated!")
    })
  }

  updateUsername = () => {
    axios.put('/api/currentUser/username', {username: this.state.username}).then( () => {
      toast.success("Username Updated!")
    })
  }

  updatePassword = () => {
     axios.put('/api/currentUser/password', {password: this.state.password}).then( () => {
    toast.success("Password Updated!")
    })
  }

  handleChange = (email) => { this.setState({ email: email }) }

  handleUsernameChange = (username) => { this.setState({ username: username }) }

  handlePasswordChange = (password) => { this.setState({ password: password }) }


  render () {
    let { user } = this.props
    return (
      <div className='settings-input'>
        <h2> HEY, {user.name}</h2>
          <hr/>
            <h2><b>Account Basics</b></h2>
              <div className='input-field'>
              
                <input onChange={ (e) => {this.handleChange(e.target.value)}} width='300'/>
                  <button onClick={ () => {this.updateEmail()}}>Update Email</button>
                     <ToastContainer />
                  
                <input onChange={ (e) => {this.handleUsernameChange(e.target.value)}}/>
                  <button onClick={ () => {this.updateUsername()}}>Update Username</button>
                    <br></br>

                <input onChange={ (e) => {this.handlePasswordChange(e.target.value)}}/>
                  <button onClick={ ()=> {this.updatePassword()}}>Update Password</button>
             </div>
      </div>
      
      
    )
  }
}
let mapStateToProps = state => {
  return {
    user: state.users.user
  }
}

export default connect(mapStateToProps, { getUser})(Settings)