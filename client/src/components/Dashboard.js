import React, { Component } from 'react'
import '../css/Dashboard.css'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { getFlowers } from '../redux/reducers/flowersReducer'
Modal.setAppElement('#root')

// import { toggleFlowerModal } from '../redux/reducer/flowers'

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
    this.props.getFlowers()
  }

toggleFlowerModal = () => {
  this.setState({
    flowerModal: !this.state.flowerModal
  })
}

toggleVaseModal = () => {
  this.setState({
    vaseModal: !this.state.vaseModal
  })
}

toggleDecorModal = () => {
  this.setState({
    decorModal: !this.state.decorModal
  })
}

closeFlowerModal = () => {
  this.setState({
    flowerModal: false
  })
}

closeVaseModal = () => {
  this.setState({
    vaseModal: false
  })
}

closeDecorModal = () => {
  this.setState({
    decorModal: false
  })
}


  render() {
    return (
      <div className="product-containers">
          <div className='product'><h2>FLOWERS</h2>
            <button onClick={this.toggleFlowerModal}></button>
            <Modal isOpen={this.state.flowerModal}
                  
            >
      {
        this.props.flowerData.map(flowers => {
          return (
            <img src={ flowers.image_url} />
          )
        })
      }

            </Modal>

          </div>
              <div className='product'><h2>VASE</h2>
              <button></button>
              </div>
                  <div className='product'><h2>DECOR</h2>
                  <button></button>
                  </div>
      </div>

    )
  }
}
 
let mapStateToProps = state => {
  return {
    flowerData: state.flowers.flowerData
  }
}
export default connect( mapStateToProps, { getFlowers })(Dashboard)



