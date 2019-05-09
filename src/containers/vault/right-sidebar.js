import React from 'react'
import { Grid } from 'semantic-ui-react'
import { FaFile, FaFolder } from 'react-icons/fa';
import "./vault.css"
import { connect } from 'react-redux'


const FileName = (props) => (
  <h2 className="app-right-sidebar-header">{props.type}</h2>
)

const SelectImage = (props) => {
  // Add option of folder icon image or file icon depending on file type
  {/* <Image src="" alt="" size="medium" centered /> */}
  return <FaFolder size={50}/> 
}

const MetaDataList = (props) => (
  <Grid columns={2} className="right-sidebar-grid">
    <Grid.Row>
      <Grid.Column>Type</Grid.Column>
      <Grid.Column>{props.node.type}</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Location</Grid.Column>
      <Grid.Column>{props.node.path}</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Size</Grid.Column>
      <Grid.Column>1 GB</Grid.Column>
    </Grid.Row>
  </Grid>
)

const Window = (props) => {
  console.log("Right Sidebar Window props: ", props)
  console.log("Right Sidebar, node: ", props.node.type)

  //need to add: if nothing is clicked, right sidebar does not appear.  If left sidebar tree or item in main section is clicked, show right sidebar metadata

  return (
    <div>
      <FileName type={props.node.type}/>
      <hr />
      <div className="right-sidebar-image">
        <SelectImage type={props.node.type}/>
      </div>
      <hr />
      <MetaDataList node={props.node}/>
    </div>
  )
}

const mapStateToProps = ({ nodeMetadata }) => {
  console.log("mapstate: ", nodeMetadata)
  return ({
    node: nodeMetadata.node,
    })
}

export default connect(
  mapStateToProps
)(Window)
