import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import logo from '../../assets/medchain.jpeg'

const Window = props => (
  <div className="logo">
    {/* Anything here? */}
    <img src={logo} alt="MedChain logo" style={imgStyle} />
  </div>
)

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)

const imgStyle = {
  width: '2.6rem',
  marginTop: '6px'
}
