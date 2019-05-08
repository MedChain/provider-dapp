import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Divider,
  Dropdown,
  Icon,
  Label,
  List,
  Menu,
  Segment,
  Sidebar,
  Progress
} from 'semantic-ui-react'
import ControlledPopup from '../../components/ControlledPopup'
import Tree from './left-sidebar-tree'
import ArchiveTree from './archive-tree'



const Window = props => {
  // const state = {
  //   selectedFile: null
  // }

  const onSelect = file => {
    // this.setState({ selectedFile: file })
    console.log("clicked tree node")
    console.log("selected file: ", file)
    
  }

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
          <Tree onSelect={onSelect} />
          <hr></hr>
          
          <ArchiveTree onSelect={onSelect} />
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

const mapStateToProps = (state, ownProps) => ({
  data: {
    clinical: [
      { label: 'Subdirectory1', count: 1 },
      { label: 'Subdirectory2', count: 4 },
      { label: 'Subdirectory3', count: 54 },
      { label: 'Subdirectory4', count: 1 },
      { label: 'Subdirectory5', count: 2 },
      { label: 'Subdirectory6', count: 4 }
    ],
    diagnosis: [
      { label: 'Subdirectory1', count: 1 },
      { label: 'Subdirectory2', count: 24 },
      { label: 'Subdirectory3', count: 4 },
      { label: 'Subdirectory4', count: 1 },
      { label: 'Subdirectory5', count: 2 },
      { label: 'Subdirectory6', count: 4 }
    ],
    medication: [
      { label: 'Subdirectory1', count: 1 },
      { label: 'Subdirectory2', count: 24 },
      { label: 'Subdirectory3', count: 54 },
      { label: 'Subdirectory4', count: 1 },
      { label: 'Subdirectory5', count: 2 },
      { label: 'Subdirectory6', count: 4 }
    ],
    archive: [
      { label: 'Subdirectory1', count: 1 },
      { label: 'Subdirectory2', count: 24 },
      { label: 'Subdirectory3', count: 54 },
      { label: 'Subdirectory4', count: 1 },
      { label: 'Subdirectory5', count: 2 },
      { label: 'Subdirectory6', count: 4 }
    ]
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)

const icon = {
  marginTop: '0.5rem'
}
