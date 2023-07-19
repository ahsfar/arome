import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Navigation Bar */}
      <nav style={{ backgroundColor: 'white', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <img src={logo} alt="logo" height="30" />
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Arome</span>
      </nav>

      {/* Main Content */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', padding: '10px', borderTop: '1px solid #ccc' }}>
        © {new Date().getFullYear()} Arome. All rights reserved.
      </footer>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
