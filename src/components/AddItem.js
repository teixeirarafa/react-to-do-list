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
            <div className="input-group mb-2 col-lg-8 p-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Adicionar uma tarefa..."
                    ref={(input) => this.input = input}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={this.addItem} type="button">Adicionar</button>
                </div>
            </div>
        )
    }
}

export default connect()(AddItem)