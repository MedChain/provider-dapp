import React from 'react'
import { bindActionCreators } from 'redux'
import { Form, Text, Scope } from 'informed'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {
  apiPostPatient,
} from '../../modules/patient'

import './profile.css'

const FormContent = () => (
  <div>
    <fieldset>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="firstname">First Name</label>
          <Text className="form-control" field="firstname" id="firstname" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="lastname">Last Name</label>
          <Text className="form-control" field="lastname" id="lastname" />
        </div>
      </div>

      <fieldset>
        <Scope scope="address">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <Text className="form-control" field="address" id="address" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <Text className="form-control" field="city" id="city" />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="state">State</label>
              <Text className="form-control" field="state" id="state" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="zip">Zip</label>
              <Text className="form-control" field="zip" id="zip" />
            </div>
          </div>
        </Scope>
      </fieldset>
      <fieldset>
        <legend>Emergency Contacts</legend>
        <Scope scope="ice[0]">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Contact 1 Name</label>
              <Text className="form-control" field="name" id="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone">Phone Number</label>
              <Text className="form-control" field="phone" id="phone" />
            </div>
          </div>
        </Scope>
        <Scope scope="ice[1]">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Contact 2 Name</label>
              <Text className="form-control" field="name" id="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phone"> Phone Number</label>
              <Text className="form-control" field="phone" id="phone" />
            </div>
          </div>
        </Scope>
      </fieldset>
    </fieldset>
    <div className="col-auto">
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </div>
    <Link to="/">Back to home</Link>
  </div>
)

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // Remember! This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  setFormApi(formApi) {
    this.forceUpdate(); //TODO: fix this. It is a hack because the form won't refill data when navigating away, then back to it.
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
        {/* <PatientSelector /> */}
        <h2>Update Profile</h2>
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
  patient: patient.patient || null,
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
  mapDispatchToProps
)(Profile)
