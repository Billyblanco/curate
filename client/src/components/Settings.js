import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../redux/reducers/usersReducer'
import '../css/Settings.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

class Settings extends Component {

  state = {
    newEmail: ''
  }

  componentDidMount() {
    this.props.getUser()
  }

  handleChange = (email) => {
    this.setState({
      newEmail: email
    })
  }
  updateEmail = () => {
  axios.put('/api/currentUser', {newEmail: this.state.newEmail}).then( () => {
    toast.success("Email Updated!")
    
  })
  }
  

  render () {
    let { user } = this.props
    // console.log('skjdfhjksahfh', user)
    return (
     
      <div className='settings-input'>
       <ToastContainer />
        <h2> Hey, {user.name}</h2>
          <hr/>
      <h2><b>Account Basics</b></h2>
               <input onChange={ (e) => {this.handleChange(e.target.value)} }placeholder={user.email} width='300'/>
          <button onClick={ () => {this.updateEmail()}}>Change your Email</button>
      <div>
          <button>Change your Password</button>
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