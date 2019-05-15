import React, { Component } from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'


const Folder = (props) => {
  const path = props.node.path
  console.log("PATH: ", props.node.path)

  if (typeof path === "string") {
    return (
      <React.Fragment>
        <h2 className="vault-main-heading">Folders</h2>
        <div className="vault-main-container1">
          <div className="vault-main-box">
            <FaFolder size={25} className="vault-main-icon"/>
            <span>{last(path.split('/'))}</span>
          </div>
          <div className="vault-main-box">
            <FaFolder size={25} className="vault-main-icon"/>
            <span>{last(path.split('/'))}</span>
          </div>
        </div>
      </React.Fragment>
    )
  } 
  return (
    <div>
      <h2 className="vault-main-heading">Folders</h2>
      <p>Root folders here</p>
    </div>
  )
}

const Main = (props) => {

  return (
    <React.Fragment>
      <Folder node={props.node}/>
      <h2 className="vault-main-heading">Files</h2>
    </React.Fragment>
  )
}


export default Main