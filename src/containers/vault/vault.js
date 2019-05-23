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

  handleDoubleClick = (fileName, e) => {
    const { nodes, nodeSelect } = this.props
    console.log("Handle DoubleClick Name: ", fileName)
    const selectedNode = nodes[fileName]
    return nodeSelect(selectedNode)
  }

  handleClick = () => {
    console.log("HandleClick for single click")
  }

  render() {
    console.log("props vault: ", this.props)

    const { node, nodes } = this.props

    return (
      <React.Fragment>
        <Main node={node} nodes={nodes} handleDoubleClick={this.handleDoubleClick} handleClick={this.handleClick}/>
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