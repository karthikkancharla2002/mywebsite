//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Header></Header> */}
      <Router>
      <Routes />
    </Router>
      <h1>Hello! I am Karthik and welcome to my website. It is under construction, so please visit later.</h1>
    </div>
  );
}

export default App;
