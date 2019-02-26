import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import Header from './Header';
import Footer from './Footer';

import { handleInitialData } from '../actions/shared'
import Todos from './Todos';

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading === true) {
      return <h5>Loading...</h5>
    }

    return (
      <div className="App">
        <div className="container ml-0">
          <Header />
          <Todos />	
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect((state)=>({
  loading: state.loading
})) (App);
