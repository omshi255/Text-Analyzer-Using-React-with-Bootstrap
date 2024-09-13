import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
       
        let newText = text.toUpperCase()
        seText(newText)
    }
    const handleLowClick
        = () => {
            let newText = text.toLowerCase()
            seText(newText)
        }
    const handleOnChange = (event) => {
        console.log("onchange");
        seText(event.target.value);
       

    }
    const handleClearClick = (event) => {
        seText('');
    }
      
const [text, seText] = useState('');

return (
    <>
        <div className="container"></div>
        <div>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
            </div>
          
            <button className="btn btn-primary btn-block  " onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-success mx-3 btn-block  " onClick={handleLowClick} >Convert to LowerCase</button>
            <button className="btn btn-danger mx-2 btn-block " onClick={handleClearClick} >Remove the text</button>
         
        </div>
        <div className="container my-4">
            <h2>  Your Text Summary</h2>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p> how much this text consumed time? {0.008 + text.split("").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
)
}
