import React, { useState } from 'react'
import './scss/App.scss';
import Modal from './Modal';


function App() {
  const [modal, showModal] = useState(false);

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
          <button className="submitForm btn" variant="primary" onClick={() => showModal(true)}>Send</button>
        </div>
      </div>

      <Modal modal={modal} showModal={showModal}></Modal>
    </div>
  );
}

export default App;
