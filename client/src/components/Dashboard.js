import React, { Component } from 'react'
import '../css/Dashboard.css'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getFlowers, getVases, getDecor } from '../redux/reducers/productReducer'
import { createArrangement } from '../redux/reducers/arrangementsReducer'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    top: '20%',
    bottom: '20%',
    border: '0',
    borderRadius: '4px',
    padding: '10px'
  }
}

class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      flowerModal: false, 
      vaseModal: false,
      decorModal: false,
      flowerIds: [],
      vaseId: null
    }
  }

  componentDidMount() {
    this.props.getFlowers(),
      this.props.getVases(),
        this.props.getDecor()
  }

toggleFlowerModal = () => {
  this.setState({ flowerModal: !this.state.flowerModal})}

toggleVaseModal = () => {
  this.setState({ vaseModal: !this.state.vaseModal})}

toggleDecorModal = () => {
  this.setState({ decorModal: !this.state.decorModal})}

closeFlowerModal = () => {this.setState({flowerModal: false })}
closeVaseModal = () => {this.setState({ vaseModal: false})}
closeDecorModal = () => {this.setState({decorModal: false})}

addFlowers = (id) => {
  this.setState({
    flowerIds: [...this.state.flowerIds, id]
  })
}

addVase = (id) => {
  this.setState({
    vaseId: id
  })
}

completeArrangement = () => {
  this.props.createArrangement(this.state.vaseId, this.state.flowerIds)
  this.setState({
    vaseId: null,
    flowerIds: []
  })
}

render() {
  console.log(this.state.flowerIds)
  return (
<div>
<div className="product-containers">
   <div className='product'><h2>FLOWERS</h2></div>
      <button className='product-button'
              onClick={this.toggleFlowerModal}>Click to Add</button>

  <Modal isOpen={this.state.flowerModal}
        onRequestClose={this.closeFlowerModal}
        style={customStyles} 
       
   >
   
        <div><button className='close-button' onClick={this.closeFlowerModal}>close</button></div>
{ this.props.flowerData.map(flowers => {
   return (
    <div className="modal-flower-view">
      <button onClick={ () => {this.addFlowers(flowers.id)}}>Add to Arrangement</button>
      <img src={ flowers.image_url} height='400'/>
    </div>
       )
    })
 }
    <div>
        <button onClick={this.toggleVaseModal}>Add Flowers To Vase</button>
      </div>
   </Modal>


   <div className="product"><h2>VASE</h2></div>
     <button className='product-button'
             onClick={this.toggleVaseModal}>Click to Add</button>

    <Modal  isOpen={this.state.vaseModal}
            onRequestClose={this.closeVaseModal}
            style={customStyles}
     >
        <div><button className='close-button'onClick={this.closeVaseModal}>close</button></div>
    { this.props.vasesData.map(vases => {
      return (
      <div>
        <button onClick={() => {this.addVase(vases.id)}}>Select Vase</button>
        <img src={ vases.image_url } height='400'/>
        
      </div>
        )
    })
  }
  <div>
    <button onClick={this.toggleFlowerModal}>Go Back to Flowers</button>
    <button onClick={ () => {this.completeArrangement()}}>Complete Arrangement!</button>
    
    
  </div>
  </Modal>

 <div className="product"><h2>DECOR</h2></div>
     <button className='product-button'
             onClick={this.toggleDecorModal}>Click to Add</button>

  <Modal    isOpen={this.state.decorModal}
            onRequestClose={this.closeDecorModal}
            style={customStyles}
  >

  <button onClick={this.closeDecorModal}>close</button>
  { this.props.decorData.map(decor => {
    return (
      <img src={ decor.image_url }/>
      )
    })
  }
  </Modal>
         
      </div> 
</div>
    )
  }
}
 
let mapStateToProps = state => {
  return {
    flowerData: state.products.flowerData,
    vasesData: state.products.vasesData,
    decorData: state.products.decorData, 
    flowerIds: state.arrangements.flowerIds,
    vaseId: state.arrangements.vaseId
  }
}
export default connect( mapStateToProps, { getFlowers, getVases, getDecor, createArrangement })(Dashboard)



