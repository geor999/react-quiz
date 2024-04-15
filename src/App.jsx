// React Component
import React, { useState } from "react";
import { InputField } from "./components/InputField";
import "./style.css";

export default function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [clearInput, setClearInput] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setClearInput(!clearInput);
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
                className={`frame-3 ${
                  isClicked ? "active" : "non-active"
                }`}
              >
                <button
                  className={`${
                    isClicked ? "frame-4" : "frame-5"
                  }`}
                  onClick={handleClick}
                >
                  <div className={`${
                    isClicked ? "text-wrapper-2" : "text-wrapper-3"
                  }`}>Register</div>
                </button>
                <button
                  className={`${
                    !isClicked ? "frame-4" : "frame-5"
                  }`}
                  onClick={handleClick}
                >
                  <div className={`${
                    !isClicked ? "text-wrapper-2" : "text-wrapper-3"
                  }`}>Login</div>
                </button>
              </div>
              <div
                className={'frame-6'}
              >
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
                  clearInput={clearInput}
                  changed={clearInput}
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
                  clearInput={clearInput}
                  changed={clearInput}
                />

                {isClicked && (
                  <InputField
                    className="input-field-instance"
                    divClassName="input-field-2"
                    divClassNameOverride="input-field-4"
                    labelStackClassName="design-component-instance-node"
                    errorMessage="Your password should be 8 characters long."
                    state="default-empty"
                    text="Password"
                    textInputClassName="input-field-3"
                    valueContent="Password"
                    type="password"
                    icon="lock"
                    clearInput={clearInput}
                    changed={clearInput}
                  />
                )}

                {isClicked && (
                  <InputField
                    className="input-field-instance"
                    divClassName="input-field-2"
                    divClassNameOverride="input-field-4"
                    labelStackClassName="design-component-instance-node"
                    errorMessage="Passwords don't match"
                    state="default"
                    text="Re-type Password"
                    textInputClassName="input-field-3"
                    valueContent="Password"
                    type="password"
                    icon="lock"
                    clearInput={clearInput}
                    changed={clearInput}
                  />
                )}

                <button className="button">
                  {isClicked ? "Register" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
