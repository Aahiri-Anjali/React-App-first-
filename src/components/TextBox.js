import React,  {useState}  from 'react';
import PropTypes from "prop-types";


export default function TextBox(props) {
    const  [text,updateText] = useState('This is for demo');
    const clicked = () => {
      console.log('Clicked');
      updateText(text.toUpperCase());
    }
  
    const changedValue = (event)=>{
      updateText(event.target.value);
    }

  return (
    <>
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows={3} onChange ={changedValue}  />
      </div>
      <button className="btn btn-primary" onClick={clicked}>UpperCase</button>
      <p>{text.length} Charactes are in textbox</p>
      <p>{text.split(" ").length} Words are in textbox</p>
      </div>
    </>
  )
}



