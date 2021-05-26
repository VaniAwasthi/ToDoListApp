import React, { Fragment, useState } from "react";
import styles from "./Input.module.css";

const Input = ({ addTask }) => {
  const { inputBlock, inputField, button,headingText } = styles;
  const [input, setInput] = useState();
  const submit = () => {
    if (input.length) {
      addTask(input);
      setInput("");
    }
  };

  return (
    <Fragment>
      <div className={`${inputBlock} `}>
        <h1 className={`${headingText}`}>
          To Do List
        </h1>
        <input
          type="text"
          className={`${inputField}`}
          value={input}
          onChange={(e) => {
            e.stopPropagation();
            if (e.target.value !== "") {
              setInput(e.target.value.trim());
            }
          }}
        />
        <button
          className={`${button}`}
          onClick={() => {
            if (input) {
              submit();
            }
          }}
        >
          Add Task
        </button>
      </div>
    </Fragment>
  );
};
export default Input;