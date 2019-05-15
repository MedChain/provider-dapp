import React, { Component } from 'react'
import FileUpload from '../../components/FileUpload'
import DragAndDrop from './drag-and-drop'
import { connect } from 'react-redux'
import './vault.css'
import last from 'lodash/last'
import { FaFile, FaFolder } from 'react-icons/fa'
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
    
    // const folder = (path) => {
    //   console.log("PATH: ", path)
    //   if (typeof path === "string") {
    //     return (
    //       <div className="vault-main-container1">
    //         <div className="vault-main-box">
    //           <FaFolder size={25} className="vault-main-icon"/>
    //           <span>{last(path.split('/'))}</span>
    //         </div>
    //         <div className="vault-main-box">
    //           <FaFolder size={25} className="vault-main-icon"/>
    //           <span>{last(path.split('/'))}</span>
    //         </div>
    //       </div>
    //     )
    //   } 
    //   return (
    //     <div>
    //       <h2 className="vault-main-heading">Folders</h2>
    //       <p>Root folders here</p>
    //     </div>
    //   )
    // }

    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div id="vault">
          <Main node={this.props.node} />
          {/* <h2 className="vault-main-heading">Folders</h2>
            {folder(this.props.path)}
          <h2 className="vault-main-heading">Files</h2> */}

          <FileUpload />
        </div>
      </DragAndDrop>
    )
  }
}

const mapStateToProps = ({ nodeMetadata }) => {
  return ({
    node: nodeMetadata.node,
    path: nodeMetadata.node.path
    })
}

export default connect(
  mapStateToProps
)(Window)