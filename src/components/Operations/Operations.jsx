import { useEffect, useState } from "react";
import operationStyle from "./style.module.css";

export function Operations(props) {
  const firstValue = parseInt(props.firstValue);
  const secondValue = parseInt(props.secondValue);

  const [result, setResult] = useState(0);

  const handleClick = (id) => {
    if (id === "Sum") {
      getSum();
    } else if (id === "Sub") {
      getSubstraction();
    } else if (id === "Multi") {
      getMultiplication();
    } else if (id === "Split") {
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
        <button id="Sum" onClick={() => handleClick("Sum")}>
          +
        </button>
        <button id="Sub" onClick={() => handleClick("Sub")}>
          -
        </button>
        <button id="Multi" onClick={() => handleClick("Multi")}>
          *
        </button>
        <button id="Split" onClick={() => handleClick("Split")}>
          /
        </button>
      </div>
      <p>Result is: {result}</p>
    </div>
  );
}
