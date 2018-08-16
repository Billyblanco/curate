import React from 'react'
import { connect } from 'react-redux'
import { addVase, createArrangement } from '../redux/reducers/arrangementsReducer'
import { getVases } from '../redux/reducers/productReducer'
import { Link } from 'react-router-dom'


function Vases(props) {

  return (
    <div style={customStyles.content}>
      <div>
        <button className='close-button'onClick={props.closeModal}>close</button>
      </div>
    { props.vasesData.map(vases => {
      return (
      <div>
        <button onClick={() => {props.addVase(vases.id)}}>Select Vase</button>
        <img src={ vases.image_url } alt='vases' height='500'/>
      </div>
        )
    })
  }
  <div>
    <button onClick={props.showFolowers}>Go Back to Flowers</button>
    <Link to='/cart'><button onClick={ () => {props.createArrangement(props.vaseId, props.flowerIds)} }>Complete Arrangement!</button></Link>
    
  </div>
    </div>
    ) 
  }


let mapStateToProps = state => {
  return {
    vasesData: state.products.vasesData,
    vaseId: state.arrangements.vaseId,
    flowerIds: state.arrangements.flowerIds
  }
}

export default connect(mapStateToProps, {addVase, createArrangement, getVases})(Vases)




const customStyles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    top: '30%',
    bottom: '40%',
    border: '0',
    borderRadius: '4px',
    padding: '10px'
  }
}

