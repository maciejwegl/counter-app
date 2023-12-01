const Buttons = (props) => {
    return (
        <div className="buttons">
            <button onClick={()=>props.updateCounter('Add')}>Add</button>
            <button onClick={()=>props.updateCounter('Reinit')}>Reinit</button>
            <button onClick={()=>props.updateCounter('Reset')}>Reset</button>
        </div>
    );
};

export default Buttons;