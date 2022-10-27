import React, { useState } from "react";
import "./Modal.css";
import Character from "./Character";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <>
        <button onClick={toggleModal} className="btn-modal">
          open
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay">
              <div className="modal-content">
                <h2>{Character.name}</h2>
                <button className="close-btn" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Modal;
