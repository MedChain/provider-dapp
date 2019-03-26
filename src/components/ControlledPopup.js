import React from 'react'
import { Popup } from 'semantic-ui-react'

class ControlledPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false  // state to control the state of popup
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  onBlur = (e) => {
    var currentTarget = e.currentTarget;

    setTimeout(function() {
      if (!currentTarget.contains(document.activeElement)) {
          console.log('component officially blurred');
      }
    }, 0);
  }

  render() {
    return (
      <div tabIndex="1" onBlur={this.handleClose}>
        <Popup
          trigger={this.props.trigger}
          on='click'
          open={this.state.isOpen}
          onOpen={this.handleOpen}
        >
          {this.props.children}
        </Popup>
      </div>
    );
  }
}

export default ControlledPopup
