import { useState } from "react";
import operationStyle from './style.module.css'

export function Operations(props) {
  const firstValue = parseInt(props.firstValue);
  const secondValue = parseInt(props.secondValue);

  const [result, setResult] = useState(0);

  function getSum() {
    setResult(firstValue + secondValue);
  }

  function getSubstraction() {
    setResult(firstValue - secondValue);
  }

  function getMultiplication() {
    setResult(firstValue * secondValue);
  }

  function getSplit() {
    if (secondValue === 0) {
      setResult("You cannot divide by 0");
    } else {
      setResult(firstValue / secondValue);
    }
  }

  return (
    <div className={operationStyle.operationsBox}>
      <div className={operationStyle.buttons}>
        <button onClick={getSum}>+</button>
        <button onClick={getSubstraction}>-</button>
        <button onClick={getMultiplication}>*</button>
        <button onClick={getSplit}>/</button>
      </div>
      <p>Result is: {result}</p>
    </div>
  );
}
