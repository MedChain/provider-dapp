import React from 'react'
import { bindActionCreators } from 'redux'
import { Form, Text, Scope } from 'informed'
import { Link } from 'react-router-dom'
import PatientSelector from '../patient-selector/patient-selector'
import { connect } from 'react-redux'

import {
  apiPostPatient,
} from '../../modules/patient'


const FormContent = () => (
  <div>
    <fieldset>
      <legend>Vitals</legend>
      <Scope scope="stats">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="heart-rate">HeartRate:</label>
          <div className="col-sm-10">
            <Text className="form-control" field="heart-rate" id="heart-rate" />
            </div>
            </div>
        <div className="form-group row">
          <label  className="col-sm-2 col-form-label" htmlFor="blood-pressure">Blood Pressure:</label>
          <div className="col-sm-10">
          <Text className="form-control" field="blood-pressure" id="blood-pressure" />
          </div>
          </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="temperature">Temperature:</label>
          <div className="col-sm-10">
          <Text className="form-control" field="temperature" id="temperature" />
          </div>
          </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="respitory-rate">Respitory Rate:</label>
          <div className="col-sm-10">
          <Text className="form-control" field="respitory-rate" id="respitory-rate" />
          </div>
          </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="height">Height:</label>
          <div className="col-sm-10">
          <Text className="form-control" field="height" id="height" />
          </div>
          </div>
        <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="weight">Weight:</label>
        <div className="col-sm-10">
        <Text className="form-control" field="weight" id="weight" />
        </div>
          </div>
      </Scope>
    </fieldset>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </div>
    <Link to="/">Back to home</Link>
  </div>
)

class Vitals extends React.Component {
  constructor(props) {
    super(props)

    // Remember! This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  setFormApi(formApi) {
    this.formApi = formApi
  }

  submitForm(values){
    this.props.apiPostPatient(this.props.currentPatient, values);
  }

  render() {
    this.props.patient &&
      this.formApi &&
      this.formApi.setValues(this.props.patient)

    return (
      <div id="doctor-vitals">
        <h2>Update Vital Signs for</h2>
        <PatientSelector />
        <Form
          id="doctor-form"
          component={FormContent}
          getApi={this.setFormApi}
          onSubmit={this.submitForm}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ patient }) => ({
  patient: patient.patients[patient.currentPatient] || null,
  currentPatient: patient.currentPatient,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      apiPostPatient,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vitals)
