import { useState } from "react";
import "./App.css";
import CustomInput from "./components/CustomInput/CustomInput";

function App() {
  const [userInputs, setUserInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (name, value) => {
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email } = userInputs;
    const isValid = firstName && lastName && email;
    setSubmitted(true);
    setValid(isValid);
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  return (
    <div className="App">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <CustomInput
          name="firstName"
          value={userInputs.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          submitted={submitted}
        />
        <CustomInput
          name="lastName"
          value={userInputs.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          submitted={submitted}
        />
        <CustomInput
          name="email"
          value={userInputs.email}
          onChange={handleInputChange}
          placeholder="Email"
          submitted={submitted}
        />
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
