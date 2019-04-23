import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  apiGetPatientList,
  switchPatient,
} from '../modules/patient'

let optionItems = [];

const filterResults = (inputValue: string) => {
  return optionItems.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
}


class PatientSelector extends React.Component {
  componentDidMount() {
    !this.props.isFetching && this.props.apiGetPatientList();
  }

  handleInputChange = (newValue: string) => {
    const inputValue = newValue.value;
    this.props.switchPatient(inputValue);
    return inputValue;
  }

  // Async load of options
  loadOptions = (inputValue, callback) => {
    // massage the data into option/label objects
    optionItems = Object.keys(this.props.patients).map(key => ({
      value: this.props.patients[key].id,
      label: this.props.patients[key].firstname + " " + this.props.patients[key].lastname,
    }));
    if (optionItems.length > 0) {
      console.log('this.props.patients=', this.props.patients);
    } else {
      console.log('BUG: need to switch screens and come back to fill in patient dropdown');
    }
    callback(filterResults(inputValue));
  }

  render() {
    return (
      <div className="patient-selector">
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadOptions}
          defaultOptions
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ patient }) => ({
  patients: patient.patients,
  isFetching: patient.isFetching,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      apiGetPatientList,
      switchPatient,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientSelector)
