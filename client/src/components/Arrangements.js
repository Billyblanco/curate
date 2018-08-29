import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Arrangements.css'
import { deleteArrangement } from '../redux/reducers/arrangementsReducer'

class Arrangements extends Component {

  componentDidMount () {
    const { arrangement } = this.props
      let totalPrice = +arrangement.vase.price
   
    arrangement.flowers.forEach( flower => {
        totalPrice += +flower.price
      })

    this.props.addTotal(totalPrice)
  }
  
   render () {
     const {arrangement} = this.props
     let totalPrice = +arrangement.vase.price
     return (
          <div className='arrangements-container'>
            <div className='arrangement'> 
              <p>{arrangement.vase.name}</p>
            <img src={arrangement.vase.imageUrl} alt='vase' height='100'/>
              
            </div>
  
                {
                  arrangement.flowers.map( flower => {
                  let flowerPrice = Math.floor(+flower.price)
                  totalPrice += flowerPrice
                    return (
                  
                      <div className='flower-container'>
                          <p>{flower.name}</p>
          
                          <img src={flower.imageUrl} alt='flower' height='100'/>
                      </div>
                    )
                  })
                }
                
                <div>
                <button className='delete-button'
                onClick={ () => {this.props.deleteArrangement(arrangement.id)}}>Remove</button></div>
               <p>TOTAL PRICE:{totalPrice}</p>
          </div>
     )
   }
 }


 export default connect(null, { deleteArrangement })(Arrangements)