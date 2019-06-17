import React from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'
import rootNodes from './rootNodes'

const CreateFolder = (props) => {
  const { nodeNames, handleDoubleClick, handleClick } = props

  // Change i when unique key can be determined
  const folders = nodeNames.map((path, i) => {
    const fileName = last(path.split('/'))
    return (
      <button key={i} type="button" className="vault-main-button" onDoubleClick={(e) => handleDoubleClick(path, e)} onClick={() => handleClick(path)}>
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
  const { nodes, handleDoubleClick, handleClick } = props
  const roots = rootNodes(nodes).map(node => node.name)

  return (
    <React.Fragment>
      <h2 className="vault-main-heading">Folders</h2>
      <div className="vault-main-container1">
        <CreateFolder nodeNames={roots} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
      </div>
    </React.Fragment>
  )
}

const Folders = (props) => {
  const {childFolders} = props
  const { nodes, handleDoubleClick, handleClick } = props
  return (
    <React.Fragment>
    <h2 className="vault-main-heading">Folders</h2>
    <div className="vault-main-container1">
      <CreateFolder nodeNames={childFolders} nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
    </div>
  </React.Fragment>
  )
}

const Main = (props) => {
  const { node, mainNode, nodes, children, handleDoubleClick, handleClick } = props
  const childFolders = children[mainNode.name]
  if (childFolders === undefined) {
    return <RootFolders nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/> 

  } else if (childFolders.length > 0) {
    return <Folders node={node} mainNode={mainNode} nodes={nodes} childFolders={childFolders} handleDoubleClick={handleDoubleClick}  handleClick={handleClick}/>

  } else {
    return <p className="vault-main-message">Empty Folder</p>
  }
}


export default Main