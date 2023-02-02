import inputStyle from "./style.module.css";
import { useState } from "react";
import { Operations } from "../Operations/Operations";

export function InputValues(props) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={inputStyle.inputContainer}>
      <h3>Type first value</h3>
      <input
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        className={inputStyle.inputBox}
        type="number"
      />
      <h3>Type second value</h3>
      <input
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        className={inputStyle.inputBox}
        type="number"
      />
      <Operations firstValue={value1} secondValue={value2} />
    </form>
  );
}

