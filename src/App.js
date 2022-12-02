import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='app-top-header'>Bear Blog</h1>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bear Blog
        </p>
       
        <Link to="/profile">
          <button className = "app_bottomButton">
            Your  
          </button>
        </Link>
       
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
