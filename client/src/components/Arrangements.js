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
                  let flowerPrice = +flower.price
                  totalPrice += flowerPrice
                    return (
                  
                      <div>
                        <p>{flower.name}</p>
                        <img src={flower.imageUrl} alt='flower' height='100'/>
                        
                      </div>
                    )
                  })
                }
                
                <div className='delete-button'>
                <button onClick={ () => {this.props.deleteArrangement(arrangement.id)}}>Delete Arrangement</button></div>
                <div> Total: ${Math.floor(totalPrice *100) /100} </div>
          </div>
     )
   }
 }


 export default connect(null, { deleteArrangement })(Arrangements)