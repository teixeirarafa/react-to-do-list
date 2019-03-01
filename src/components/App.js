import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';
import { handleInitialData } from '../actions/shared'
import Header from './Header';
import Footer from './Footer';
import ConnectedTodos from './Todos';
import ConnectedAddItem from './AddItem';
import Loading from './Loading';

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
    if (this.props.loading === true) {
      return (
        <Loading />
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
