import React from 'react'

const Window = (props) => (
  <div id="app-footer" className="frame footer" style={footer}>
    {props.children}
  </div>
)

export default Window

const footer = {
  right: "0",
  height: "56px"
}

