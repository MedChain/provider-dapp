import React from 'react'
import {
    Form, Input, TextArea, Checkbox, Radio, RadioGroup, Dropdown, Select,
  } from 'formsy-semantic-ui-react';
import { Label } from 'semantic-ui-react';

import '../emr/emr.css'

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

const CreateRecord = () => (
    <div id='createRecord'>
        <label><strong>{'Patient ID: ' + parseInt(Math.random() * (max-min) + min) }</strong></label>
        <Form
        ref={ ref => this.form = ref }
        onValidSubmit={ this.onValidSubmit }
      >
        <Form.Group widths="equal">
          <Form.Input
            required
            name="firstName"
            label="First name"
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

        {/* {/* <Form.RadioGroup
          name="size"
          required
          label="Size"
          errorLabel={ <Label color="red" pointing="left"/> }
          validationErrors={{
            isDefaultRequiredValue: 'Size is Required',
          }}
        > }
          <Form.Radio label="Small" value="sm"/>
          <Form.Radio label="Medium" value="md"/>
          <Form.Radio label="Large" value="lg"/>
        </Form.RadioGroup> */}

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

        {/* <Form.Checkbox
          name="terms"
          label="I agree to the Terms and Conditions"
          validations="isTrue"
          errorLabel={ <Label color="red" pointing="left"/> }
          validationErrors={{
            isTrue: 'You\'ll have to agree to the Terms and Conditions',
          }}
        /> */}

        <Form.Group>
          <Form.Button content="Save" color="green"/>
          <Form.Button type="button" content="Reset" onClick={ () => this.form.reset() }/>
        </Form.Group>
      </Form>
    </div>
)

export default CreateRecord