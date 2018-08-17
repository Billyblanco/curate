import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFlowers } from '../redux/reducers/productReducer'
import { addFlowersToArrangement } from '../redux/reducers/arrangementsReducer'
import '../css/Flowers.css'

class Flowers extends Component {

  state = {
    displayImageText: false
  }

  displayImageTextTrue = () => {
    this.setState({ displayImageText: true})
  }

  displayImageTextFalse = () => {
    this.setState({ displayImageText: false })
  }

  render () {
  return (
    <div style={customStyles.content}>
      <div>
        <button className='close-button' onClick={this.props.closeModal}>close</button>
      </div>
      { this.props.flowerData.map(flower => {
        return (
          <div className="modal-flower-view">
            <button onClick={ () => {this.props.addFlowersToArrangement(flower.id)}}>Add to Arrangement</button>
            
            <img className='image'
                onClick={ () => {this.props.addFlowersToArrangement(flower.id)}}
                src={ flower.image_url} alt='flowers' height='500'/>
              <p>{flower.name}</p>
            <p>${flower.price}.00</p>
          </div>
        )
      }) }
      <div>
        <button onClick={this.props.showVaseModal}>Add Flowers To Vase</button>
      </div>
    </div>
   )
  }
}

let mapStateToProps = state => {
  return {
    flowerIds: state.arrangements.flowerIds,
    flowerData: state.products.flowerData
  }
}

export default connect(mapStateToProps, {  addFlowersToArrangement, getFlowers})(Flowers)

const customStyles = {
  
  content: {
    display: 'flex',
    flexDirection: 'column',
    top: '30%',
    bottom: '50%',
    border: '0',
    borderRadius: '4px',
    padding: '10px',
    
  }
}