
function Modal() {
  return (
    <div className={`Modal ${this.props.modalShow ? "show" : ""}`}>

      <div className="modal-content">
        <div className="closeContainer">
          <span className="close"
            onClick={() => { this.props.modalShow(false)}}
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