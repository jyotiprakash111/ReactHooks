import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalComp(props) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button onClick={() => setModal(true)}>Open Modal</button>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            background: "gray",
          },
          content: { color: "orange" },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModal(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default ModalComp;

// TODO: npm i react-modal
