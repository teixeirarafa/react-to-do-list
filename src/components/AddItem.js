import React, { Component } from 'react'
import { handleAddTodo, } from '../actions/todos'
import { connect } from 'react-redux';


class AddItem extends Component {
    addItem = (e) => {
        e.preventDefault()
    
        this.props.dispatch(handleAddTodo(
          this.input.value,
          () => this.input.value = ''
        ))
    }

    render() {
        return(
            <div className="input-group mb-3 w-75">
                <input
                    type="text"
                    className="form-control px-4"
                    placeholder="Adicionar uma tarefa..."
                    ref={(input) => this.input = input}
                />
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={this.addItem} type="button">Adicionar</button>
                </div>
            </div>
        )
    }
}

export default connect()(AddItem)