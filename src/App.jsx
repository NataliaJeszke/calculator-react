import generalStyle from "./style.module.css";
import { InputValues } from "./components/InputValues/InputValues";

export function App() {
        
  return (
    <div>
      <header className={generalStyle.header}>
        <h1 className={generalStyle.headline}>Simple Calculator in React</h1>
      </header>
      <main>
        <InputValues />
      </main>
    </div>
  );
}
