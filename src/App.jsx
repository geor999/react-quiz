// React Component
import React, { useState } from "react";
import { InputField } from "./components/InputField";
import "./style.css";

export default function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [clearInput, setClearInput] = useState(false);
  const [inputs,setInputs]= useState(["","","",""])
  const [passwordState,setPasswordState]=useState("default-empty")
  const [passwordMatch,setPasswordMatch]=useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked);
    setClearInput(!clearInput);
  };

  const handleInputCallback = (num, inputState,value) => {
    inputs[num]=[inputState,value];
    console.log(inputs)
    if((inputs[2][1]===inputs[3][1]) && inputs[2][0]==="no-error" && inputs[3][0]==="no-error")
    {
      setPasswordMatch(true);
    }
    else{
      setPasswordMatch(false)
    }
  };

  return (
    <div className="desktop">
      <div className="frame">
        <img
          className="vector"
          alt="Vector"
          src="src/assets/light-mode-toggle-icon.svg"
        />
      </div>
      <div className="frame-wrapper">
        <div className="div-wrapper">
          <div className="div">
            <div className="text-wrapper">Quizionnaire</div>
            <div className="frame-2">
              <div
                className={`frame-3 ${isClicked ? "active" : "non-active"}
                ${isClicked ? "active" : "non-active"}`}
              >
                <button
                  className={`${isClicked ? "frame-4" : "frame-5"}`}
                  onClick={handleClick}
                >
                  <div
                    className={`${
                      isClicked ? "text-wrapper-2" : "text-wrapper-3"
                    }`}
                  >
                    Register
                  </div>
                </button>
                <button
                  className={`${!isClicked ? "frame-4" : "frame-5"}`}
                  onClick={handleClick}
                >
                  <div
                    className={`${
                      !isClicked ? "text-wrapper-2" : "text-wrapper-3"
                    }`}
                  >
                    Login
                  </div>
                </button>
              </div>
              <form className={"frame-6"}>
                <div className="frame-7">
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
                  />

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
                  />

                  {isClicked && (
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
                    />
                  )}

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
                    />
                  )}
                </div>
                <input
                  className="button"
                  type="Submit"
                  value={`${isClicked ? "Register" : "Login"}`}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
