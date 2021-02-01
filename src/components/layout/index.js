import React, { Component, Fragment } from 'react';
import Modal from '../modal/index';
import Button from '../button/index';

import './layout.css';

class Layout extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>
          <div className="wrapper">
              <div className="main">
        <Button className="btn-modal-open" onClick={this.openModal}>Show modal</Button>
        <Modal
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
        />
        </div>
        </div>
      </Fragment>
    );
  }
}

export default Layout;


