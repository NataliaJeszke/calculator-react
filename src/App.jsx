import generalStyle from './style.module.css';
import { InputValues } from './components/InputValues/InputValues';
import { Operations } from './components/Operations/Operations';
export function App(){
    return <div>
        <header className={generalStyle.header}>
        <h1 className={generalStyle.headline}>Simple Calculator in React</h1>
        </header>
        <div>
        <InputValues />
        <button type="submit" onClick={Operations}>+</button>
        </div>
    </div>
}