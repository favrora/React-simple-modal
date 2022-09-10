
function Modal({ modal, showModal, firstName, lastName }) {
  return (
    <div className={`Modal ${modal ? "show" : ""}`}>

      <div className="modal-content">
        <div className="closeContainer">
          <span className="close" onClick={() => { showModal(false) }}>
            X
          </span>
        </div>

        <div>Hello, {firstName} {lastName}!</div>
      </div>

    </div>
  );
}

export default Modal;