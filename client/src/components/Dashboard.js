import React, { Component } from 'react'
import '../css/Dashboard.css'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getFlowers } from '../redux/reducers/flowersReducer'
import { getVases } from '../redux/reducers/vasesReducer'
import { getDecor } from '../redux/reducers/decorReducer'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    top: '20%',
    bottom: '20%',
    border: '0',
    borderRadius: '4px'
    
  }
}


class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      flowerModal: false, 
      vaseModal: false,
      decorModal: false
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
  this.setState({ decorModal: !this.state.decorModa})}

closeFlowerModal = () => {this.setState({flowerModal: false })}
closeVaseModal = () => {this.setState({ vaseModal: false})}
closeDecorModal = () => {this.setState({decorModal: false})}


render() {
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
        <button onClick={this.closeFlowerModal}>close</button>
{ this.props.flowerData.map(flowers => {
   return (
      <img src={ flowers.image_url} />
       )
    })
 }
   </Modal>


   <div className="product"><h2>VASE</h2></div>
     <button className='product-button'
             onClick={this.toggleVaseModal}>Click to Add</button>

    <Modal  isOpen={this.state.vaseModal}
            onRequestClose={this.closeVaseModal}
            style={customStyles}
     >
        <button onClick={this.closeVaseModal}>close</button>
    { this.props.vasesData.map(vases => {
      return (
        <img src={ vases.image_url }/>
        )
    })
  }
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
    flowerData: state.flowers.flowerData,
    vasesData: state.vases.vasesData,
    decorData: state.decor.decorData
  }
}
export default connect( mapStateToProps, { getFlowers, getVases, getDecor })(Dashboard)



