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
      <div className='sticky-header-flowers'>
        <button className='close-button' onClick={this.props.closeModal}>close</button>
           <div className='flower-searchbar'>
              <input type='text' placeholder='Search Flowers'
                     value={this.state.searchFLowers}
                     onChange={this.updateFlowersSearch}
                     width='500'/>
          </div>
            <button className='add-flowers'onClick={this.props.showVaseModal}>Add Vase</button>
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
    bottom: '40%',
    border: '0',
    borderRadius: '4px',
    padding: '10px',
  }
}
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

const style = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    height: '600px',  // set height
    left: '50%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%', // start from center
    transform: 'translate(-50%,-' + -30% + ')', // adjust top "up" based on height
    width: '40%',
    maxWidth: '40rem'
  }
};