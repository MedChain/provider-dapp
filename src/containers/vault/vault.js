import React, { Component } from 'react'
import FileUpload from '../../components/FileUpload'
import DragAndDrop from './drag-and-drop'
import { connect } from 'react-redux'
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

  render() {
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div id="vault">
          <FileUpload />
          <Main node={this.props.node} nodes={this.props.nodes} />
        </div>
      </DragAndDrop>
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

export default connect(
  mapStateToProps
)(Window)