import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFlowers } from '../redux/reducers/productReducer'
import { addFlowersToArrangement } from '../redux/reducers/arrangementsReducer'
import '../css/Flowers.css'

class Flowers extends Component {

  state = {
    displayImageText: false,
    searchFlowers: ''
  }
updateFlowersSearch = (e) => {
  this.setState({
    searchFlowers: e.target.value.substr(0, 26)
  })
}

  displayImageTextTrue = () => {
    this.setState({ displayImageText: true})
  }

  displayImageTextFalse = () => {
    this.setState({ displayImageText: false })
  }

  render () {
    
    const { searchFlowers } = this.state
    const filteredFlowers = this.props.flowerData.filter( flower => {
      return flower.name.toLowerCase().indexOf(searchFlowers.toLowerCase()) !== -1
    })
  return (
    <div>
      <div>
        <button className='close-button' onClick={this.props.closeModal}>close</button>
      </div>
          <div className='searchbar'>
            <input type='text' placeholder='Search Flowers'
                   value={this.state.searchFLowers}
                   onChange={this.updateFlowersSearch}
                   width='500'/>
          </div>
      { filteredFlowers.map(flower => {
        return (
          <div className="flower-modal-card">
            <button onClick={ () => {this.props.addFlowersToArrangement(flower.id)}}>Add to Arrangement</button>
            
            <p>{flower.name}</p>
            <p>${flower.price}</p>
            <img className='image'
                onClick={ () => {this.props.addFlowersToArrangement(flower.id)}}
                src={ flower.image_url} alt='flowers' height='450' width='350'/>
              
          </div>
        )
      })}
          
     
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

