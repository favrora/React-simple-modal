import { useState } from 'react'
import Modal from './Modal';

function App() {
  const [modal, showModal] = useState<boolean>(false),
    [firstName, setFirstName] = useState<any>(""),
    [lastName, setLastName] = useState<any>(""),
    [formValidation, checkValidation] = useState<boolean>(false);

  const firstNameChange = event => {
    setFirstName(event.target.value);
  };

  const lastNameChange = event => {
    setLastName(event.target.value);
  };

  const sendForm = () => {
    if (firstName.length > 0 && lastName.length > 0) showModal(true);
    if (!formValidation) checkValidation(true);
  };

  return (
    <div className="App">
      <div className="form">
        <h1>Form with modal</h1>

        <div>
          <input className="firstName" placeholder="First name" onChange={firstNameChange}></input>
          <span className={`error ${formValidation && firstName.length === 0 ? "show" : ""}`}>Please fill input</span>
        </div>

        <div>
          <input className="lastName" placeholder="Last Name" onChange={lastNameChange}></input>
          <span className={`error ${formValidation && lastName.length === 0 ? "show" : ""}`}>Please fill input</span>
        </div>

        <div>
          <button className="btn" onClick={sendForm}>Send</button>
        </div>
      </div>

      <Modal modal={modal} showModal={showModal}
        firstName={firstName} lastName={lastName}></Modal>
    </div>
  );
}

export default App
