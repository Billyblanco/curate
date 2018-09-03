import React, { Component } from 'react'
import axios from 'axios'
import '../css/Nodemailer.css'

class Nodemailer extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value
    const data = {
      name: name,   
      email: email,  
      messsage: message
    }

    axios.post('/api/send', data).then((response)=>{
        if (response.data.msg === 'success'){
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm () {
  document.getElementById('contact-form').reset()
}
  render () {
    return (
      <div className='form-container'>
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} >
          <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email"  />
          </div>
          <div className="form-group">
              <label for="message">Message</label>
              <textarea className="form-control" rows="5" id="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
    )
  }
}

export default Nodemailer 