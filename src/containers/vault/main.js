import React from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'
import rootNodes from './rootNodes'

const CreateFolder = (props) => {
  const { nodeNames, handleDoubleClick, handleClick } = props

  // Change i when unique key can be determined
  const folders = nodeNames.map((path) => {
    const fileName = last(path.split('/'))
    return (
      <button key={path} type="button" className="vault-main-button" onDoubleClick={(e) => handleDoubleClick(path, e)} onClick={() => handleClick(path)}>
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

const Folders = (props) => {
  const { nodes, nodeNames, handleDoubleClick, handleClick } = props
  console.log("nodeNames: ", nodeNames)
  if (nodeNames.length === 0) return <p className="vault-main-message">Empty Folder</p>
  return (
  <div className="vault-main-container1">
    <CreateFolder nodeNames={nodeNames} nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
  </div>
  )
}

const Files = (props) => {
  const { node } = props

  return (
    <React.Fragment>

    </React.Fragment>
  )
}

const Main = (props) => {
  const { node, mainNode, nodes, children, files, handleDoubleClick, handleClick } = props
  const childFolders = children[mainNode.name]

  if (childFolders === undefined) {
    const roots = rootNodes(nodes).map(node => node.name)
    return (
      <React.Fragment>
        <h2 className="vault-main-heading">Folders</h2>
        <Folders nodeNames={roots} nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/> 
      </React.Fragment>
    )

  } else if (childFolders.length > 0 || files.length > 0) {
    return (
      <React.Fragment>
        <h2 className="vault-main-heading">Folders</h2>
        <Folders nodeNames={childFolders} mainNode={mainNode} nodes={nodes} childFolders={childFolders} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
        <br />
        <h2 className="vault-main-heading">Files</h2>
        <Files node={node} files={files} handleDoubleClick={handleDoubleClick}  handleClick={handleClick} />
      </React.Fragment>
    )

  } else {
    return <p className="vault-main-message">Empty Folder</p>
  }
}


export default Main