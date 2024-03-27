import './App.css';
import Button from './component/Button/Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Time">00.00.00</div>
        <div>
          <Button color='green' text='start'/>
          <Button color='red' text='stop'/>
          <Button color='grey' text='reset'/>
        </div>
      </header>
    </div>
  );
}

export default App;
