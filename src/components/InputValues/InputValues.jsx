import inputStyle from "./style.module.css";
export function InputValues() {


  return (
    <div className={inputStyle.inputContainer}>
      <h3>Type first value</h3>
      <input id="value1" value={this.state.value} className={inputStyle.inputBox} type="number" />
      <h3>Type second value</h3>
      <input id="value2" className={inputStyle.inputBox} type="number" />
    </div>
  );
}
