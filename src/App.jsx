import generalStyle from "./style.module.css";
import { InputValues } from "./components/InputValues/InputValues";
import { Operations } from "./components/Operations/Operations";

export function App() {

    const handleSum = ()=>{
        console.log("suma")
    }
        
  return (
    <div>
      <header className={generalStyle.header}>
        <h1 className={generalStyle.headline}>Simple Calculator in React</h1>
      </header>
      <div>
        <InputValues />
        <button type="submit" onClick={handleSum}>
          +
        </button>
      </div>
    </div>
  );
}
