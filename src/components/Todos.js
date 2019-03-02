import React, { Component } from 'react';
import List from './List';
import EditTodo from './EditTodo';
import { connect } from 'react-redux';
import { handleDeleteTodo, handleToggle, handleEditTodo } from '../actions/todos'
import { PropTypes } from 'prop-types';

class Todos extends Component {
    state = {
        editTodo: {}
    }

    static propTypes = {
        showActiveTodos: PropTypes.bool.isRequired,
        showEditTodo: PropTypes.bool.isRequired,
        updateShowEditTodo: PropTypes.func.isRequired,
        query: PropTypes.string.isRequired
    }
    
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }
    
    toggleItem = (id) => {
        this.props.dispatch(handleToggle(id))
    }
    
    handleUpdateTodo = (t) => {
        const todo = {...t}
        console.log(todo)
        this.props.dispatch(handleEditTodo(
            todo,
            ()=>this.props.updateShowEditTodo(false)
        ))
    } 
    
    handleEdit = (todo) => {
        this.setState(() => ({
            editTodo: todo
        }))
    }
    
    render() {        
        return(
            <div className="row">
                <List 
                    toggle={this.toggleItem}
                    items={this.props.todos}
                    remove={this.removeItem}
                    updateShowEditTodo={this.props.updateShowEditTodo}
                    handleEdit={this.handleEdit}
                />
                {this.props.showEditTodo && <EditTodo
                    showEditTodo={this.props.showEditTodo}
                    updateShowEditTodo={this.props.updateShowEditTodo}                    
                    editTodo={this.state.editTodo}
                    handleUpdateTodo={this.handleUpdateTodo}
                />}                
            </div>
        )
    }
}

function mapStateToProps({ todos }, { showActiveTodos, query }){
    if(showActiveTodos){
        if(query === '')
            return { todos : todos.filter(todo => !todo.complete) }
        else
            return { todos : todos.filter(todo => !todo.complete).filter((todo) => (todo.description.toString().includes(query.toString())))}
    }
    else 
        if(query === '')
            return { todos : todos.filter(todo => todo.complete) }
        else
            return { todos : todos.filter(todo => todo.complete).filter((todo) => (todo.description.toString().includes(query.toString())))}  
}

export default connect(mapStateToProps)(Todos)