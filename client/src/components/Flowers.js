import React from 'react'
import { connect } from 'react-redux'
import { getFlowers } from '../redux/reducers/productReducer'
import { addFlowersToArrangement } from '../redux/reducers/arrangementsReducer'

function Flowers(props) {


  return (
    <div style={customStyles.content}>
      <div>
        <button className='close-button' onClick={props.closeModal}>close</button>
      </div>
      { props.flowerData.map(flower => {
        return (
          <div className="modal-flower-view">
            <button onClick={ () => {props.addFlowersToArrangement(flower.id)}}>Add to Arrangement</button>
            <img src={ flower.image_url} alt='flowers' height='400'/>
          </div>
        )
      }) }
      <div>
        <button onClick={props.showVaseModal}>Add Flowers To Vase</button>
      </div>
    </div>
  )
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
    flexDirection: 'row',
    top: '20%',
    bottom: '20%',
    border: '0',
    borderRadius: '4px',
    padding: '10px'
  }
}