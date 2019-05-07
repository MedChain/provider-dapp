import {
  apiGetLogs,
} from './logs'

export const LIST_REQUESTED = 'patient/LIST_REQUESTED'
export const POST_SENT = 'patient/POST_SENT'
export const POST_SUCCESS = 'patient/POST_SUCCESS'
export const POST_FAILURE = 'patient/POST_FAILURE'
export const STORE_PATIENT = 'patient/STORE_PATIENT'
export const STORE_LIST = 'patient/STORE_LIST'
export const SWITCH_PATIENT = 'patient/SWITCH_PATIENT'

const apiUrl = 'http://1.peers.medchain.global:8080'
// const apiUrl = 'https://84edem5d0i.execute-api.us-east-1.amazonaws.com/dev'
// const apiUrl = 'http://localhost:8080';

const initialState = {
  patients: [],
  patient: {},
  isFetching: false,
  isPosting: false,
  currentPatient: 0
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

// reducers
export default (state = initialState, action) => {
  console.log('action.type=', action.type)
  switch (action.type) {
    case LIST_REQUESTED:
      return {
        ...state,
        isFetching: true
      }

    case POST_SENT:
      return {
        ...state,
        isPosting: true,
        postError: null
      }

    case POST_SUCCESS:
      return {
        ...state,
        isPosting: false,
        postError: null
      }

    case POST_FAILURE:
      return {
        ...state,
        isPosting: false,
        postError: 'Error'
      }

    case STORE_LIST:
      return {
        ...state,
        patients: action.patientList,
        isFetching: false
      }

    case STORE_PATIENT:
      return {
        ...state,
        patient: action.data,
        isFetching: false
      }

    case SWITCH_PATIENT:
      return {
        ...state,
        currentPatient: action.patientId
      }

    default:
      return state
  }
}

// actions
export const apiGetPatientList = () => {
  return dispatch => {
    dispatch({
      type: LIST_REQUESTED
    })

    fetch(apiUrl + '/api/patient/all')
      .then(response => {
        return response.json()
      })
      .then(data => {
        // save data to patient state
        let patientList = []
        if (data) {
          patientList = data.reduce((result, next) => {
            result[next.id] = next
            return result
          }, {})
        }
        console.log('returning patientList=', patientList)
        dispatch({
          type: STORE_LIST,
          patientList
        })
      })
    dispatch(apiGetLogs())
  }
}

export const switchPatient = patientId => {
  return dispatch => {
    dispatch({
      type: SWITCH_PATIENT,
      patientId
    })

    dispatch({
      type: LIST_REQUESTED
    })

    fetch(apiUrl + '/api/patient/' + patientId)
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data) {
          console.log('returning patient=', data)
          dispatch({
            type: STORE_PATIENT,
            data
          })
        }
      })
    dispatch(apiGetLogs())
  }
}

export const apiPostPatient = (patientId, patientData) => {
  return dispatch => {
    console.log('values=', patientData);
    console.log('json=', JSON.stringify(patientData));

    dispatch({
      type: POST_SENT
    })

    fetch(apiUrl + '/api/patient/' + patientId, {
      method: 'POST',
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
          // "Content-Type": "application/json; charset=utf-8",
          "Content-Type": "application/x-www-form-urlencoded",
      },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(patientData), // body data type must match "Content-Type" header
    })
      .then(handleErrors)
      .then(response => {
        dispatch({
          type: POST_SUCCESS
        })
        dispatch({
          type: STORE_PATIENT,
          data: patientData,
        })
        dispatch(apiGetLogs())
      })
      .catch(error => {
        dispatch({
          type: POST_FAILURE,
          error,
        })
      })
  }
}
