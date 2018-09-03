import React, { Component } from 'react'
import '../css/Dashboard.css'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getFlowers, getVases, getDecor } from '../redux/reducers/productReducer'
import { createArrangement } from '../redux/reducers/arrangementsReducer'
import Flowers from './Flowers'
import Vases from './Vases'
import Decor from './Decor'
import '../css/Dashboard.css'
import Header from './Header'
import Image from './Image'
import Footer from './Footer'
import Nav from './Nav'
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
  this.setState({ 
    flowerModal: !this.state.flowerModal,
    vaseModal: false,
    decorModal: false
  })}

toggleVaseModal = () => {
  this.setState({ 
    vaseModal: !this.state.vaseModal,
    flowerModal: false,
    decorModal: false
  })}

toggleDecorModal = () => {
  this.setState({ 
    decorModal: !this.state.decorModal,
    vaseModal: false,
    flowerModal: false
  })}

closeFlowerModal = () => {this.setState({flowerModal: false })}
closeVaseModal = () => {this.setState({ vaseModal: false})}
closeDecorModal = () => {this.setState({decorModal: false})}


render() {
  // console.log(this.props.arrangementsData)
  return (
<div>
  <Nav />
  <Header/>
    {/* <div className='mid'>
      <p>Curate allows you to be your own designer. <br></br>Begin with choosing your favourite flowers, then Add Them to One of Our Beautiful Vase Selections.</p>
     
    </div> */}
    <div className='element-header'> <h1> choose your elements </h1> </div>
    

<div className='main-body'>
  <div className='card-container'>
    <div className='card'>
      <div className='front front-one'><h2><b>FLEUR</b></h2></div>
      <div className='back back-one'> 
          <span> Select From a Variation of Locally Grown Flowers</span>   
            <button className='product-button'
                    onClick={this.toggleFlowerModal}>Click to Add</button>
      </div>
    </div>
  </div>
  {/* <div className="screen-m"> */}
    <Modal  className='inner-modal'
            overlayClassName='overlay-modal'
            id='inner-modal-id'
            isOpen={this.state.flowerModal}
            style={style}
            onRequestClose={this.closeFlowerModal}>
      <Flowers  closeModal={this.closeFlowerModal} 
                showVaseModal={this.toggleVaseModal}/>
    </Modal>
  {/* </div> */}
  <div className="screen-sm">
    <Flowers  closeModal={this.closeFlowerModal} 
                showVaseModal={this.toggleVaseModal}/>
  </div>

  <div className='card-container'>
    <div className='card'>
      <div className='front front-two'><h2>VASE</h2></div>
      <div className='back back-two'> 
        <span>Pick the Perfect Vase for Any Style</span>
        <button className='product-button'
                onClick={this.toggleVaseModal}>Click to Add</button> 
      </div>
    </div>
  </div>

    <Modal  className='inner-modal'
            id='inner-modal-id'
            isOpen={this.state.vaseModal}
            style={style}
            onRequestClose={this.closeVaseModal}>
        <Vases closeModal={this.closeVaseModal}
              showFlowerModal={this.toggleFlowerModal}/>
   </Modal >
   <div className='card-container'>
      <div className='card'>
        <div className='front front-three'><h2>DECOR</h2></div>
        <div className='back back-three'> 
            <span>Customize with Lanterns, Table Accents, Custom Candle Holders</span>
              <button className='product-button'
                      onClick={this.toggleDecorModal}>Click to Add</button>
        </div>
      </div>
    </div>

  <Modal    className='inner-modal'
            isOpen={this.state.decorModal}
            style={style}
            onRequestClose={this.closeDecorModal}>
      < Decor closeModal={this.closeDecorModal}
              showVaseModal={this.toggleVaseModal}/>
  </Modal>

</div> 
    <div><Image/></div>
    <div><Footer/></div>
</div>

    )
  }
}
 
let mapStateToProps = state => {
  return {
    decorData: state.products.decorData, 
    flowerIds: state.arrangements.flowerIds,
    vaseId: state.arrangements.vaseId,
    arrangementsData: state.arrangements.arrangementsData,
  }
}

export default connect( mapStateToProps, { getFlowers, getVases, getDecor, createArrangement })(Dashboard)


// const padding = 90; // adjust this to your needs
// let height = (this.state.contentHeight + padding);
// let heightPx = height + 'px';
// let heightOffset = height / 2;
// let offsetPx = heightOffset + 'px';

const style = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    // height: '900px',  // set height
    left: '20%',
    padding: '2rem',
    position: 'fixed',
    right: '20%',
    top: '0', // start from center
    transform: 'translate(-50%,-' + 50% + ')', // adjust top "up" based on height
    width: '80%',
    maxWidth: '90rem'
  }
};
