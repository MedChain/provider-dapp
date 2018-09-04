export const STORE_LOGS = 'logs/STORE_LOGS'

// const apiUrl = 'http://1.peers.medchain.global:8080'
const apiUrl = 'https://84edem5d0i.execute-api.us-east-1.amazonaws.com/dev'
// const apiUrl = 'http://localhost:8080';

const initialState = {
  logs: [],
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_LOGS:
      return {
        ...state,
        logs: action.logs,
      }

    default:
      return state
  }
}

// actions
export const apiGetLogs = () => {
  return dispatch => {
    fetch(apiUrl + '/api/logs')
      .then(handleErrors)
      .then(response => {
        return response.json()
      })
      .then(logs => {
        console.log('returning logs=', logs)
        dispatch({
          type: STORE_LOGS,
          logs
        })
      })
  }
}
