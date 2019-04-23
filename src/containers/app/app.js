import React from 'react'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import Dashboard from '../dashboard/dashboard'
import Vault from '../vault/vault'
import Emr from '../emr/emr'

import NA from '../na'
import Doctor from '../doctor/doctor'
import AppHeader from './header'
import AppLeftSidebar from './left-sidebar'
import AppRightSidebar from './right-sidebar'
import AppFooter from './footer'
import VaultLeftSidebar from '../vault/left-sidebar'
import VaultRightSidebar from '../vault/right-sidebar'
import VaultHeader from '../vault/header'
import VaultFooter from '../vault/footer'
import EmrLeftSidebar from '../emr/left-sidebar'
import EmrHeader from '../emr/header'
import DashboardLeftSidebar from '../dashboard/left-sidebar'

import Profile from '../profile/profile'
import Settings from '../settings/settings'
import TempPage1 from '../temp-page/temp-page1'
import TempPage2 from '../temp-page/temp-page2'
import TempPage3 from '../temp-page/temp-page3'
import TempPage4 from '../temp-page/temp-page4'
import TempPage5 from '../temp-page/temp-page5'
import TempPage6 from '../temp-page/temp-page6'
import TempPage7 from '../temp-page/temp-page7'
import TempPage8 from '../temp-page/temp-page8'
import TempPage9 from '../temp-page/temp-page9'

import {
  switchPatient,
  apiGetPatientList,
} from '../modules/patient'

import './app.css'

import aws_exports_auth from '../../aws-exports-auth';
Amplify.configure(aws_exports_auth);

class App extends React.Component {
  componentDidMount() {
    this.props.switchPatient(1);
    this.props.apiGetPatientList(); //TODO: this can go away once /doctor path is removed

    // <AppHeader/>
    // <AppLeftSidebar/>
    // <AppRightSidebar/>
    // <AppFooter/>

  }

  render() {
    return (
      <div>
        <AppHeader>
          <Route exact path="/vault/" component={VaultHeader} />
          <Route exact path="/vault/*" component={VaultHeader} />
          <Route exact path="/emr/" component={EmrHeader} />
          <Route exact path="/emr/*" component={EmrHeader} />
        </AppHeader>
        <AppLeftSidebar>
          <Route exact path="/vault/" component={VaultLeftSidebar} />
          <Route exact path="/vault/*" component={VaultLeftSidebar} />
          <Route exact path="/emr/" component={EmrLeftSidebar} />
          <Route exact path="/emr/*" component={EmrLeftSidebar} />
          <Route exact path="/dashboard/" component={DashboardLeftSidebar} />
          <Route exact path="/dashboard/*" component={DashboardLeftSidebar} />
        </AppLeftSidebar>
        <AppRightSidebar>
          <Route exact path="/vault/" component={VaultRightSidebar} />
          <Route exact path="/vault/*" component={VaultRightSidebar} />
        </AppRightSidebar>
        <main>

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard/" component={Dashboard} />
          <Route path="/dashboard/*" component={Dashboard} />
          <Route exact path="/vault/" component={Vault} />
          <Route exact path="/vault/*" component={Vault} />
          <Route exact path="/emr/" component={Emr} />
          <Route exact path="/emr/*" component={Emr} />
          <Route exact path="/doctor" component={Doctor} />
          <Route exact path="/na" component={NA} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/settings" component={Settings} />

          <Route exact path="/temp-page1" component={TempPage1} />
          <Route exact path="/temp-page2" component={TempPage2} />
          <Route exact path="/temp-page3" component={TempPage3} />
          <Route exact path="/temp-page4" component={TempPage4} />
          <Route exact path="/temp-page5" component={TempPage5} />
          <Route exact path="/temp-page6" component={TempPage6} />
          <Route exact path="/temp-page7" component={TempPage7} />
          <Route exact path="/temp-page8" component={TempPage8} />
          <Route exact path="/temp-page9" component={TempPage9} />
        </main>

        <AppFooter>
          <Route exact path="/vault/" component={VaultFooter} />
          <Route exact path="/vault/*" component={VaultFooter} />
        </AppFooter>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  patient: state.patient.patient || null,
  currentPatient: state.patient.currentPatient,
  state,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
      switchPatient,
      apiGetPatientList,
    },
    dispatch
  )

// export default withAuthenticator(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(App), true);

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
