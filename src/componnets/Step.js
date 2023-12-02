import { useState } from "react";

const Step = (props) => {
    
   

    return (
        <div className="stepControl">
            <label htmlFor="stepper" id="stepperLabel">Step: </label>
            <input type="number" name="stepper" id="stepper" min='1' value={props.step} onChange={(event)=>props.setStep(+event.target.value)}></input>
        </div>
    )
}

export default Step;