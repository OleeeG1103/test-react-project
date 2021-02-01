import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/index';
import Button from '../button/index';

import '../modal/modal.css';

const Modal = ({
  title, isOpen, onCancel,
}) => {

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <span className="modal-header__title">{title}</span>
                 <span className="modal-header__close">
                     <Button className="btn-modal-cancel" type="button" onClick={onCancel}>&times;</Button>
                 </span>
              </div>
              <div className="modal-main">
                text
              </div>
              <div className="modal-footer">
               <span className="modal-footer__title">text link</span>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};
Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
};
Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: () => {},
};
export default Modal;