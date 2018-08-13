import React, { Component } from 'react'
import '../css/Dashboard.css'

class Dashboard extends Component {
  constructor () {
    super()
  }


  render() {
    return (
      <div className="product-containers">
          <div className='product'><h1>FRESH</h1>
            <button></button>
          </div>
              <div className='product'><h1>VASE</h1>
              <button></button>
              </div>
                  <div className='product'><h1>DECOR</h1>
                  <button></button>
                  </div>
      </div>
    )
  }
}
export default Dashboard