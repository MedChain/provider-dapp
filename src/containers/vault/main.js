import React from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder, FaFileAlt } from 'react-icons/fa'
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
  const { nodes, nodeNames, files, handleDoubleClick, handleClick } = props
  // if (nodeNames.length === 0 && (files === undefined || files.length === 0)) return <p className="vault-main-message">Empty Folder</p>
  // if (nodeNames.length === 0 && files.length > 0) return 
  return (
    <React.Fragment>
      <h2 className="vault-main-heading">Folders</h2>
      <div className="vault-main-container1">
        <CreateFolder nodeNames={nodeNames} nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
      </div>
    </React.Fragment>
  )
}

const CreateFile = (props) => {
  return props.files.map(file => {
    return (
      <button key={file.path + "/" + file.name} type="button" className="vault-main-button" >
        <FaFileAlt className="vault-main-icon"/>  
        <span >{file.name}</span>
      </button>
    )
  })
}

const Files = (props) => {
  const { node, files } = props
  // console.log("is files working?", files)
  // console.log("is node here?: ", node)
  if (files.length > 0) {
    return (
      <React.Fragment>
        <h2 className="vault-main-heading">Files</h2>  
        <div className="vault-main-container1">
          <CreateFile files={files} />
        </div>
      </React.Fragment>
    )
  }
  return null
}

const Main = (props) => {
  const { node, mainNode, nodes, children, files, handleDoubleClick, handleClick } = props
  const childFolders = children[mainNode.name]

  if (childFolders === undefined) {
    const roots = rootNodes(nodes).map(node => node.name)
    return (
      <Folders nodeNames={roots} nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/> 
    )

  } else if (childFolders.length > 0 || files.length > 0) {
    return (
      <React.Fragment>
        <Folders nodeNames={childFolders} mainNode={mainNode} nodes={nodes} childFolders={childFolders} files={files} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
        <br />
        <Files node={node} files={files} handleDoubleClick={handleDoubleClick}  handleClick={handleClick} />
      </React.Fragment>
    )

  } else {
    return <p className="vault-main-message">Empty Folder</p>
  }
}


export default Main