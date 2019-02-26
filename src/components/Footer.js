import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = props => {
    return(
        <footer className="footer fixed-bottom bg-white">
            <div className="row d-flex px-5">
                <div className="d-flex w-100 justify-content-between">
                <small className="font-weight-bold text-dark pt-2">To-Do List</small>
                <small>
                    <FaFacebook className="text-info fa-lg mr-2" />Facebook
                    <FaTwitterSquare className="text-primary fa-lg mx-2"/>Twitter			
                </small>					  
                </div>
                <div className="d-flex w-100 justify-content-between">
                <small className="mb-1 text-secondary">Organize ainda melhor o seu dia a dia</small>
                <small className="mb-1 pr-2 text-secondary"><code className="text-secondary mx-1 h6">&copy;</code>2019 - To-do List</small>  
                </div>			
            </div>
        </footer>
    )
}

export default Footer