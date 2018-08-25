import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Arrangements.css'
import { deleteArrangement } from '../redux/reducers/arrangementsReducer'

class Arrangements extends Component {

   render () {
     const {arrangement} = this.props
     let totalPrice = +arrangement.vase.price
     console.log(arrangement.vase.price)
     return (
          <div className='arrangements-container'>
            <div> 
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
               <p>{totalPrice}</p>
          </div>
     )
   }
 }


 export default connect(null, { deleteArrangement })(Arrangements)