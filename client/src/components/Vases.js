import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addVase, getArrangementsFlowers, createArrangement } from '../redux/reducers/arrangementsReducer'
import { getVases } from '../redux/reducers/productReducer'
import { Link } from 'react-router-dom'
import ReactS3Uploader from 'react-s3-uploader'

import axios from 'axios'
import '../css/Vases.css'


const config = {
  bucketName: process.env.REACT_APP_SOME_BUCKET,
  dirName: 'user-input',
  region: 'eu-west-1',
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
}

class Vases extends Component {
  constructor(){
    super()

    this.state = {
      search: ''
    }
  }
 

createArrangement = (vaseId, flowerIds) => {
  axios.post('/api/arrangements', {vaseId, flowerIds}).then(response => {
    this.props.getArrangementsFlowers()
    this.props.createArrangement()
  })
}

updateSearch = (e) => {
  this.setState({
    search: e.target.value.substr(0,20)
  })
}


render () {
  let { vaseId, flowerIds } = this.props
  const { search } = this.state
  const filteredVases = this.props.vasesData.filter( vase => {
    return vase.type.toLowerCase().indexOf(search.toLowerCase()) !== -1
  })
  return (
   
<div style={customStyles}>   
      <div className='sticky-header'>
        <button className='close-button'onClick={this.props.closeModal}>close</button>
          <div className='searchbar'>
              <input type='text' placeholder='Search Vases' value={this.state.search}
              onChange={this.updateSearch}/>
          </div>
   
              <div className='finish-buttons'>
                  <button onClick={this.props.showFlowerModal}>Go Back to Flowers</button>
                     <Link to='/cart'><button onClick={ () => {this.createArrangement(vaseId, flowerIds)} }>Complete Arrangement</button></Link>
                </div>
                
          </div>

    { filteredVases.map(vases => {
      return (
      <div className='modal-card'>
    
        <button onClick={() => {this.props.addVase(vases.id)}}>Select Vase</button>
        <p>{vases.name}</p>
        <p>${vases.price}</p>
        <img 
        src={ vases.image_url } alt='vases' height='400' width='450'/>
      </div>
        )
    })
  }
  <ReactS3Uploader
    signingUrl="/s3/sign"
    signingUrlMethod="GET"
    accept="image/*"
    s3path="/uploads/"
    preprocess={this.onUploadStart}
    onSignedUrl={this.onSignedUrl}
    onProgress={this.onUploadProgress}
    onError={this.onUploadError}
    onFinish={this.onUploadFinish}
    // signingUrlHeaders={{ additional: headers }}
    // signingUrlQueryParams={{ additional: query-params }}
    signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
    contentDisposition="auto"
    scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
    inputRef={cmp => this.uploadInput = cmp}
    autoUpload={true}
    />

    <div>
    <input type='file' 
    onChange={this.uploadFile}/>
    </div>
</div>
    ) 
  }
}

let mapStateToProps = state => {
  return {
    vasesData: state.products.vasesData,
    vaseId: state.arrangements.vaseId,
    flowerIds: state.arrangements.flowerIds
  }
}

export default connect(mapStateToProps, {addVase, getArrangementsFlowers, getVases, createArrangement})(Vases)

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


