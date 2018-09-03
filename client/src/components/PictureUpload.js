import React, { Component } from 'react'
import DropZone from 'react-dropzone'
import axios from 'axios'

class PictureUpload extends Component {
  
onDrop = (files) => {
  let file = files[0]
    const body = {
      filename: file.name, 
      filetype: file.type
    }
      axios.post('/api/aws', body).then((result) => {
        let signedUrl = result.data
          let options = {
            headers: {
              'Content-Type': file.type
            }
          }

    return axios.put(signedUrl, file, options)})
                .then(res => { this.props.setImageUrl(res.config.url)})
                .catch( (err) => {console.log(2, err)} )
}



render () {
  return (
    <DropZone onDrop={ this.onDrop }>
    <div>
        Click to upload picture
    </div>
    </DropZone>
  )
}
}
export default PictureUpload