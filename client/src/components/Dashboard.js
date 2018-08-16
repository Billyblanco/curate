import React, { Component } from 'react'
import '../css/Dashboard.css'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getFlowers, getVases, getDecor } from '../redux/reducers/productReducer'
import { createArrangement } from '../redux/reducers/arrangementsReducer'
import Flowers from './Flowers'
import Vases from './Vases'
Modal.setAppElement('#root')


class Dashboard extends Component {
  constructor () {
    super()

    this.state = {
      flowerModal: false, 
      vaseModal: false,
      decorModal: false,
    }
  }

  componentDidMount() {
    this.props.getFlowers()
      this.props.getVases()
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


render() {
  console.log(this.props.arrangementsData)
  return (
<div>
<div className="product-containers">
   <div className='product'><h2><b>FLOWERS</b></h2></div>
      <button className='product-button'
              onClick={this.toggleFlowerModal}>Click to Add</button>

  <Modal 
    isOpen={this.state.flowerModal}
    onRequestClose={this.closeFlowerModal}>
    <Flowers closeModal={this.closeFlowerModal} showVaseModal={this.toggleVaseModal}/>
  </Modal>

   <div className="product"><h2>VASE</h2></div>
     <button className='product-button'
             onClick={this.toggleVaseModal}>Click to Add</button>

    <Modal  isOpen={this.state.vaseModal}
            onRequestClose={this.closeVaseModal}>
        <Vases closeModal={this.closeVaseModal}
                showFlowers={this.toggleFlowerModal}/>
   </Modal>

    <div className="product"><h2>DECOR</h2></div>
        <button className='product-button'
                onClick={this.toggleDecorModal}>Click to Add</button>

  <Modal    isOpen={this.state.decorModal}
            onRequestClose={this.closeDecorModal}>

  <button onClick={this.closeDecorModal}>close</button>
  { this.props.decorData.map(decor => {
    return (
       <img src={ decor.image_url } alt='decor' height='400'/>
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
    decorData: state.products.decorData, 
    flowerIds: state.arrangements.flowerIds,
    vaseId: state.arrangements.vaseId,
    arrangementsData: state.arrangements.arrangementsData
  }
}

export default connect( mapStateToProps, { getFlowers, getVases, getDecor, createArrangement })(Dashboard)



