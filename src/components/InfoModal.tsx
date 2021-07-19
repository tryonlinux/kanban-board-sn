import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Button } from 'react-bootstrap';

export interface InfoModalProps {
  modalTextBody: string;
  toggleInfoModal: () => void;
}
export interface InfoModalState {}

class InfoModal extends React.Component<InfoModalProps, InfoModalState> {
  render() {
    return (
      <div>
        <Modal
          show="true"
          onHide={this.props.toggleInfoModal}
          centered
          size="lg"
        >
          <Modal.Body>
            {this.props.modalTextBody}
            <div className="bootstrap-like-modal-footer">
              <Button variant="secondary" onClick={this.props.toggleInfoModal}>
                Close
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default InfoModal;
