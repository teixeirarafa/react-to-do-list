const api = "http://5c72f5b1ba65bb0014ebf053.mockapi.io/api/v1"

export const fetchTodos = () =>
  fetch(`${api}/todos`)
    .then(res => res.json())
    .then(data => data)
    .catch(() => alert('There was an error. Try again.'))

export const deleteTodo = () => {}

export const saveTodo = () => {}

export const saveTodoToggle  = () => {}