import * as API from '../service/API'

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const EDIT_TODO = 'EDIT_TODO'

// criadores de açao síncronos
function addTodo (todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

function removeTodo (id) {
    return {
      type: REMOVE_TODO,
      id,
    }
}

function toggleTodo (id) {
    return {
      type: TOGGLE_TODO,
      id,
    }
}

function editTodo (todo) {
  return {
      type: EDIT_TODO,
      todo,
  }
}

// criadores de açao assíncronos
export function handleAddTodo (description, cb) {
    return (dispatch) => {
      return API.saveTodo(description)
        .then((todo) => {
          dispatch(addTodo(todo))
          cb()
        })
        .catch(() => {
          alert('There was an error. Try again.')
        })
    }
}

export function handleDeleteTodo (todo) {
    return (dispatch) => {
      dispatch(removeTodo(todo.id))
      return API.deleteTodo(todo.id)
        .catch(() => {
          dispatch(addTodo(todo))
          alert('An error occurred. Try again.')
        })
    }
}

export function handleToggle (todo) {
    return (dispatch) => {
      dispatch(toggleTodo(todo.id))
      return API.editTodo(todo)
        .catch(() => {
          dispatch(toggleTodo(todo.id))
          alert('An error occurred. Try again.')
        })
    }
}

export function handleEditTodo (todo, callback) {
  return (dispatch) => {
    dispatch(editTodo(todo))
    callback()
    return API.editTodo(todo)
        .catch(() => {          
          alert('An error occurred. Try again.')
        })    
  }
}