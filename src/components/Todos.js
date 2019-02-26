import React, { Component } from 'react';
import List from './List';
import EditTodo from './EditTodo';
import { connect } from 'react-redux';
import { handleAddTodo, handleDeleteTodo, handleToggle } from '../actions/todos'

class Todos extends Component {
    addItem = (e) => {
        e.preventDefault()
    
        this.props.dispatch(handleAddTodo(
          this.input.value,
          () => this.input.value = ''
        ))
    }
    
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }
    
    toggleItem = (id) => {
        this.props.dispatch(handleToggle(id))
    }

    render() {
        return(
            <div className="row">
                <List 
                    toggle={this.toggleItem}
                    items={this.props.todos}
                    remove={this.removeItem}
                />
                <EditTodo />
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
})) (Todos)