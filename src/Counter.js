import { useState } from 'react';
import './Counter.css'
import Display from './componnets/Display';
import Buttons from './componnets/Buttons';
import Step from './componnets/Step';

const Counter = (props) => {

    
   
    const [counter, setCounter] = useState(props.initValue);
    const [step, setStep] = useState(1);

    // const change = (event) => {
    //     setStep(event.target.value);
    //     console.log(step);
    // }
    
    console.log(step);

    const updateCounter = (action) => {
        if (action === 'Add' & step === 1) {
           setCounter(counter + step); 
        }

        else if (action === 'Reinit') {
            setCounter(props.initValue);
        }

        else if (action === 'Change') {
            setCounter(counter + step); 
         }

        else {
            setCounter(0);
        }
        
    };

    return (
        <div className="counter">
            <Display counter={counter} />
            <Buttons step={step} updateCounter={updateCounter}/>
            <Step step={step} setStep={setStep} />
        </div>
    );
};

export default Counter;