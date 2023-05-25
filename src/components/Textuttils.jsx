import React, {useState} from 'react';

export default function Textuttils(props) {

    const [text, settext] = useState('');

    const handleUpClick=()=>{
        // console.log('Upper Case Was Clicked');
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleLoClick=()=>{
        // console.log('Lower Case Was Clicked');
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const handleOnSpace=()=>{
        // console.log('Lower Case Was Clicked');
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
    }
    const handleOnClear=()=>{
        // console.log('Lower Case Was Clicked');
        let newtext ="";
        settext(newtext);
    }
    const handleOnSpeak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange=(event)=>{
        // console.log('Hello Oncahnge');
        settext(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText (text.value);
    }

  return (
    <>
        <div className="container">
            <div className="mb-3">
                <h1 className='my-3'>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"dark":"light",color:props.mode==="dark"? "dark":"light"}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert To Upper Case</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert To Smaller Case</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleOnSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleOnClear}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleOnSpeak}>Speak</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-2">
            <h2>Text Summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Some Text Here!"}</p>
        </div>
    </>
  )
}
