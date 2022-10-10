import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CodeAcademy.lt React paskaita!
        </p>
        <a
          className="App-link"
          href="www.codeacademy.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeAcademy
        </a>
      </header>
    </div>
  );
}

export default App;
