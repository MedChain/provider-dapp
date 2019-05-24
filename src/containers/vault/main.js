import React from 'react'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'
import rootNodes from './rootNodes'

const CreateFolder = (props) => {
  const { nodeNames, nodes, handleDoubleClick, handleClick } = props

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
  const roots = rootNodes(nodes).map(node => node.path)

  return (
    <React.Fragment>
      <h2 className="vault-main-heading">Folders</h2>
      <div className="vault-main-container1">
        <CreateFolder nodeNames={roots} nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
      </div>
    </React.Fragment>
  )
}

const Folders = (props) => {
  const { children } = props.mainNode
  // const { children } = props.node
  const { nodes, handleDoubleClick, handleClick } = props
  console.log("Children: ", children)
  console.log("mainNode children: ", props.mainNode)
  return (
    <React.Fragment>
    <h2 className="vault-main-heading">Folders</h2>
    <div className="vault-main-container1">
      <CreateFolder nodeNames={children} nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/>
    </div>
  </React.Fragment>
  )
}

const Main = (props) => {
  console.log("NODE in Main: ", props.node)
  console.log("NODES in Main: ", props.nodes)
  console.log("Main Node in main: ", props.mainNode)
  console.log("Children in Main: ", props.mainNode.children)
  console.log("main props: ", props)

  const { node, mainNode, nodes, handleDoubleClick, handleClick } = props
  // const { children } = props.node
  const { children } = props.mainNode

  if (children === undefined) {

    return <RootFolders nodes={nodes} handleDoubleClick={handleDoubleClick} handleClick={handleClick}/> 

  } else if (children.length > 0) {

    return <Folders node={node} mainNode={mainNode} nodes={nodes} handleDoubleClick={handleDoubleClick}  handleClick={handleClick}/>

  } else {
    return <p className="vault-main-message">Empty Folder</p>
  }
}


export default Main