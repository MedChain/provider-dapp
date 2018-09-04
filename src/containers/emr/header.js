import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PatientSelector from '../patient-selector/patient-selector'

const Window = (props) => (
  <PatientSelector />
)


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)
