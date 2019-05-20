import React from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'
import rootNodes from './rootNodes'


const CreateFolder = (props) => {
  const { nodes } = props
  
  // Change i when unique key can be determined

  const folder = nodes.map((node, i) => {
    return (
      <div key={i} className="vault-main-box">
        <FaFolder className="vault-main-icon"/>
        <span>{last(node.path.split('/'))}</span>
      </div>
    )
  })
  return (
    <React.Fragment>
      {folder}
    </React.Fragment>
  )
}

const RootFolders = (props) => {
  const { nodes } = props
  const roots = rootNodes(nodes)

  console.log("ROOTS in MAIN: ", roots)

  return (
    <React.Fragment>
      <h2 className="vault-main-heading">Folders</h2>
      <div className="vault-main-container1">
        <CreateFolder nodes={roots} />
      </div>
    </React.Fragment>
  )
}

const Folders = (props) => {
  const { path, children } = props.node

  if (typeof path === "string") {

    if (children.length > 0) {
      const child = children.map((child, i) => {
        return (
          <div className="vault-main-box">
            <FaFolder className="vault-main-icon"/>
            <span>{last(child.split('/'))}</span>
          </div>
        )
      })
      return (
        <React.Fragment>
          <h2 className="vault-main-heading">Folders</h2>
          <div className="vault-main-container1">
            {child}
            {/* <div className="vault-main-box">
              <FaFolder className="vault-main-icon"/>
              <span>{last(path.split('/'))}</span>
            </div>
            <div className="vault-main-box">
              <FaFolder className="vault-main-icon"/>
              <span>{last(path.split('/'))}</span>
            </div> */}
          </div>
        </React.Fragment>       
      )
    }
  } 
}

const Main = (props) => {

  if (props.nodes.path !== "string") {

    return <RootFolders nodes={props.nodes} /> 

  } else {

    return <Folders node={props.node} nodes={props.nodes} />

  }
}


export default Main