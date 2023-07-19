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

      <div className="profile-container">
      <div className="profile-content">
        <div className="profile-left">
          <img src={logo} className="profile-icon" alt="profile" />
        </div>
        <div className="profile-right">
          <h2>Name</h2>
          <p>Age: 30</p>
          <p>Email: example@example.com</p>
          <p>Location: City, Country</p>
          {/* Add any other profile information here */}
        </div>
      </div>
    </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', padding: '10px', borderTop: '1px solid #ccc' }}>
        © {new Date().getFullYear()} Arome. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
