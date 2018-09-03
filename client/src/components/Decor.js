import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDecor } from '../redux/reducers/productReducer'
import '../css/Decor.css'

class Decor extends Component {

  state = {
    search: ''
  }

  updateSearch = (e) => {
    this.setState({ 
      search: e.target.value.substr(0,26)
    })
  }
  render () {
    const { search } = this.state
    const filteredDecor = this.props.decorData.filter( decor => {
      return decor.type.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    return ( 
 
  <div className='searchbar'>
    <div className='sticky-header'>
     <button className='close-button'onClick={this.props.closeModal}>Close</button>
        <input type='text' placeholder='ex. candle holder'
               value={this.state.search}
               onChange={this.updateSearch}/>
    <div className='finish-buttons'>
          <button onClick={this.props.showVaseModal}>Go Back to Vases</button>
          <button>Add Decor to Cart!</button>
       </div>
    </div>
  { 
    filteredDecor.map(decor => {
    return (
    <div className='decor-modal-card'>
        <button>Add Decor Item</button>
           <p>{decor.name}</p>
           <p>${decor.price}</p>
           <p>{decor.description}</p>
           <img src={ decor.image_url } alt='decor' height='400' width='400'/>
    </div>
      )
    })
  }
</div>
    )
  }
}
let mapStateToProps = state => {
  return {
    decorData: state.products.decorData,
    decorIds: state.decor.decorIds
  }
}
export default connect(mapStateToProps, {getDecor})(Decor)