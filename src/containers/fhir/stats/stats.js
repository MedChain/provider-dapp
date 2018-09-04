import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import "./stats.css"

class Page extends React.Component {
  render() {
    if (!this.props.stats) return null;
    const stats = this.props.stats;

    return (
      <div className="stats" id="main">
        <div className="row">
          <div className="col-md-2 hosp" id="hosp">
            <div className="apt-text">Dermatology Associates
              <div className="apt-location">Winchester, MA</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="doc-prof">
            <div className="dhead"> DOCTOR</div>
            <img className="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
              <span className="dName">Dr.Smith</span>
            </div>
          </div>
          <div className="col-md-2 dt">
          <span className="datetime">DATE</span>
              <div className="current">11.05.2018</div>
              <div className="datetime">TIME</div>
              <div className="current">09:30</div>
          </div>
          <div className="col-md-6">
            Vitals
            <div className="row">
              <div className="col-md-4">Heart Rate:</div>
              <div className="col-md-1">{stats["heart-rate"]}</div>
            </div>
            <div className="row">
              <div className="col-md-4">Blood Pressure:</div>
              <div className="col-md-1">{stats["blood-pressure"]}</div>
            </div>
            <div className="row">
              <div className="col-md-4">Temperature:</div>
              <div className="col-md-1">{stats["temperature"]}</div>
            </div>
            <div className="row">
              <div className="col-md-4">Respitory Rate:</div>
              <div className="col-md-1">{stats["respitory-rate"]}</div>
            </div>
            <div className="row">
              <div className="col-md-4">Height:</div>
              <div className="col-md-1">{stats["height"]}</div>
            </div>
            <div className="row">
              <div className="col-md-4">Weight:</div>
              <div className="col-md-1">{stats["weight"]}</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 hosp" id="hosp">
            <div className="apt-text">Dermatology Associates
              <div className="apt-location">Winchester, MA</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="doc-prof">
            <div className="dhead"> DOCTOR</div>
            <img className="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
              <span className="dName">Dr.Smith</span>
            </div>
          </div>
          <div className="col-md-2 dt">
          <span className="datetime">DATE</span>
              <div className="current">11.05.2018</div>
              <div className="datetime">TIME</div>
              <div className="current">09:30</div>
          </div>
          <div className="col-md-6 dt">
            Lab Report <span className="status">ordered, not received</span>
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 hosp" id="hosp">
            <div className="apt-text">Dermatology Associates
              <div className="apt-location">Winchester, MA</div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="doc-prof">
            <div className="dhead"> DOCTOR</div>
            <img className="dimg" alt="" src="http://medcare-c795.kxcdn.com/wp-content/uploads/2016/02/doctor-profile11.jpg"/>
              <span className="dName">Dr.Smith</span>
            </div>
          </div>
          <div className="col-md-2 dt">
          <span className="datetime">DATE</span>
              <div className="current">11.05.2018</div>
              <div className="datetime">TIME</div>
              <div className="current">09:30</div>
          </div>
          <div className="col-md-6 dt">
            Prescription
            <div>
              Take two, twice per day with meals.
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ patient }) => ({
  stats: patient.patient.stats || null,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
