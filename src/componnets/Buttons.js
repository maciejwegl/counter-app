const Buttons = (props) => {
    return (
        <div className="buttons">
            <button onClick={()=>props.updateCounter('Add')}>Add</button>
            <button onClick={()=>props.updateCounter('Reinit')}>Reinit</button>
            <button onClick={()=>props.updateCounter('Set 0')}>Set 0</button>
            <button onClick={()=>props.updateCounter('Change')}>Increase by {props.step}</button>
        </div>
    );
};

export default Buttons;