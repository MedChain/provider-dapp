import React from 'react'
import { Grid } from 'semantic-ui-react'
import { FaFile, FaFolder } from 'react-icons/fa';
import "./vault.css"
import { connect } from 'react-redux'
import last from 'lodash/last'
import PropTypes from 'prop-types';


const FileName = (props) => {
  return <h2 className="app-right-sidebar-header">{last(props.name.split('/'))}</h2>
}

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
      <Grid.Column>{props.node.name}</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Created</Grid.Column>
      <Grid.Column>{props.node.created}</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Description</Grid.Column>
      <Grid.Column>{props.node.description}</Grid.Column>
    </Grid.Row>
  </Grid>
)

const Window = (props) => {
  if (Object.keys(props.node).length === 0) {
    return (
      <div>
        <p className="right-sidebar-folder-icon">
          <FaFolder size={60} color="grey" />
        </p> 
        <p>Select a file or folder to view its details.</p>
      </div>
    )
  }

  return (
    <div>
      <FileName name={props.node.name}/>
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
  return ({
    node: nodeMetadata.node,
    })
}

Window.propTypes = {
  node: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps
)(Window)
