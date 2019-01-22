import React from 'react';
import Dropzone from 'react-dropzone'

class FileUpload extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        uploadStatus: false,
        files: [],
        rejectedFiles: [],
      }
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFiles, rejectedFiles) {
    this.setState({
     files: acceptedFiles,
     rejectedFiles
    });
  }

  rejectedFileDiv() {
    if(!this.state.rejectedFiles.length) return null;
    return (
      <aside>
        <h2>Rejected files</h2>
        <ul>
          {
            this.state.rejectedFiles.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
          }
        </ul>
      </aside>
    )
  }

  render() {
    const zoneStyle = {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: "100%",
    };
    return(
      <div className="dropzone">
        <Dropzone
          disableClick="true"
          onDrop={this.onDrop.bind(this)}
          accept="image/jpeg, image/png"
          style={zoneStyle}
        >
          <aside>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
        </Dropzone>
        {this.rejectedFileDiv()}
      </div>
    )
  }
}
export default FileUpload
