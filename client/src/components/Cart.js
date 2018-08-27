import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArrangementsFlowers } from '../redux/reducers/arrangementsReducer'
import Arrangement from './Arrangements'
import axios from 'axios'


class Cart extends Component {
  
  checkout = () => {
    axios.post('/api/checkout/').then( response => {
      console.log('checkout', response.data)
    })
  }
  componentWillReceiveProps(props) {
  }

  componentDidMount() {
    this.props.getArrangementsFlowers()
  }
  render() {
   
    return (
      <div>
        <div className='cart-header'>
          <h1>CART</h1>
          <button onClick={ () => {this.checkout()}}>Checkout</button>
            <button>CONTINUE SHOPPING</button>
        </div>
        {
          this.props.arrangementsData.map( arrangement => {
            console.log(1111111, arrangement)
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

