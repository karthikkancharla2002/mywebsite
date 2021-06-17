//import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/index';
import Routes from './routes';
import { HashRouter} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

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
      <Navbar expand="lg" bg="dark" variant="dark">
        <div className="container">
        <Navbar.Brand href="#home">Karthik Kancharla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">About Me</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1hRV98JtopqQmRxdi6AxcYGeqkru9rXmO/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link href="#/education">Education</Nav.Link>
            <Nav.Link href="#/skills">Skills</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
        
      <HashRouter>
      <Routes />
    </HashRouter>
      {/* <h1>Hello! I am Karthik and welcome to my website. It is under construction, so please visit later.</h1> */}
    </div>
  );
}

export default App;
