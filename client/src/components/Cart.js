import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArrangementsFlowers } from '../redux/reducers/arrangementsReducer'
import Arrangement from './Arrangements'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'
import Nav from './Nav'

class Cart extends Component {
 constructor () {
   super()

    this.state = {
      superTotalPrice: 0
    }

 }
  componentDidMount() {
    this.props.getArrangementsFlowers()}
  
  componentWillReceiveProps(props) {}

  addTotal = (totalPrice) => {
    this.setState({
      superTotalPrice: this.state.superTotalPrice += totalPrice
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='cart-header'>
          <h1>YOUR SHOPPING CART</h1>
              <Checkout
              name = { 'Curate' }
              description = {'Arrangment Payment'}
              amount = {this.state.superTotalPrice}/>
            <Link to='/dashboard'><p>Make another Arrangement</p></Link>
        </div>
        
             <div className='cart-items'>
                <h4>Vase</h4>
                <h4>Flowers</h4>
            </div>
        {
          this.props.arrangementsData.map( arrangement => {
            return <Arrangement arrangement={arrangement}
                                addTotal={this.addTotal}  />
          })
        }
        
        
         <div>
          <input placeholder={this.state.superTotalPrice} />
        </div>
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
