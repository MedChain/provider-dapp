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
    console.log(inputValue);
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
    console.log(optionItems)
    if (optionItems.length > 0) {
      console.log('this.props.patients=', this.props.patients);
    } else {
      console.log('BUG: need to switch screens and come back to fill in patient dropdown');
    }
    callback(filterResults(inputValue));
  }

  render() {    
    const customStyles = {
      control: (base, state) => ({
        ...base,
        // match with the menu
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "yellow" : "green",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? "red" : "blue"
        }
      }),
      menu: base => ({
        ...base,
        // Get the dropdown to scroll
        overflow: "scroll",
        // override border radius to match the box
        borderRadius: 0,
        // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
        hyphens: "auto",
        // kill the gap
        marginTop: 0,
        textAlign: "left",
        // prevent menu to scroll y
        padding: 0,
        height: 300,
        wordWrap: "break-word"
      }),
      container: base => ({
        ...base,
        height: 30,
      }),
      menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
        height: 300,
      })
    };

    return (
      <div className="patient-selector">
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadOptions}
          defaultOptions
          onChange={this.handleInputChange}
          styles={customStyles}
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
