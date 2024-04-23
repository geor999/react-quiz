/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PropTypes, props } from "prop-types";
import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce"; //debounce for inputs
import "./inputFieldStyle.css";

export const InputField = ({
  value = true,
  rightIcon,
  helpIcon = false,
  label = true,
  errorMessage = false,
  valueContent = "Value",
  successMessage = false,
  state,
  className,
  labelStackClassName,
  divClassName,
  text = "Label",
  textInputClassName,
  divClassNameOverride,
  type,
  icon,
  clearInput,
  changed,
  num,
  parentCallback,
  match,
}) => {

  const [inputValue, setInputValue] = useState("");

  const [valueDebounce] = useDebounce(inputValue, 300);

  const [inputState, setInputState] = useState(state);

  const [newErrorMessage, setErrorMessage] = useState(errorMessage);

  // Function to handle input change
  useEffect(() => {
  }, [inputValue]);

  useEffect(() => {
    setInputValue("");
  }, [changed]);

  useEffect(() => {
    parentCallback(num, inputState, valueDebounce);
  }, [valueDebounce]);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
  return (
    <div className={`input-field ${className}`}>
      {label && (
        <div className={`label-stack ${labelStackClassName}`}>
          <div className={`label ${divClassName}`}>{text}</div>
        </div>
      )}
      <div className={`text-input ${state} ${textInputClassName}`}>
        <img src={`src/assets/${icon}.svg`} />
        <label htmlFor={`${text.toLocaleLowerCase()}`}></label>
        <input
          type={`${type}`}
          className={`value ${divClassNameOverride}`}
          placeholder={`${valueContent}`}
          //value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (type === "password") {
              if (!validatePassword(e.target.value)) {
                setInputState("error");
                setErrorMessage(
                  <div>
                    Your Password should have:
                    <ul>
                      <li
                        style={{
                          color: /[A-Z]/.test(e.target.value) ? "green" : "red",
                        }}
                      >
                        1 Uppercase letter
                      </li>
                      <li
                        style={{
                          color: /[a-z]/.test(e.target.value) ? "green" : "red",
                        }}
                      >
                        1 Lowercase letter
                      </li>
                      <li
                        style={{
                          color: /[^A-Za-z0-9]/.test(e.target.value)
                            ? "green"
                            : "red",
                        }}
                      >
                        1 Symbol
                      </li>
                      <li
                        style={{
                          color: e.target.value.length >= 8 ? "green" : "red",
                        }}
                      >
                        8 digits
                      </li>
                    </ul>
                  </div>
                );
              } else {
                setInputState("no-error");
                setErrorMessage("Your Password is ok.");
              }
            } else {
              if (type === "email") {
                if (!validateEmail(e.target.value)) {
                  setInputState("error");
                  setErrorMessage("Invalid email address");
                } else {
                  setInputState("no-error");
                  setErrorMessage("Email is valid!");
                }
              }
            }
          }}
          id={`${text.toLocaleLowerCase()}`}
          name={`${text.toLocaleLowerCase()}`}
        ></input>
      </div>
      {inputState !== "default-empty" && !match && (
        <div className={`input-feedback ${inputState}`}>{newErrorMessage}</div>
      )}
      {match && (
        <div className={`input-feedback no-error`}>Your passwords match!</div>
      )}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.bool,
  rightIcon: PropTypes.string,
  helpIcon: PropTypes.bool,
  label: PropTypes.bool,
  errorMessage: PropTypes.string,
  optionalLabel: PropTypes.bool,
  valueContent: PropTypes.string,
  successMessage: PropTypes.bool,
  state: PropTypes.oneOf([
    "active",
    "default",
    "success",
    "default-empty",
    "error",
    "disabled",
    "match",
  ]),
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  clearInput: PropTypes.bool,
  num: PropTypes.string,
  parentCallback: PropTypes.func,
};
