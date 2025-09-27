import React, { useState } from 'react';

export default function TextForm(props) {
    let [text, setText] = useState("");
    const handleUppercaseClick = () => {
        setText(text.toUpperCase());
    };

    const handleLowercaseClick = () => {
        setText(text.toLowerCase());
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
        <div className="container">
            <h4>{props.heading}</h4>
            <div className="mb-3">
                <textarea className="form-control" rows="8" value={text} onChange={handleChange}></textarea>
            </div>
            <button className="btn btn-primary me-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>
            <button className="btn btn-primary me-2" onClick={handleLowercaseClick}>Convert to Lowercase</button>
            <button className="btn btn-secondary" onClick={() => setText("")}>Reset</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>
                {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
            </p>
            <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    );
}
 
