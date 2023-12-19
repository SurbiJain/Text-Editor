import React, { useState } from "react";

export default function Text(props) {
  const [text, setText] = useState("");
  function handleUponClick() {
    let newText = text.toUpperCase();
    setText(newText);
    if(newText === ""){props.alert("No text", "danger")} else
    props.alert("Text has been converted to uppercase", "success");
  }
  function handleDownonClick() {
    let newText = text.toLowerCase();
    setText(newText);
    if(newText === ""){props.alert("No text", "danger")} else {props.alert("Text has been converted to lowercase", "success")}
  }
  function clearText() {
    let newText = "";
    setText(newText);
    {props.alert("Text has been converted to lowercase", "success")}
  }

  function handleUponChange(event) {
    setText(event.target.value);
  }

  function wordCount() {
    let Count = text.trim();
    Count = Count.split(" ");
    Count = Count.filter(function (elm) {
     return elm != "";
    });
    return Count.length;
  }
  function removeSpace() {
   
    let Count = text.split(" ");
    Count = Count.filter(function (elm) {
      return elm != "";
    });
    
    setText(Count.join(" "));
    if(Count === ""){props.alert("No text", "danger")} else {props.alert("Space has been removed", "success")}
  }

  function totalTime() {
    let totalTime = 0.08 * wordCount();
    return totalTime;
  }
  function firstLetter(){
    let letterA = text.charAt(0).toUpperCase() + text.slice(1);
    setText(letterA)

  }
  function copyText(){
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
  }

  return (
    <div>
    <div className="container">
      <h1>{props.title}</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder={props.value}
          id="myBox"
          value={text}
          rows="10"
          onChange={handleUponChange}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleUponClick}
      >
        Convert to Uppercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleDownonClick}
      >
        Convert to Lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={clearText}
      >
        Clear Text
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={removeSpace}
      >
        Remove Extra Space
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={firstLetter}
      >
        Capitalization
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={copyText}
      >
        Copy
      </button>

      <h3>Your Text summary</h3>
      <p>
        {" "}
        Total {text.length} characters {wordCount()} words
      </p>
      <p>It takes {totalTime()} minutes to read this paragraph</p>
      <h2>Preview</h2>
      <p>{text.length>0? text : "Enter you Text to preview it here"}</p>
      </div>
    </div>
  );
}
