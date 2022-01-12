import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useStateContext } from '../../context/StateContextProvider';
import './Modal.css';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const { closeModal } = useStateContext();
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={closeModal} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
