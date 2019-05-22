import React from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'
import rootNodes from './rootNodes'

const CreateFolder = (props) => {

  const onHandleClick = (someID, e) => {
    // e.persist()
    console.log("clicked " + someID)
    return someID
  }

  const { nodes } = props

  // Change i when unique key can be determined
  const folders = nodes.map((node, i) => {
    const fileName = last(node.split('/'))
    return (
      <button key={i} type="button" className="vault-main-button" onClick={(e) => onHandleClick("someID", e)}>
        <FaFolder className="vault-main-icon"/>  
        <span >{fileName}</span>
      </button>
    )
  })
  return (
    <React.Fragment>
      {folders}
    </React.Fragment>
  )
}

const RootFolders = (props) => {
  const { nodes } = props
  const roots = rootNodes(nodes).map(node => node.path)
  console.log("Roots: ", roots)

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
  const { children } = props.node
  console.log("Children: ", children)
  return (
    <React.Fragment>
    <h2 className="vault-main-heading">Folders</h2>
    <div className="vault-main-container1">
      <CreateFolder nodes={children} />
    </div>
  </React.Fragment>
  )
}

const Main = (props) => {
  console.log("NODE in Main: ", props.node)
  console.log("NODES in Main: ", props.nodes)

  if (props.node.children === undefined) {

    return <RootFolders nodes={props.nodes}/> 

  } else if (props.node.children.length > 0) {

    return <Folders node={props.node} nodes={props.nodes} />

  } else {
    return <p className="vault-main-message">Empty Folder</p>
  }
}


export default Main