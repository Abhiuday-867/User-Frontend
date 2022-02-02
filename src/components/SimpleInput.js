import axios from "axios";
import { useRef, useState } from "react";
const SimpleInput = (props) => {
  const [formIsValid, setFormIsValid] = useState("false");
  const inputName = useRef();
  const inputEmail = useRef();
  const inputPhn = useRef();
  const inputCity = useRef();
  const inputState = useRef();
  const inputCountry = useRef();
  let enteredName,
    enteredEmail,
    enteredPhn,
    enteredCity,
    enteredState,
    enteredCountry;
  const submitHandler = async (event) => {
    event.preventDefault();
    enteredName = inputName.current.value;
    enteredEmail = inputEmail.current.value;
    enteredPhn = inputPhn.current.value;
    enteredCity = inputCity.current.value;
    enteredState = inputState.current.value;
    enteredCountry = inputCountry.current.value;
    const userData = {
      name: enteredName,
      email: enteredEmail,
      phn: enteredPhn,
      city: enteredCity,
      state: enteredState,
      country: enteredCountry,
    };

    if (
      enteredName.trim() !== " " &&
      enteredEmail.includes("@") &&
      enteredPhn > 0 &&
      enteredPhn < 11
    ) {
      setFormIsValid(true);
    }

    if (formIsValid) {
      axios
        .post("http://localhost:3000/register", userData)
        .then((res) => console.log(res));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">User Name</label>
        <input type="text" id="name" ref={inputName} />
      </div>
      <div className="form-control">
        <label htmlFor="email">User Email</label>
        <input type="email" id="email" ref={inputEmail} />
      </div>
      <div className="form-control">
        <label htmlFor="num">User Phone</label>
        <input type="number" id="num" ref={inputPhn} />
      </div>
      <div className="form-control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={inputCity} />
      </div>
      <div className="form-control">
        <label htmlFor="state">State</label>
        <input type="text" id="state" ref={inputState} />
      </div>
      <div className="form-control">
        <label htmlFor="country">Country</label>
        <input type="text" id="country" ref={inputCountry} />
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Register</button>
      </div>
    </form>
  );
};

export default SimpleInput;
