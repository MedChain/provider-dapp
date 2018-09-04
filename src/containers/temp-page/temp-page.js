import React from 'react'
import './temp-page.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Temp = props => (
  <div className="framed-window">
    <h2>Temp Page</h2>
    {props.pathname}
  </div>
)

const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Temp)
