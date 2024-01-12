import React from "react";
import { Modal } from 'flowbite-react';

interface LayoutProps {
  content: React.ReactNode;
  title?: string;
  state: boolean;
  onClose: (state: boolean) => void;
}

const Popup: React.FC<LayoutProps> = ({ content, title, state, onClose }) => {
	return (
		<>
			<Modal dismissible show={state} onClose={() => onClose(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {content}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button> */}
        </Modal.Footer>
      </Modal>
		</>
	);
};

export default Popup;
