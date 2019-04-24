import React, { Component } from 'react'
import FileUpload from '../../components/FileUpload'
import DragAndDrop from './drag-and-drop'
import './vault.css'

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
          <h2>List of files</h2>
          <FileUpload />
        </div>
      </DragAndDrop>
    )
  }
}

export default Window
