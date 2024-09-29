import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    isvisible: false,
    mode: '',
    favCar: ''
  });

  // Log the current state of formData whenever it changes
  

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(e) {
    e.preventDefault(); // Prevent default form submission
    console.log('Form Submitted'); // Log when the form is submitted
    console.log('Submitted data:', formData); // Log the form data
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>User Information</legend>
          <input
            type="text"
            placeholder="First Name"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
          <br />
          <textarea
            placeholder='Enter your comments'
            onChange={changeHandler}
            name="comment"
            value={formData.comment}
          />
          <br />

          <input
            type='checkbox'
            onChange={changeHandler}
            name="isvisible"
            checked={formData.isvisible}
            id='isvisible'
          />
          <label htmlFor='isvisible'>Am I visible</label>
          <br />

          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value="Online-mode"
            id='Online-mode'
            checked={formData.mode === "Online-mode"}
          />
          <label htmlFor='Online-mode'>Online Mode</label>
          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value="Offline-mode"
            id='Offline-mode'
            checked={formData.mode === "Offline-mode"}
          />
          <label htmlFor='Offline-mode'>Offline Mode</label>
        </fieldset>

        <select
          name="favCar"
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="">Select a car</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
