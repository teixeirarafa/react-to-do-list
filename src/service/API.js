const api = "http://5c72f5b1ba65bb0014ebf053.mockapi.io/api/v1"

export const fetchTodos = () =>
  fetch(`${api}/todos`)
    .then(res => res.json())
    .then(data => data)
    .catch(() => alert('There was an error. Try again.'))

export const deleteTodo = (id) =>
  fetch(`${api}/todos/${id}`, {
    method: 'DELETE',
  }).then(res => res.json())

export const saveTodo = (description) => 
  fetch(`${api}/todos`, {
    method: 'POST',
    body: JSON.stringify({ description })
  }).then(res => res.json())

export const editTodo  = (todo) =>
  fetch(`${api}/todos/${todo.id}`, {
    method: 'PUT',
    body: JSON.stringify({ todo })
  }).then(res => res.json())