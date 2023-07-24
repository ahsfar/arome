import logo from './logo.svg';
import './App.css';
import PersonComponent from './tainee/PersonComponent';
import CoursesSummaryComponent from './Courses/CoursesSummaryComponent';

function App() {
  return (
    <div className="App">

      {/* Navigation Bar */}
      <nav style={{ backgroundColor: 'white', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <img src={logo} alt="logo" height="30" />
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Arome</span>
      </nav>

  <div>
      <PersonComponent />
      <CoursesSummaryComponent /> {/* Add the new component here */}
      <CoursesSummaryComponent /> {/* Add the new component here */}

    </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'white', padding: '10px', borderTop: '1px solid #ccc' }}>
        © {new Date().getFullYear()} Arome. All rights reserved.
      </footer>

    </div>
  );
}

export default App;