import { useState } from "react";

const Step = (props) => {
    
    const [step, setStep] = useState('');

    const change = (event) => {
        setStep(event.target.value);
    }
    console.log(step);

    return (
        <div className="stepControl">
            <label for='stepper' id="stepperLabel">Krok: </label>
            <input type="number" name="stepper" id="stepper" min='1' value={step} onChange={change}></input>
        </div>
    )
}

export default Step;