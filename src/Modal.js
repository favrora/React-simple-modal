
function Modal({ modal, showModal }) {
  return (
    <div className={`Modal ${modal ? "show" : ""}`}>

      <div className="modal-content">
        <div className="closeContainer">
          <span className="close"
            onClick={() => { showModal(false)}}
          >
            X
          </span>
        </div>

        <div className="">Hello, f</div>
      </div>

    </div>
  );
}

export default Modal;