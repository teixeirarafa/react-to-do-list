import React from 'react'

export default function ContainerTags (props) {
    return (
      <ul>         

        {props.editTodo.tags? props.editTodo.tags.map((tag, index) => (
          <li key={index}>
            <span onClick={() => props.toggle && props.toggle(index)}>
                {tag}
            </span>
            <button onClick={() => props.remove(index)}>
              X
            </button>
          </li>
        )): null}
      </ul>
    )
}