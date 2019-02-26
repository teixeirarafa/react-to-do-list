import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import Tag from './Tag';

const List = props => {
    return(
        <ul className="list-group col pl-2">
            {props.items.map((item)=> (
                <li 
                    key={item.id} 
                    className="list-group-item list-group-item-action flex-column align-items-start py-2"
                    style={{background: '#f6f6f6'}} >
                    <div className="d-flex w-100 justify-content-between">
                        <div>
                            <input type="checkbox" className="mr-1" />
                            <label className="mb-0" style={{textDecoration: 'line-through'}} >
                                {item.description}
                            </label>				
                        </div>
                        <div>
                            <button className="btn btn-success btn-sm"><FaCheck /></button>
                            <button className="btn btn-primary btn-sm mx-1"><FaPencilAlt /></button>
                            <button
                                onClick={() => props.remove(item)} 
                                className="btn btn-danger btn-sm">
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>			
                    <p className="mb-1 ml-4 float-left">
                        { item.tags ?
                            item.tags.map((tag, index) => (
                                <Tag key={index} tag={tag} />                                
                            )) : null
                        }                        
                    </p>
                </li>
            ))}            
        </ul>
    )
}
export default List