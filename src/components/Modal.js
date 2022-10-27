import React from "react";
// import "./Modal.css";

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <div>
      {children}
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
}

export default Modal;
