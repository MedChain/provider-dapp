import React from 'react';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom'

import './tutorial.css'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Page extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div id="tutorial">
        <button onClick={this.openModal}>Welcome Page</button>
        <Modal
          contentLabel="Example Modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Welcome to the MedChain Demo</h2>
          <div className="outerContent">
            <p>In addition to all the blockchain coding we are doing on the backend, we are building two front-end applications:
              this Patient dApp (distributed Application = webpage) and
              a Provider dApp (for the doctors to use in their offices). The goal of this demo is to show you that when the doctor saves
              new medical data to Jane Doe's record in the Provider dApp, then Jane can use the Patient dApp to see all updates that
              every doctor makes. Jane can also give
              any doctor she wants permission to add medical history, and revoke that permission if desired. Eventually, all the other
              features of each dApp will be integrated, but for now, there are lots of placeholder buttons and text so you know what is
              coming as the dApps mature.
            </p>
            Notes:
            <ol>
              <li>
                this demo is a work-in-progress (and best viewed on a desktop computer... for now).
              </li>
              <li>
                the Provider dApp is simply the link in the header
                  called "Doctor Form (temp)". This will be separated out into it's own
                  app the week of 8/13/2018.
              </li>
            </ol>
            <div className="innerContent">
              <h3>Navigation</h3>
              <p>
                There are a few buttons of interest at this time in the header:
              </p>
              <ol>
                <li>Dashboard</li>
                <li>Medical History</li>
                <li>Connection</li>
                <li>and the profile image on the far right</li>
              </ol>
              <h4>Dashboard</h4>
              <p>The Dashboard is like any other app's dashboard - it is a summary
                of everything you want to see at-a-glance. You can see upcoming
                appointments, you can authorize certain doctors to view your records,
                and you can see data from your personal medical devices.</p>
              <h4>Medical History</h4>
              <p>The Medical History page is where you will find all the documents,
                charts, results, etc. that a doctor creates or receives on you behalf.
                They are sorted by date so you have a chronological order of all your
                past visits. MedChain uses the <NavLink to="https://www.hl7.org/fhir/overview.html">FHIR </NavLink>
                protocol to transfer medical records so any existing EMR software
                group can interface with MedChain.</p>
              <h4>Connection</h4>
              <p>The Connection status (the cloud with the 4 circles) will show you some debug
                statistics about the blockchain. We wanted a quick way to see what happening
                behind the scenes (and to show you).
              </p>
              <h4>Profile</h4>
              <p>The Profile page, like other profile pages, is where you enter
                in your personal information ONCE. This information will then be
                used to automatically fill in every New Patient form you'll ever
                have in the future.</p>
            </div>
          </div>
          <button onClick={this.closeModal}>Continue to Demo</button>

        </Modal>
      </div>
    );
  }
}

export default Page
