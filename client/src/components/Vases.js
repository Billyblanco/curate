import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVase, getArrangementsFlowers, createArrangement } from '../redux/reducers/arrangementsReducer'
import { getVases } from '../redux/reducers/productReducer'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/Vases.css'

class Vases extends Component {

state = {
  search: ''
}

createArrangement = (vaseId, flowerIds) => {
  axios.post('/api/arrangements', {vaseId, flowerIds}).then(response => {
    this.props.getArrangementsFlowers()
    this.props.createArrangement()
  })
}

updateSearch = (e) => {
  this.setState({
    search: e.target.value.substr(0,20)
  })
}
render () {
  let { vaseId, flowerIds } = this.props
  // console.log(vaseId, flowerIds)
  const { search } = this.state
  const filteredVases = this.props.vasesData.filter( vase => {
    return vase.type.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })
  return (
    <div style={customStyles.content}>
      <div>
        <button className='close-button'onClick={this.props.closeModal}>close</button>
      </div>
          <div className='searchbar'>
              <input type='text' placeholder='Search Vases' value={this.state.search}
              onChange={this.updateSearch}/>
          </div>
    { filteredVases.map(vases => {
      return (
      <div className='modal-card'>
        <button onClick={() => {this.props.addVase(vases.id)}}>Select Vase</button>
        <p>{vases.name}</p>
        <p>${vases.price}</p>
        <img 
        src={ vases.image_url } alt='vases' height='450' width='450'/>
      </div>
        )
    })
  }
  <div className='finish-buttons'>
    <button
    onClick={this.props.showFlowerModal}
    >Go Back to Flowers</button>
        <Link to='/cart'><button onClick={ () => {this.createArrangement(vaseId, flowerIds)} }>Complete Arrangement Add Decor</button></Link>
    
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
    flexDirection: 'column',
    top: '30%',
    bottom: '40%',
    border: '0',
    borderRadius: '4px',
    padding: '10px',
  }
}

