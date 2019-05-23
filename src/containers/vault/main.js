import React from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'
import rootNodes from './rootNodes'

const CreateFolder = (props) => {
  const { nodeNames, nodes, handleClick } = props
  
  // const handleClick = (fileName) => {
  //   console.log("File Data: ", nodes[fileName])
  //   return nodes[fileName]
  // }

  // Change i when unique key can be determined
  const folders = nodeNames.map((path, i) => {
    const fileName = last(path.split('/'))
    return (
      <button key={i} type="button" className="vault-main-button" onClick={(e) => handleClick(path, e)}>
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
  const { nodes, handleClick } = props
  const roots = rootNodes(nodes).map(node => node.path)

  return (
    <React.Fragment>
      <h2 className="vault-main-heading">Folders</h2>
      <div className="vault-main-container1">
        <CreateFolder nodeNames={roots} nodes={nodes} handleClick={handleClick}/>
      </div>
    </React.Fragment>
  )
}

const Folders = (props) => {
  const { children } = props.node
  const { nodes, handleClick } = props
  console.log("Children: ", children)
  return (
    <React.Fragment>
    <h2 className="vault-main-heading">Folders</h2>
    <div className="vault-main-container1">
      <CreateFolder nodeNames={children} nodes={nodes} handleClick={handleClick}/>
    </div>
  </React.Fragment>
  )
}

const Main = (props) => {
  console.log("NODE in Main: ", props.node)
  console.log("NODES in Main: ", props.nodes)
  console.log("main props: ", props)

  const { node, nodes, handleClick } = props
  const { children } = props.node

  if (children === undefined) {

    return <RootFolders nodes={nodes} handleClick={handleClick}/> 

  } else if (children.length > 0) {

    return <Folders node={node} nodes={nodes} handleClick={handleClick}/>

  } else {
    return <p className="vault-main-message">Empty Folder</p>
  }
}


export default Main