import logo from './logo.svg';
import './App.css';

import UserInput from './components/InputOption1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Symbio: Poker Challenge</h1>
        <div>
          <UserInput />
        </div>
      </header>
    </div>
  );
}

export default App;
