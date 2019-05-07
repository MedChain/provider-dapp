import React from 'react'
import { Grid } from 'semantic-ui-react'
import { FaFile, FaFolder } from 'react-icons/fa';
import "./vault.css"

// const Window = () => (
//   <div className="app-right-sidebar-header">
//     <h2>File Metadata</h2>
//     <p>(No PII)</p>
//   </div>
// )

const FileName = (name) => (
  // Replace hardcoded name with file name from props
  <h2 className="app-right-sidebar-header">File Metadata</h2>
)

const SelectImage = (fileType) => {
  // Add option of folder icon image or file icon depending on file type
  {/* <Image src="" alt="" size="medium" centered /> */}
  return <FaFolder size={50}/> 
}

const MetaDataList = (metaData) => (
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column>Type</Grid.Column>
      <Grid.Column>xyz</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Location</Grid.Column>
      <Grid.Column>xyzabcde </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Created</Grid.Column>
      <Grid.Column>xyz</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Size</Grid.Column>
      <Grid.Column>xyz</Grid.Column>
    </Grid.Row>
  </Grid>
)

const Window = (props) => {
  console.log("Right Sidebar: ", props)

  //need to add: if nothing is clicked, right sidebar does not appear.  If left sidebar tree or item in main section is clicked, show right sidebar metadata

  return (
    <div>
      <FileName name={props.name}/>
      <hr />
      <div className="right-sidebar-image">
        <SelectImage fileType={props.fileType}/>
      </div>
      <hr />
      <MetaDataList metaData={props.metaData}/>
    </div>
  )
}

export default Window
