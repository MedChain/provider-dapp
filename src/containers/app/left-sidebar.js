import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Window = (props) => (
  <div id="app-left-sidebar" className="frame left-sidebar">
    {props.children}
  </div>
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
