import React, { Component } from 'react'
import { connect } from 'react-redux'


class Settings extends Component {

  componentDidMount() {
    this.props.getUsers()
  }
  render () {
    return (
      <div>
      </div>
    )
  }
}

export default Settings