import * as API from '../service/API'

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

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

export function handleToggle (id) {
    return (dispatch) => {
      dispatch(toggleTodo(id))
      return API.saveTodoToggle(id)
        .catch(() => {
          dispatch(toggleTodo(id))
          alert('An error occurred. Try again.')
        })
    }
}