// React Component
import React, { useEffect, useState } from "react";
import { InputField } from "./components/InputField";
import "./style.css";

export default function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [clearInput, setClearInput] = useState(false);
  const [inputs, setInputs] = useState([
    { id: 0, state: "default-empty", value: "" },
    { id: 1, state: "default-empty", value: "" },
    { id: 2, state: "default-empty", value: "" },
    { id: 3, state: "default-empty", value: "" },
  ]);
  const [passwordState, setPasswordState] = useState("default-empty");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    setClearInput(!clearInput);
    setInputs([
      { id: 0, state: "default-empty", value: "" },
      { id: 1, state: "default-empty", value: "" },
      { id: 2, state: "default-empty", value: "" },
      { id: 3, state: "default-empty", value: "" },
    ]);
    setPasswordState("default-empty");
    setPasswordMatch(false);
  };

  const handleInputCallback = (num, inputState, value) => {
    const updatedInputs = inputs.map((input) => {
      // Check if the current object's id matches the specified id
      if (input.id === parseInt(num)) {
        // Return a new object with updated state and value
        return { ...input, state: inputState, value: value };
      } else {
        // Return the unchanged object
        return input;
      }
    });

    setInputs(updatedInputs);
    console.log(inputs);
  };

  const handleSubmit = (event) => {
    if (isClicked == true) {
      if (inputs.some((input) => input.value === "")) {
        event.preventDefault();
        alert("Please fill all the inputs!");
      } else {
        if (passwordMatch == true) {
          if (inputs[1].state == "no-error") {
            if (inputs[0].value != "") {
              event.preventDefault();
              alert(event);
              console.log(event);
            } else {
              event.preventDefault();
              alert("Your username field is empty.");
            }
          } else {
            event.preventDefault();
            alert("Your email is wrong.");
          }
        } else {
          event.preventDefault();
          alert("Your passwords dont match!");
        }
      }
    } else {
      console.log(inputs);
      if (inputs[0].value == "" || inputs[2].value == "") {
        event.preventDefault();
        alert("Please fill all the inputs!");
      } else {
        event.preventDefault();
        alert("logged in succesfully");
      }
    }
  };
  useEffect(() => {
    if (
      inputs[2].value === inputs[3].value &&
      inputs[2].state === "no-error" &&
      inputs[3].state === "no-error"
    ) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [inputs]);
  return (
    <div className={`desktop ${darkMode ? "dark" : ""}`}>
      <div className={`frame ${darkMode ? "dark" : ""}`}>
        <img
          className="vector"
          alt="Vector"
          src={`${
            darkMode
              ? "src/assets/dark-mode-toggle-icon.svg"
              : "src/assets/light-mode-toggle-icon.svg"
          }`}
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        />
      </div>
      <div className={`frame-wrapper ${darkMode ? "dark" : ""}`}>
        <div className={`div-wrapper ${darkMode ? "dark" : ""}`}>
          <div className="div">
            <div className={`text-wrapper ${darkMode ? "dark" : ""}`}>
              Quizionnaire
            </div>
            <div className={`frame-2 ${darkMode ? "dark" : ""}`}>
              <div
                className={`frame-3 ${isClicked ? "active" : "non-active"}
                ${isClicked ? "active" : "non-active"} ${
                  darkMode ? "dark" : ""
                }`}
              >
                <button
                  className={`${isClicked ? "frame-4" : "frame-5"} ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={handleClick}
                >
                  <div
                    className={`${
                      isClicked ? "text-wrapper-2" : "text-wrapper-3"
                    }
                    ${darkMode ? "dark" : ""}`}
                  >
                    Register
                  </div>
                </button>
                <button
                  className={`${!isClicked ? "frame-4" : "frame-5"} ${
                    darkMode ? "dark" : ""
                  }`}
                  onClick={handleClick}
                >
                  <div
                    className={`${
                      !isClicked ? "text-wrapper-2" : "text-wrapper-3"
                    } ${darkMode ? "dark" : ""}`}
                  >
                    Login
                  </div>
                </button>
              </div>
              <form
                className={`frame-6 ${darkMode ? "dark" : ""}`}
                onSubmit={handleSubmit}
              >
                <div className={`frame-7 ${darkMode ? "dark" : ""}`}>
                  <InputField
                    className="input-field-instance"
                    divClassName="input-field-2"
                    divClassNameOverride="input-field-4"
                    labelStackClassName={
                      isClicked
                        ? "design-component-instance-node-register"
                        : "design-component-instance-node-login"
                    }
                    state="default-empty"
                    text="Name"
                    textInputClassName="input-field-3"
                    valueContent="Name"
                    type="text"
                    icon="user"
                    num="0"
                    clearInput={clearInput}
                    changed={clearInput}
                    parentCallback={handleInputCallback}
                    darkMode={darkMode}
                  />

                  {isClicked && (
                    <InputField
                      className="input-field-instance"
                      divClassName="input-field-2"
                      divClassNameOverride="input-field-4"
                      labelStackClassName="design-component-instance-node"
                      state="default-empty"
                      text="Email"
                      textInputClassName="input-field-3"
                      valueContent="Email"
                      type="email"
                      icon="at"
                      num="1"
                      clearInput={clearInput}
                      changed={clearInput}
                      parentCallback={handleInputCallback}
                      darkMode={darkMode}
                    />
                  )}

                  <InputField
                    className="input-field-instance"
                    divClassName="input-field-2"
                    divClassNameOverride="input-field-4"
                    labelStackClassName="design-component-instance-node"
                    errorMessage="Your password should be 8 characters long."
                    state={`${passwordState}`}
                    text="Password"
                    textInputClassName="input-field-3"
                    valueContent="Password"
                    type="password"
                    icon="lock"
                    num="2"
                    clearInput={clearInput}
                    changed={clearInput}
                    parentCallback={handleInputCallback}
                    match={passwordMatch}
                    darkMode={darkMode}
                  />

                  {isClicked && (
                    <InputField
                      className="input-field-instance"
                      divClassName="input-field-2"
                      divClassNameOverride="input-field-4"
                      labelStackClassName="design-component-instance-node"
                      errorMessage="Passwords don't match"
                      state={`${passwordState}`}
                      text="Re-type Password"
                      textInputClassName="input-field-3"
                      valueContent="Password"
                      type="password"
                      icon="lock"
                      num="3"
                      clearInput={clearInput}
                      changed={clearInput}
                      parentCallback={handleInputCallback}
                      match={passwordMatch}
                      darkMode={darkMode}
                    />
                  )}
                </div>
                <input
                  className={`button ${darkMode ? "dark" : ""}`}
                  type="Submit"
                  value={`${isClicked ? "Register" : "Login"} `}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
