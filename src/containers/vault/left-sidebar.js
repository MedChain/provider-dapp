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
  Sidebar
} from 'semantic-ui-react'
import ControlledPopup from '../../components/ControlledPopup'
import Tree from './left-sidebar-tree'
import ArchiveTree from './archive-tree'

const trigger = (label, icon, array) => {
  const length = array.reduce((a, b) => a + b.count, 0)
  return (
    <span className="trigger">
      <Label color="red" floating pointing="right">
        {length}
      </Label>
      <Icon name={icon} /> {label}
    </span>
  )
}

const menuItem = (category, data) => {
  const href = '/emr/' + category + '/' + data.label.toLowerCase()
  return (
    <Dropdown.Item as="span">
      <Label color="red" floating pointing="right">
        {data.count}
      </Label>
      <NavLink to={href}>{data.label}</NavLink>
    </Dropdown.Item>
  )
}

const Window = props => {
  const state = {
    selectedFile: null
  }

  const onSelect = file => this.setState({ selectedFile: file })

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
          {/* <Dropdown item trigger={trigger('Directory1test', 'hospital', props.data.clinical)} >
          <Dropdown.Menu>
            {props.data.clinical.map(function(d, idx){
              return menuItem('clinical', d)
             })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item trigger={trigger('Directory2', 'stethoscope', props.data.diagnosis)} >
          <Dropdown.Menu>
            {props.data.diagnosis.map(function(d, idx){
              return menuItem('diagnosis', d)
             })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item trigger={trigger('Directory3', 'pills', props.data.medication)} >
          <Dropdown.Menu>
            {props.data.medication.map(function(d, idx){
               return menuItem('medication', d)
             })}
          </Dropdown.Menu>
        </Dropdown> */}
          <ArchiveTree onSelect={onSelect} />
          <hr></hr>
          13.1GB used (1000GB total)
          {/* <Dropdown
            item
            trigger={trigger('Archive', 'archive', props.data.archive)}
            className="archive">
            <Dropdown.Menu>
              {props.data.archive.map(function(d, idx) {
                return menuItem('archive', d)
              })}
            </Dropdown.Menu>
          </Dropdown> */}
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
