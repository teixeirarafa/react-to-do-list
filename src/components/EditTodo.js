import React from 'react'
import ContainerTags from './ContainerTags';

class EditTodo extends React.Component {
    render(){
        const duration = new Date(this.props.editTodo.duration);
        return(
            <div className="col-4" style={{display: this.props.showEditTodo ? '' : 'none'}}>
                <div className="form-group">                
                    <input
                        onChange={()=>{}}
                        value={this.props.editTodo.description}
                        type="text"
                        className="form-control" 
                    />                    
                </div>
                <div className="input-group form-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">vence em</div>
                </div>             
                    <input
                        value={duration.toLocaleDateString()}
                        type="text"
                        className="form-control" 
                    />                    
                </div>
                <div className="form-group">
                    <ContainerTags 
                        editTodo={this.props.editTodo}/>
                </div> 
                <button
                    onClick={()=> this.props.updateShowEditTodo(false)}
                    className="btn btn-secondary float-left mr-2 mt-4">Cancelar
                </button>
                <button 
                    className="btn btn-primary float-left mt-4">Editar
                </button>                
            </div>
        )
    }
}
export default EditTodo
