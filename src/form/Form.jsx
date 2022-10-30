import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/counterSlice";
import SignIn from "../signIn/SignIn";
import "./Form.scss";

const Form = () => {
  const inputRef = useRef();
  const numRef = useRef();
  const emailRef = useRef();
  const dispatch = useDispatch();
  //   THE HOOK USE DISPATCH IS USED TO DISPATCH PAYLOAD ACTION TO THE STATE IT ACCEPTS THE
  //   LOGIN THAT WE CREATED AND IN THAT WE CAN PASS THE OBJECTS

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    // console.log(inputRef.current.value);
    dispatch(
      login({ name: inputRef.current.value, email: emailRef.current.value })
    );
  };
  return (
    <>
      {!isLoggedIn ? (
        <div className="form">
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* OnSubmit IS USED TO SUBMIT THE FORM WHEN THE SUBMIT TYPE BUTTON IS CLICKED */}
            <input ref={inputRef} type="text" required placeholder="Name" />
            <input ref={emailRef} type="email" required placeholder="Email" />
            <input ref={numRef} type="number" required placeholder="number" />
            <input type="password" required placeholder="Password" />
            {/* <button onClick={(e) => handleSubmit(e)}>Submit</button> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Form;
