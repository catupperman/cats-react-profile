import React, { useState } from 'react';
import {validateEmail} from '../utils/helpers';


//contact form sheet, to demonstrate functionality when submitting forms
function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Not a vaild Email');
            return;
        }
        alert(`Hello ${userName}`);
        setUserName('');
        setEmail('');
        setMessage('');
    };
    return(
        <div>
      <p>Hello {userName}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
    
}

    export default Contact;