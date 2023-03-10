import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';
import App from './App';
import Navbar from './Navbar';
import About from './components/About';
import TextBox from './components/TextBox';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar/>
    <About/>
    <TextBox/> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
