import { combineReducers } from 'redux'
import counter from './counter'
import patient from './patient'
import logs from './logs'
import nodeMetadata from './metadata'

export default combineReducers({
  counter,
  patient,
  logs,
  nodeMetadata
})
