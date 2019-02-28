import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import ConnectedTodos from './Todos';
import { handleInitialData } from '../actions/shared'
import ConnectedAddItem from './AddItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showActiveTodos: true,
      showEditTodo: false
    }
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  updateShowActiveTodos = (show) => {
    this.setState(() => ({
      showActiveTodos: show
    }))
  }

  updateShowEditTodo = (show) => {
    this.setState(() => ({
      showEditTodo: show
    }))
  }
  
  render() {
    const divStyle={width:'3rem', height: '3rem'}

    if (this.props.loading === true) {
      return (
        <div className="container ml-0 mt-5">
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-grow text-info mt-5" style={divStyle} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="container ml-0">
          <Header
            showActiveTodos={ this.state.showActiveTodos }
            updateShowActiveTodos={ this.updateShowActiveTodos }
          />

          <ConnectedAddItem />

          <ConnectedTodos 
            showActiveTodos={this.state.showActiveTodos}
            showEditTodo={this.state.showEditTodo}
            updateShowEditTodo={this.updateShowEditTodo}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect((state)=>({
  loading: state.loading
})) (App);
