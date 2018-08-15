import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArrangementsFlowers } from '../redux/reducers/arrangementsReducer'

class Cart extends Component {
  constructor () {
    super()
  }

  componentDidMount() {
    this.props.getArrangementsFlowers()
  }

  render() {
    return (
      <div>
       
      </div>
    )
  }
}



export default connect(null, { getArrangementsFlowers})(Cart)

