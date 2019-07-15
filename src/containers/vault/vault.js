import React, { Component } from 'react'
import FileUpload from '../../components/FileUpload'
import DragAndDrop from './drag-and-drop'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { nodeSelect, filesSelect, singleFileSelect } from '../modules/metadata'
import './vault.css'
import Main from './main'
import { Link, Route, withRouter } from 'react-router-dom'


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


  handleClick = (fileName, type) => {
    const { nodes, nodeSelect, files, filesSelect, singleFileSelect } = this.props
    if (type === "folder") {
      const selectedFolder = nodes.find(node => node.name === fileName)
      nodeSelect(selectedFolder)
      filesSelect(fileName)
    } else if (type === "file") {
      const selectedFile = files.find(file => (file.path + "/" + file.name) === fileName)
      singleFileSelect(selectedFile)
    }
  }

  render() {
    // const { node, nodes, children, files } = this.props
    console.log("PROPS in Vault.js ", this.props)

    return (
      <React.Fragment>
        <Main {...this.props} handleClick={this.handleClick} />
        <DragAndDrop handleDrop={this.handleDrop}>
          <div id="vault">
            <FileUpload />
          </div>
        </DragAndDrop>
        {/* <Route path="/vault/:path" render={() => {
          console.log("match", history)
          return <Main />
          }} />  */}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ nodeMetadata }) => {
  return ({
    node: nodeMetadata.node,
    nodes: nodeMetadata.nodes,
    children: nodeMetadata.children,
    files: nodeMetadata.files
    })
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { nodeSelect, filesSelect, singleFileSelect }, 
    dispatch
  )
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Window))