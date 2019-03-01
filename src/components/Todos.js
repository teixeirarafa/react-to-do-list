import React, { Component } from 'react';
import List from './List';
import EditTodo from './EditTodo';
import { connect } from 'react-redux';
import { handleDeleteTodo, handleToggle } from '../actions/todos'
import { PropTypes } from 'prop-types';

class Todos extends Component {
    state = {
        editTodo: {}
    }

    static propTypes = {
        showActiveTodos: PropTypes.bool.isRequired,
        showEditTodo: PropTypes.bool.isRequired,
        updateShowEditTodo: PropTypes.func.isRequired,
    }
    
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo))
    }
    
    toggleItem = (id) => {
        this.props.dispatch(handleToggle(id))
    }

    handleEditTodo = (todo) => {
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
                    handleEditTodo={this.handleEditTodo}
                />
                <EditTodo
                    showEditTodo={this.props.showEditTodo}
                    updateShowEditTodo={this.props.updateShowEditTodo}                    
                    editTodo={this.state.editTodo}
                />
            </div>
        )
    }
}

function mapStateToProps({ todos }, { showActiveTodos }){
    if(showActiveTodos){
        return { todos : todos.filter(todo => !todo.complete) }
    }
    else return { todos : todos.filter(todo => todo.complete) }
}

export default connect(mapStateToProps)(Todos)

/*export default connect((state) => ({
    todos: state.todos
})) (Todos)*/