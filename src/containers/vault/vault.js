import React, { Component } from 'react'
import FileUpload from '../../components/FileUpload'
import DragAndDrop from './drag-and-drop'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { nodeSelect, mainNodeSelect } from '../modules/metadata'
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

  handleDoubleClick = (fileName, e) => {
    const { nodes, nodeSelect, mainNodeSelect } = this.props
    const selectedNode = nodes[fileName]
    nodeSelect(selectedNode)
    mainNodeSelect(selectedNode)
  }

  handleClick = (fileName) => {
    const { nodes, nodeSelect } = this.props
    const selectedNode = nodes[fileName]
    nodeSelect(selectedNode)
  }

  render() {
    const { node, mainNode, nodes } = this.props

    return (
      <React.Fragment>
        <Main node={node} mainNode={mainNode} nodes={nodes} handleDoubleClick={this.handleDoubleClick} handleClick={this.handleClick}/>
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
    // path: nodeMetadata.node.path,
    mainNode: nodeMetadata.mainNode,
    // mainPath: nodeMetadata.mainNode.path,
    nodes: nodeMetadata.nodes,
    })
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { nodeSelect, mainNodeSelect }, 
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)