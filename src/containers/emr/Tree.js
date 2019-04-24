import React, { Component } from 'react'
import values from 'lodash/values'
import PropTypes from 'prop-types'
import TreeNode from './TreeNode'

const data = {
    id: 1,
  '/Clinicals': {
    userId: 1,
    path: '/Clinicals',
    type: 'folder',
    isRoot: true,
    children: ['/Clinicals/AllergyIntolerance', '/Clinicals/Condition(Problem)', '/Clinicals/Procedure', '/Clinicals/FamilyMemberHistory', '/Clinicals/CarePlan', '/Clinicals/Goal', '/Clinicals/CareTeam', '/Clinicals/ClinicalImpression', '/Clinicals/AdverseEvent', '/Clinicals/DetectedIssuet', '/Clinicals/RiskAssessment']
  },
  '/Clinicals/AllergyIntolerance': {
    path: '/Clinicals/AllergyIntolerance',
    type: 'folder',
    children: []
  },
  '/Clinicals/Condition(Problem)': {
    path: '/Clinicals/Condition(Problem)',
    type: 'folder',
    children: []
  },
  '/Clinicals/Procedure': {
    path: '/Clinicals/Procedure',
    type: 'folder',
    children: []
  },
  '/Clinicals/FamilyMemberHistory': {
    path: '/Clinicals/FamilyMemberHistory',
    type: 'folder',
    children: []
  },
  '/Clinicals/CarePlan': {
    path: '/Clinicals/CarePlan',
    type: 'folder',
    children: []
  },
  '/Clinicals/Goal': {
    path: '/Clinicals/Goal',
    type: 'folder',
    children: []
  },
  '/Clinicals/CareTeam': {
    path: '/Clinicals/CareTeam',
    type: 'folder',
    children: []
  },
  '/Clinicals/ClinicalImpression': {
    path: '/Clinicals/ClinicalImpression',
    type: 'folder',
    children: []
  },
  '/Clinicals/AdverseEvent': {
    path: '/Clinicals/AdverseEvent',
    type: 'folder',
    children: []
  },
  '/Clinicals/DetectedIssuet': {
    path: '/Clinicals/DetectedIssuet',
    type: 'folder',
    children: []
  },
  '/Clinicals/RiskAssessment': {
    path: '/Clinicals/RiskAssessment',
    type: 'folder',
    children: []
  },

  '/Diagnosis': {
    userId: 2,
    path: '/Diagnosis',
    type: 'folder',
    isRoot: true,
    children: ['/Diagnosis/Observation', '/Diagnosis/DiagnosticReport', '/Diagnosis/ProcedureRequest', '/Diagnosis/ImagingStudy', '/Diagnosis/ImagingManifest', '/Diagnosis/Sequence', '/Diagnosis/Specimen', '/Diagnosis/BodySite']
  },
  '/Diagnosis/Observation': {
    path: '/Diagnosis/Observation',
    type: 'folder',
    children: []
  },
  '/Diagnosis/DiagnosticReport': {
    path: '/Diagnosis/DiagnosticReport',
    type: 'folder',
    children: []
  },
  '/Diagnosis/ProcedureRequest': {
    path: '/Diagnosis/ProcedureRequest',
    type: 'folder',
    children: []
  },
  '/Diagnosis/ImagingStudy': {
    path: '/Diagnosis/ImagingStudy',
    type: 'folder',
    children: []
  },
  '/Diagnosis/ImagingManifest': {
    path: '/Diagnosis/ImagingManifest',
    type: 'folder',
    children: []
  },
  '/Diagnosis/Sequence': {
    path: '/Diagnosis/Sequence',
    type: 'folder',
    children: []
  },
  '/Diagnosis/Specimen': {
    path: '/Diagnosis/Specimen',
    type: 'folder',
    children: []
  },
  '/Diagnosis/BodySite': {
    path: '/Diagnosis/BodySite',
    type: 'folder',
    children: []
  },
  '/Medications': {
    userId: 2,
    path: '/Medications',
    type: 'folder',
    isRoot: true,
    children: ['/Medications/MedicationRequest', '/Medications/MedicationDispense', '/Medications/MedicationAdministration', '/Medications/MedicationStatement', '/Medications/Medication', '/Medications/Immunization', '/Medications/ImmunizationRecords']
  },
  '/Medications/MedicationRequest': {
    path: '/Medications/MedicationRequest',
    type: 'folder',
    children: []
  },
  '/Medications/MedicationDispense': {
    path: '/Medications/MedicationDispense',
    type: 'folder',
    children: []
  },
  '/Medications/MedicationAdministration': {
    path: '/Medications/MedicationAdministration',
    type: 'folder',
    children: []
  },
  '/Medications/MedicationStatement': {
    path: '/Medications/MedicationStatement',
    type: 'folder',
    children: []
  },
  '/Medications/Medication': {
    path: '/Medications/Medication',
    type: 'folder',
    children: []
  },
  '/Medications/Immunization': {
    path: '/Medications/Immunization',
    type: 'folder',
    children: []
  },
  '/Medications/ImmunizationRecords': {
    path: '/Medications/ImmunizationRecords',
    type: 'folder',
    children: []
  },
}

export default class Tree extends Component {
  state = {
    nodes: data
  }

  componentDidMount = () => {
    this.getRootNodes()
  }

  getRootNodes = () => {
    const { nodes } = this.state
    return values(nodes).filter(node => node.isRoot === true)
  }

  getChildNodes = node => {
    const { nodes } = this.state
    if (!node.children) return []
    return node.children.map(path => nodes[path])
  }

  onToggle = node => {
    const { nodes } = this.state
    nodes[node.path].isOpen = !node.isOpen
    this.setState({ nodes })
  }

  onNodeSelect = node => {
    const { onSelect } = this.props
    onSelect(node)
  }

  render() {
    const rootNodes = this.getRootNodes()
    return (
      <div>
        {rootNodes.map(node => (
          <TreeNode
            node={node}
            getChildNodes={this.getChildNodes}
            onToggle={this.onToggle}
            onNodeSelect={this.onNodeSelect}
          />
        ))}
      </div>
    )
  }
}

Tree.propTypes = {
  onSelect: PropTypes.func.isRequired
}
