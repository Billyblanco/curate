import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Order.css'

class Order extends Component {
  render () {
    const { order } = this.props
    console.log('111111',order)
    return (
      
      <div className='order-card'>
        <img src={order.vase.imageUrl} height='250'/>
        {
          order.flowers.map ( flower => {
            return (
              <img src={flower.imageUrl} alt='flower' height='250' width='190'/>
            )
          })
        }
      </div>
    )
  }
}
export default Order