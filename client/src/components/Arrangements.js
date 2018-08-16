import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Arrangements.css'
import { deleteArrangement } from '../redux/reducers/arrangementsReducer'

class Arrangements extends Component {
 
   render () {
    //  console.log(this.props.arrangement)
     const {arrangement} = this.props
     return (
       <div className='arrangements-container'>
          <div> <p>{arrangement.vase.name}</p>
            <img src={arrangement.vase.imageUrl} height='100'/></div>
            {
              arrangement.flowers.map( flower => {
                return (
                  <div>
                    <p>{flower.name}</p>
                    <img src={flower.imageUrl} height='100'/>
                  </div>
                )
              })
            }
            <div className='delete-button'>
            <button onClick={ () => {this.props.deleteArrangement()}}>Delete Arrangement</button></div>
       </div>
     )
   }
 }
 export default connect(null, { deleteArrangement })(Arrangements)