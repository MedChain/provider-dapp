import React, { Component } from 'react'
import FileUpload from '../../components/FileUpload'
import DragAndDrop from './drag-and-drop'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { nodeSelect, mainNodeSelect, filesSelect, singleFileSelect } from '../modules/metadata'
import './vault.css'
import Main from './main'


class Window extends Component {
  state = {
    files: []
  }

  handleDrop = files => {
    let fileList = this.state.files
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push(files[i].name)
    }
    this.setState({ files: fileList })
  }

  handleDoubleClick = (fileName) => {
    const { nodes, nodeSelect, mainNodeSelect, filesSelect } = this.props
    const selectedNode = nodes.find(node => node.name === fileName)
    nodeSelect(selectedNode)
    mainNodeSelect(selectedNode)
    filesSelect(fileName)
  }

  handleClick = (fileName, type) => {
    const { nodes, nodeSelect, files, singleFileSelect } = this.props
    if (type === "folder") {
      const selectedFolder = nodes.find(node => node.name === fileName)
      nodeSelect(selectedFolder)
    } else if (type === "file") {
      const selectedFile = files.find(file => (file.path + "/" + file.name) === fileName)
      console.log("FILE!!!: ", selectedFile)
      singleFileSelect(selectedFile)
    }
  }

  render() {
    const { node, mainNode, nodes, children, files } = this.props

    return (
      <React.Fragment>
        <Main node={node} mainNode={mainNode} nodes={nodes} children={children} files={files} handleDoubleClick={this.handleDoubleClick} handleClick={this.handleClick}/>
        <DragAndDrop handleDrop={this.handleDrop}>
          <div id="vault">
            <FileUpload />
          </div>
        </DragAndDrop>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ nodeMetadata }) => {
  return ({
    node: nodeMetadata.node,
    mainNode: nodeMetadata.mainNode,
    nodes: nodeMetadata.nodes,
    children: nodeMetadata.children,
    files: nodeMetadata.files
    })
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { nodeSelect, mainNodeSelect, filesSelect, singleFileSelect }, 
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)