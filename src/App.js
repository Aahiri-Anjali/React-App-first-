// import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import About from "./components/About";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TextBox from "./components/TextBox";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<TextBox/>} />
          <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
