
import './App.css';
import Heading from './componnets/Heading';
import Counter from './Counter';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading classValue ='heading' />
      </header>
      <Counter initValue={0}/>
    </div>
  );
}

export default App;
