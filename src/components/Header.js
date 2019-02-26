import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes = {
        query: PropTypes.string,
        updateQuery: PropTypes.func//.isRequired
    }

    render(){
        const { query, updateQuery } = this.props

        return(
            <nav className="navbar navbar-light mb-2">
                <div className="row w-100">
                    <div className="mr-4">
                        <h5 className="pt-2">To-Do List</h5>
                    </div>
                    <ul className="nav nav-pills mx-5">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Pendentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Completas</a>
                        </li>			  
                    </ul>
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