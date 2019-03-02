import React from 'react'

class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.editTodo.id,
            createdAt: props.editTodo.createdAt,
            description: props.editTodo.description,
            duration: props.editTodo.duration,
            complete: props.editTodo.complete,
            tags: [...props.editTodo.tags]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputDate = this.handleInputDate.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleInputDate(event) {
        const date = event.target.value + ' '
        console.log('date', date)
        this.setState({
            duration: date
        })
    }

    addTag = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            tags: prevState.tags.concat(this.input.value)
        }))
    }

    removeTag = (t) => {
        this.setState((prevState) => ({
            tags: prevState.tags.filter((tag) => tag !== t)
        }))
    }

    render(){
        return(
            <div className="col-4" style={{display: this.props.showEditTodo ? '' : 'none'}}>
                <div className="form-group">                
                    <input
                        onChange={this.handleInputChange}
                        name="description"
                        value={this.state.description}
                        type="text"
                        className="form-control" 
                    />                    
                </div>
                <div className="input-group form-group">
                <div className="input-group-prepend">
                    <div className="input-group-text"><small>vence em</small></div>
                </div>             
                    <input
                        onChange={this.handleInputDate}
                        name="duration"
                        value={this.state.duration.substring(0, 10)}
                        type="date"
                        className="form-control" 
                    />                    
                </div>
                <div className="form-group">
                    <ul className="list-group float-left mb-1">
                        {this.state.tags? this.state.tags.map((tag, index) => (
                        <li key={index} className="list-group-item p-2">
                            <span>{ tag }</span>            
                            <button onClick={()=>this.removeTag(tag)} className="btn btn-light btn-sm ml-1">
                            X
                            </button>
                        </li>
                        )): null}
                    </ul>
                    <div className="input-group mb-3 w-75 ">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="adicione uma tag"
                            ref={(input) => this.input = input}
                        />
                        <div className="input-group-append">
                            <button 
                                className="btn btn-outline-primary"
                                onClick={this.addTag} type="button">Adicionar
                            </button>
                        </div>
                    </div>    
                </div>
                <div className="clearfix">
                    <button
                        onClick={() => this.props.updateShowEditTodo(false)}
                        className="btn btn-secondary float-left mr-2 mt-4">Cancelar
                    </button>
                    <button 
                        onClick={() => this.props.handleUpdateTodo(this.state)}
                        className="btn btn-primary float-left mt-4">Confirmar
                    </button> 
                </div>              
            </div>
        )
    }
}
export default EditTodo
