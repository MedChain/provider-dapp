import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Window = (props) => (
  <div>
    Anything here?
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
