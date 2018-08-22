import React, { Component } from 'react';
import './App.css';
import routes from './routes'
// import Nav from './components/Nav'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {getUser} from './redux/reducers/usersReducer'


class App extends Component {
componentDidMount () {
  this.props.getUser()
}

  render() {
    return (
      
        <div className="App">
          {/* <Nav /> */}
          { routes }  
        </div>
      
    );
  }
}

export default withRouter(connect(null, { getUser })(App)) 
