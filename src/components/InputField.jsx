/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {PropTypes, props} from "prop-types";
import React, { useState, useEffect } from "react";
import { useDebounce } from 'use-debounce';//debounce for inputs
import "./inputFieldStyle.css";

export const InputField = ({
  value = true,
  rightIcon,
  helpIcon = false,
  label = true,
  errorMessage = false,
  optionalLabel = false,
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
  parentCallback}) => {

  const [inputValue, setInputValue] = useState("");
  const [valueDebounce] = useDebounce(inputValue, 1000);
  // Function to handle input change

  useEffect(() => {
    setInputValue("");
  }, [changed]);

  useEffect(() => {
    parentCallback(
      valueDebounce, num
    );
  }, [valueDebounce]);

  return (
    <div className={`input-field ${className}`}>
      {label && (
        <div className={`label-stack ${labelStackClassName}`}>
          <div className={`label ${divClassName}`}>{text}</div>
        </div>
      )}
      <div className={`text-input ${state} ${textInputClassName}`}>
        <img src={`src/assets/${icon}.svg`} />
        <label htmlFor={`${text.toLocaleLowerCase()}`} ></label>
        <input
          type={`${type}`}
          className={`value ${divClassNameOverride}`}
          placeholder={`${valueContent}`}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);}}
          id={`${text.toLocaleLowerCase()}`}
          name={`${text.toLocaleLowerCase()}`}
          
        ></input>
      </div>
      {state === "error" && (
        <div>
          <div>{errorMessage}</div>
        </div>
      )}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.bool,
  rightIcon: PropTypes.string,
  helpIcon: PropTypes.bool,
  label: PropTypes.bool,
  errorMessage: PropTypes.bool,
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
  ]),
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  clearInput: PropTypes.bool,
  num: PropTypes.string,
  parentCallback: PropTypes.func
};
