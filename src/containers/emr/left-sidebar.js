import React from 'react'
import { NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown, Icon, Label, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Tree from './Tree'


const trigger = (label, icon, count) => (
  <span className='trigger'>
    <Label color='red' floating pointing='right'>
      {count}
    </Label>
    <Icon name={icon} /> {label}
  </span>
)

const onSelect = file => this.setState({ selectedFile: file })

const menuItem = (category, data) => {
  const href = '/emr/'+category+'/'+data.label.toLowerCase();
  return (
    <Dropdown.Item as="span">
      <Label color='red' floating pointing='right'>
        {data.count}
      </Label>
      <NavLink to={href}>
        {data.label}
      </NavLink>
    </Dropdown.Item>
  )
}

const Window = (props) => (
  <div className="sidebar-content">
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        onHide={this.handleSidebarHide}
        vertical
        visible={true}
        width='thin'
      >
      <Tree onSelect={onSelect} />

        {/* <Dropdown item trigger={trigger('Clinicals', 'hospital', 52)} >
          <Dropdown.Menu>
            {props.data.clinical.map(function(d, idx){
              return menuItem('clinical', d)
             })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item trigger={trigger('Diagnoses', 'stethoscope', 53)} >
          <Dropdown.Menu>
            {props.data.diagnosis.map(function(d, idx){
              return menuItem('diagnosis', d)
             })}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item trigger={trigger('Medications', 'pills', 12)} >
          <Dropdown.Menu>
            {props.data.medication.map(function(d, idx){
               return menuItem('medication', d)
             })}
          </Dropdown.Menu>
        </Dropdown> */}

      </Sidebar>

      <Sidebar.Pusher>
        <Segment attached>
          test
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
)


const mapStateToProps = (state, ownProps) => ({
  data: {
    clinical: [
      {"label":"AllergyIntolerance", "count": 1},
      {"label":"Condition (Problem)", "count": 24},
      {"label":"Procedure", "count": 54},
      {"label":"FamilyMemberHistory", "count": 1},
      {"label":"CarePlan", "count": 2},
      {"label":"Goal", "count": 4},
      {"label":"CareTeam", "count": 4},
      {"label":"ClinicalImpression", "count": 14},
      {"label":"AdverseEvent", "count": 1},
      {"label":"DetectedIssue", "count": 2},
      {"label":"RiskAssessment", "count": 1},
    ],
    diagnosis: [
      {"label":"Observation", "count": 6},
      {"label":"DiagnosticReport", "count": 4},
      {"label":"ProcedureRequest", "count": 2},
      {"label":"ImagingStudy", "count": 5},
      {"label":"ImagingManifest", "count": 6},
      {"label":"Sequence", "count": 2},
      {"label":"Specimen", "count": 6},
      {"label":"BodySite", "count": 7},
    ],
    medication: [
      {"label":"MedicationRequest", "count": 6},
      {"label":"MedicationDispense", "count": 4},
      {"label":"MedicationAdministration", "count": 3},
      {"label":"MedicationStatement", "count": 1},
      {"label":"Medication", "count": 0},
      {"label":"Immunization", "count": 2},
      {"label":"ImmunizationRecommendation", "count": 2},
    ],
  },
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)
