import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArrangementsFlowers } from '../redux/reducers/arrangementsReducer'
import Arrangement from './Arrangements'
class Cart extends Component {
  
  

  componentDidMount() {
    this.props.getArrangementsFlowers()
  }
  render() {
   
    return (
      <div>
        {
          this.props.arrangementsData.map( arrangement => {
            return <Arrangement arrangement={arrangement}/>
          })
        }
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    arrangementsData: state.arrangements.arrangementsData,
    flowerData: state.products.flowerData,
    vasesData: state.products.vasesData
  }
}

export default connect( mapStateToProps, { getArrangementsFlowers})(Cart)

