import { combineReducers } from 'redux'
import counter from './counter'
import patient from './patient'
import logs from './logs'

export default combineReducers({
  counter,
  patient,
  logs,
})
