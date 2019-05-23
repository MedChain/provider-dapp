import React, { Component } from 'react'
import FileUpload from '../../components/FileUpload'
import DragAndDrop from './drag-and-drop'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { nodeSelect } from '../modules/metadata'
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

  handleClick = (fileName, e) => {
    e.preventDefault()
    const { nodes, nodeSelect } = this.props
    console.log("Handle Click Name: ", fileName)
    const selectedNode = nodes[fileName]
    return nodeSelect(selectedNode)
  }

  render() {
    console.log("props vault: ", this.props)

    const { node, nodes, handleClick } = this.props

    return (
      <React.Fragment>
        <Main node={node} nodes={nodes} handleClick={this.handleClick} />
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
    path: nodeMetadata.node.path,
    nodes: nodeMetadata.nodes,
    })
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { nodeSelect }, 
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)