import { InputValues } from "../InputValues/InputValues";
export function Operations(props){
    const firstValue = parseInt(props.firstValue);
    const secondValue = parseInt(props.secondValue);
    
    const sum = firstValue + secondValue;
    console.log(sum)
return (
    <div>
       Result is: {sum};
    </div>
)
    }


