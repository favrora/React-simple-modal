import { useState } from 'react'
import { observer } from "mobx-react-lite";
import { useStore } from "./store";
import Modal from './Modal';

const App = observer(() => {
  const [modal, showModal] = useState<boolean>(false),
    [formValidation, checkValidation] = useState<boolean>(false);

  const { firstName, setFirstName, lastName, setLastName } = useStore();

  const sendForm = () => {
    if (firstName && lastName) showModal(true);
    if (!formValidation) checkValidation(true);
  };

  return (
    <div className="App">
      <div className="form">
        <h1>Form with modal</h1>

        <div>
          <input className="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <span className={`error ${formValidation && !firstName ? "show" : ""}`}>Please fill input</span>
        </div>

        <div>
          <input className="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <span className={`error ${formValidation && !lastName ? "show" : ""}`}>Please fill input</span>
        </div>

        <div>
          <button className="btn" onClick={sendForm}>Send</button>
        </div>
      </div>

      <Modal modal={modal} showModal={showModal}
        firstName={firstName} lastName={lastName}></Modal>
    </div>
  );
});

export default App;
