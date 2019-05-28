import React from 'react'
import CreateRecord from '../create-record/create-record.js'


import './emr.css'

const Window = () => (
  <div id="emr">
    <CreateRecord />
  </div>
    /* EMR content:
    <ul>
      <li>Clinical</li>
      <ol>
        <li>AllergyIntolerance</li>
        <li>Condition (Problem)</li>
        <li>Procedure</li>
        <li>FamilyMemberHistory</li>
        <li>CarePlan</li>
        <li>Goal</li>
        <li>CareTeam</li>
        <li>ClinicalImpression</li>
        <li>AdverseEvent</li>
        <li>DetectedIssue</li>
        <li>RiskAssessment</li>
      </ol>
      <li>Diagnosis</li>
      <ol>
        <li>Observation</li>
        <li>DiagnosticReport</li>
        <li>ProcedureRequest</li>
        <li>ImagingStudy</li>
        <li>ImagingManifest</li>
        <li>Sequence</li>
        <li>Specimen</li>
        <li>BodySite</li>
      </ol>
      <li>Medications</li>
      <ol>
        <li>MedicationRequest</li>
        <li>MedicationDispense</li>
        <li>MedicationAdministration</li>
        <li>MedicationStatement</li>
        <li>Medication</li>
        <li>Immunization</li>
        <li>ImmunizationRecommendation</li>
      </ol>
    </ul>*/
)

export default Window
