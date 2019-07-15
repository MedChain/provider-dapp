import React from 'react'
import { Link, Route } from 'react-router-dom'
import './vault.css'
import last from 'lodash/last'
import { FaFolder, FaFileAlt } from 'react-icons/fa'
import rootNodes from './rootNodes'

const CreateFolder = (props) => {
  const { nodeNames, handleClick, history } = props

  const folders = nodeNames.map((name) => {
    const folderName = last(name.split('/'))
    return ( 
      // <button key={name} type="button" className="vault-main-button" onClick={() => handleClick(name, "folder")}>
      //   <FaFolder className="vault-main-icon"/>  
      //   <span >{folderName}</span>
      // </button>
      <React.Fragment>
        <button key={name} type="button" className="vault-main-button" onClick={() => {
          handleClick(name, "folder")
          // history.push(`/vault${name}`)
        }}>
          <FaFolder className="vault-main-icon"/>  
          <span >{folderName}</span>
        </button>
      </React.Fragment>
    )
  })
  return (
    <React.Fragment>
      {folders}
    </React.Fragment>
  )
}

const Folders = (props) => {
  const { nodes, nodeNames, files, handleClick, history } = props
  if (nodeNames.length === 0 && (files === undefined || files.length === 0)) return <p className="vault-main-message">Empty Folder</p>
  if (nodeNames.length === 0) return null
  return (
    <React.Fragment>
      <h2 className="vault-main-heading">Folders</h2>
      <div className="vault-main-container1">
        <CreateFolder nodeNames={nodeNames} nodes={nodes} handleClick={handleClick} history={history}/>
      </div>
    </React.Fragment>
  )
}

const CreateFile = (props) => {
  const { files, handleClick, history } = props
  return files.map(file => {
    return (
      <button key={file.path + "/" + file.name} type="button" className="vault-main-button" onClick={() => {
        handleClick(file.path + "/" + file.name, "file")
        // history.push(`/vault${file.path + "/" + file.name}`)
      }
      }>
        <FaFileAlt className="vault-main-icon"/>  
        <span >{file.name}</span>
      </button>
    )
  })
}

const Files = (props) => {
  const { node, files, handleClick, history } = props
  if (files.length > 0) {
    return (
      <React.Fragment>
        <h2 className="vault-main-heading">Files</h2>  
        <div className="vault-main-container1">
          <CreateFile files={files} handleClick={handleClick} history={history}/>
        </div>
      </React.Fragment>
    )
  }
  return null
}

const Main = (props) => {
  const { node, nodes, children, files } = props

  const childFolders = children[node.name]

  console.log("PROPS in main.js: ", props)

  if (childFolders === undefined) {
    const roots = rootNodes(nodes).map(node => node.name)
    return (
      // <Folders history={history} nodeNames={roots} nodes={nodes} handleClick={handleClick}/> 
      <Folders { ... props } nodeNames={roots} />
    )

  } else if (childFolders.length > 0 || files.length > 0) {
    return (
      <React.Fragment>
        {/* <Folders nodeNames={childFolders} nodes={nodes} files={files} handleClick={handleClick} history={history} /> */}
        <Folders { ... props } nodeNames={childFolders} />
        <br />
        {/* <Files node={node} files={files} handleClick={handleClick} history={history} /> */}
        <Files { ...props} />
      </React.Fragment>
    )

  } else {
    return <p className="vault-main-message">Empty Folder</p>
  }
}


export default Main