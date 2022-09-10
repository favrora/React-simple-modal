import React, { useContext } from "react";
import './scss/App.scss';
import Modal from './Modal';


function App() {
  const { modal, showModal } = useContext(Context);

  return (
    <div className="App">
      <div className="form">
        <h1>Form with modal</h1>

        <div>
          <input className="firstName" placeholder="First name"></input>
        </div>

        <div>
          <input className="lastName" placeholder="Last Name"></input>
        </div>

        <div>
          <button className="submitForm btn" variant="primary">Send</button>
        </div>
      </div>

      <Modal modalShow={modal}></Modal>
    </div>
  );
}

export default App;
