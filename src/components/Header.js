import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        showActiveTodos: PropTypes.bool.isRequired,
        updateShowActiveTodos: PropTypes.func.isRequired,
        query: PropTypes.string,
        updateQuery: PropTypes.func//.isRequired
    }

    render(){
        const { showActiveTodos, updateShowActiveTodos,  query, updateQuery } = this.props
        const btnCursorStyle = { cursor: 'pointer' }
        return(
            <nav className="navbar navbar-light mb-2">
                <div className="row w-100">
                    <div className="mr-4">
                        <h5 className="pt-2">To-Do List</h5>
                    </div>
                    
                    <div className="btn-group btn-group-toggle mx-4" data-toggle="buttons">
                        <label style={btnCursorStyle} className={"btn btn-info " + (showActiveTodos ? 'active' : '' )}>
                            <input
                                type="radio"
                                name="options"
                                id="option1"                                
                                onClick={() => updateShowActiveTodos(true)} /> Pendentes
                        </label>
                        <label style={btnCursorStyle} className={"btn btn-info " + (!showActiveTodos ? 'active' : '' )}>
                            <input
                                type="radio"
                                name="options"
                                id="option2"                                
                                onClick={() => updateShowActiveTodos(false)} /> Completas
                        </label>                      
                    </div>
                    <div className="col-6 ml-2">
                        <div className="input-group w-75">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-light border-0"><FaSearch/ ></span>
                            </div>
                            <input
                                className="form-control bg-light border-0"
                                type="search"
                                placeholder="Search..."
                                value={ query }
                                onChange={(event) => updateQuery(event.target.value)}
                            />
                        </div>
                    </div>			
                </div>
            </nav>
        )
    }
}

export default Header