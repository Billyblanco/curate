import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVase, getArrangementsFlowers, createArrangement } from '../redux/reducers/arrangementsReducer'
import { getVases } from '../redux/reducers/productReducer'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Vases extends Component {

createArrangement = (vaseId, flowerIds) => {
  axios.post('/api/arrangements', {vaseId, flowerIds}).then(response => {
    this.props.getArrangementsFlowers()
    this.props.createArrangement()
  })
}

render () {
  let { vaseId, flowerIds } = this.props
  console.log(vaseId, flowerIds)
  return (
    <div style={customStyles.content}>
      <div>
        <button className='close-button'onClick={this.props.closeModal}>close</button>
      </div>
    { this.props.vasesData.map(vases => {
      return (
      <div>
        <button onClick={() => {this.props.addVase(vases.id)}}>Select Vase</button>
        <img src={ vases.image_url } alt='vases' height='500'/>
      </div>
        )
    })
  }
  <div>
    <button onClick={this.props.showFolowers}>Go Back to Flowers</button>
    <Link to='/cart'><button onClick={ () => {this.createArrangement(vaseId, flowerIds)} }>Complete Arrangement!</button></Link>
    
  </div>
    </div>
    ) 
  }
}


let mapStateToProps = state => {
  return {
    vasesData: state.products.vasesData,
    vaseId: state.arrangements.vaseId,
    flowerIds: state.arrangements.flowerIds
  }
}

export default connect(mapStateToProps, {addVase, getArrangementsFlowers, getVases, createArrangement})(Vases)




const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    top: '30%',
    bottom: '40%',
    border: '0',
    borderRadius: '4px',
    padding: '10px'
  }
}

