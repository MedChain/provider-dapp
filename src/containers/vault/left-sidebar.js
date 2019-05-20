import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Divider,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import ControlledPopup from '../../components/ControlledPopup'
import Tree from './left-sidebar-tree'
import ArchiveTree from './archive-tree'
import { nodeSelect, allNodesSelect } from '../modules/metadata'
import rootNodes from './rootNodes'


const Window = props => {
  
  console.log("left-sidebar PROPS: ", props)

  const onSelect = node => {
    return props.nodeSelect(node)
  }

  const roots = rootNodes(props.nodes)

  return (
    <div className="sidebar-content">
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          onHide={this.handleSidebarHide}
          vertical
          visible={true}
          width="thin">
          <ControlledPopup
            trigger={<Icon color="teal" size="big" name="add circle" style={icon} />}>
            <List link>
              <List.Item as="a">Folder</List.Item>
              <List.Item as="a">Upload file</List.Item>
              <Divider />
              <List.Item as="a">Backup</List.Item>
              <List.Item as="a">EMR: Observation</List.Item>
            </List>
          </ControlledPopup>
          <Tree onSelect={onSelect} nodes={props.nodes} rootNodes={roots}/>
          <hr></hr>
          
          <ArchiveTree onSelect={onSelect}  nodes={props.nodes} rootNodes={roots}/>
          <hr></hr>

          <div class="label">Storage</div>
          <div class="ui tiny progress blue">
            <div class="bar" ></div>
          </div>
          <div className="storage">130.1 GB used (1000 GB total)</div>
   
        </Sidebar>

        <Sidebar.Pusher>
          <Segment attached>test</Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

const mapStateToProps = ({ nodeMetadata }, ownProps) => {
  return {
    nodes: nodeMetadata.nodes,
  }
}

const mapDispatchToProps = dispatch => {
  console.log("dispatch: ", dispatch)
  return bindActionCreators(
    { nodeSelect, allNodesSelect }, 
    dispatch
    )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)

const icon = {
  marginTop: '0.5rem'
}
