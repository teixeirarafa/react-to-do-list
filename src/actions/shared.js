import * as API from '../service/API'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (todos) {
    return {
      type: RECEIVE_DATA,
      todos      
    }
}

export function handleInitialData () {
    return dispatch => {
      return API.fetchTodos()        
      .then((todos) => {
        dispatch(receiveData(todos))
      })
    }
}