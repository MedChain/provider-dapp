import React from 'react'
import {
    Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select,
  } from 'formsy-semantic-ui-react';
import { Label } from 'semantic-ui-react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../emr/emr.css'

import {
  apiPostPatient,
} from '../modules/patient'

const min = 10000;
const max = 100000;

const calculateID = (min, max) => {
    var randomNumber = parseInt(Math.random() * (max-min) + min);
    return (randomNumber);
}

const genderOptions = [
    {text: 'Male', value: 'male'},
    {text: "Female", value: 'female'},
];

const RecordForm = () => (
    <div id='createRecord'>
        <label><strong>{'Patient ID: ' + this }</strong></label>
        <Form
        ref={ ref => this.form = ref }
      >
        <Form.Group widths="equal">
          <Form.Input
            required
            name="firstName"
            label="First name"
            value="Robert"
            placeholder="First name"
            validations="isWords"
            errorLabel={ <Label color="red" pointing/> }
            validationErrors={{
              isWords: 'No numbers or special characters allowed',
              isDefaultRequiredValue: 'First Name is Required',
            }}
          />
          <Form.Input
            name="lastName"
            label="Last name"
            placeholder="Last name"
            required
            validations="isWords"
            errorLabel={ <Label color="red" pointing/> }
            validationErrors={{
              isWords: 'No numbers or special characters allowed',
              isDefaultRequiredValue: 'Last Name is Required',
            }}
          />
          <Form.Select
            name="gender"
            label="Gender"
            options = { genderOptions }
            placeholder="Gender"
            required
            errorLabel={ <Label color="red" pointing/> }
            validationErrors={{
              isDefaultRequiredValue: 'Gender is Required',
            }}
          />
        </Form.Group>

        <Form.Group>
          <Form.Input name="phone" width={4} inline label="Phone" placeholder="000-000-0000" />
        </Form.Group>

        <Form.Group>
            <Form.Input 
                name="streetAddress" 
                label="Address" 
                placeholder="Street Address"/>
            <Form.Input 
                name="city"
                label="City"
                placeholder="City"
            />
            <Form.Input 
                name="state"
                label="State"
                placeholder="State"
            />
        </Form.Group>
        <Form.Group>
            <Form.Input 
                name="height"
                label="Height (Inches)"
                placeholder="000"
            />
            <Form.Input 
                name="weight"
                label="Weight (Pounds)"
                placeholder="000"
            />
        </Form.Group>
        <Form.Group>    
            <Form.Input 
                name="heartRate"
                label="Heart Rate"
                placeholder="000"
            />
            <Form.Input 
                name="bloodPressure"
                label="BP"
                placeholder="000/000"
            />
            <Form.Input 
                name="temp"
                label="Temperature"
                placeholder="000"
            />
            <Form.Input 
                name="respiratoryRate"
                label="Respiratory Rate"
                placeholder="000"
            />
        </Form.Group>

        <Form.TextArea
          name="visitNotes"
          label="Visit Notes"
          placeholder="What brings you in today?"
          required
          errorLabel={ <Label color="red" pointing/> }
          validationErrors={{
            isDefaultRequiredValue: 'Please enter patient notes.',
          }}
        />

        <Form.Group>
          <Form.Button content="Save" color="green"/>
          <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
        </Form.Group>
      </Form>
    </div>
)

class CreateRecord extends React.Component {
  constructor(props) {
    super(props)
    console.log(this);
    // Remember! This binding is necessary to make `this` work in the callback
    this.setFormApi = this.setFormApi.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  render() {
    console.log(this.props)
    this.props.patient &&
      this.formApi &&
      this.formApi.setValues(this.props.patient)

    return (
      <RecordForm
      getApi={this.setFormApi}
      onSubmit={this.submitForm}
      />
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

export default 
RecordForm
connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateRecord)

 