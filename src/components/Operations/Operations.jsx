import { useEffect, useState } from "react";
import operationStyle from "./style.module.css";

export function Operations(props) {
  const firstValue = parseInt(props.firstValue);
  const secondValue = parseInt(props.secondValue);

  const [result, setResult] = useState(0);

  const handleClick = (id) => {
    if (id === "sum") {
      getSum();
    } else if (id === "sub") {
      getSubstraction();
    } else if (id === "multi") {
      getMultiplication();
    } else if (id === "split") {
      getSplit();
    }
  };

  function getSum() {
    if (isNaN(firstValue) || isNaN(secondValue)) {
      setResult("you need to input a number");
    } else {
      setResult(firstValue + secondValue);
    }
  }

  function getSubstraction() {
    if (isNaN(firstValue) || isNaN(secondValue)) {
      setResult("you need to input a number");
    } else {
      setResult(firstValue - secondValue);
    }
  }

  function getMultiplication() {
    if (isNaN(firstValue) || isNaN(secondValue)) {
      setResult("you need to input a number");
    } else {
      setResult(firstValue * secondValue);
    }
  }

  function getSplit() {
    if (isNaN(firstValue) || isNaN(secondValue)) {
      setResult("you need to input a number");
    } else if (secondValue === 0) {
      setResult("You cannot divide by 0");
    } else {
      setResult(firstValue / secondValue);
    }
  }

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className={operationStyle.operationsBox}>
      <div className={operationStyle.buttons}>
        <button id="sum" onClick={() => handleClick("sum")}>
          +
        </button>
        <button id="sub" onClick={() => handleClick("sub")}>
          -
        </button>
        <button id="multi" onClick={() => handleClick("multi")}>
          *
        </button>
        <button id="split" onClick={() => handleClick("split")}>
          /
        </button>
      </div>
      <p>Result is: {result}</p>
    </div>
  );
}
