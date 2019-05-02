import React from 'react'
import {
  Divider,
  Dropdown,
  Grid,
  Icon,
  Image,
  Label,
  List,
  Menu,
  Segment,
  Sidebar
} from 'semantic-ui-react'
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';


// const Window = () => (
//   <div className="app-right-sidebar-header">
//     <h2>File Metadata</h2>
//     <p>(No PII)</p>
//   </div>
// )

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
  return (
    <div className="app-right-sidebar-header">
      <h2>File Metadata</h2>
      <hr />
      <div style={{ textAlign: "center" }}>
        {/* <Image src="" alt="" size="medium" centered /> */}
        <FaFolder size={50}/>      
      </div>
      <hr />
      <MetaDataList metaData={props.metaData}/>
    </div>
  )
}

export default Window
