import { useState } from 'react';
import './Counter.css'
import Display from './componnets/Display';
import Buttons from './componnets/Buttons';
import Step from './componnets/Step';

const Counter = (props) => {

    
   
    const [counter, setCounter] = useState(props.initValue);
   

    

    const updateCounter = (action) => {
        if (action === 'Add') {
           setCounter(counter + 1); 
        }

        else if (action === 'Reinit') {
            setCounter(props.initValue);
        }

        else {
            setCounter(0);
        }
        
    };


    return (
        <div className="counter">
            <Display counter={counter} />
            <Buttons updateCounter={updateCounter}/>
            <Step />
        </div>
    );
};

export default Counter;