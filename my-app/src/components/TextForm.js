import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]); // History of text for undo
  const [future, setFuture] = useState([]); // Future stack for redo

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    saveToHistory(newText);
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    saveToHistory(newText);
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleclearclick = () => {
    saveToHistory("");
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleReverseClick = () => {
    let newText = text.split("").reverse().join("");
    saveToHistory(newText);
    setText(newText);
    props.showAlert("Text reversed!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        props.showAlert("Text copied to clipboard!", "success");
      })
      .catch(() => {
        props.showAlert("Failed to copy text!", "danger");
      });
  };

  const handlePasteClick = () => {
    navigator.clipboard
      .readText()
      .then((clipboardText) => {
        saveToHistory(clipboardText);
        setText(clipboardText);
        props.showAlert("Text pasted!", "success");
      })
      .catch(() => {
        props.showAlert("Failed to read clipboard contents!", "danger");
      });
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    saveToHistory(newText);
    setText(newText);
    props.showAlert("Text capitalized!", "success");
  };

  const handleSentenceCaseClick = () => {
    let newText = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    saveToHistory(newText);
    setText(newText);
    props.showAlert("Text converted to sentence case!", "success");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    saveToHistory(newText);
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const saveToHistory = (newText) => {
    setHistory([...history, text]);
    setFuture([]); // Clear redo stack
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastText = history.pop();
      setFuture([text, ...future]);
      setText(lastText);
      setHistory([...history]);
      props.showAlert("Undone the last change!", "info");
    } else {
      props.showAlert("No more changes to undo.", "warning");
    }
  };

  const handleRedo = () => {
    if (future.length > 0) {
      const nextText = future.shift();
      setHistory([...history, text]);
      setText(nextText);
      setFuture([...future]);
      props.showAlert("Redo completed!", "info");
    } else {
      props.showAlert("No more changes to redo.", "warning");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="textarea-container">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <div className="button-container">
          <button className="btn" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn" onClick={handleLoClick}>
            Convert To Lowercase
          </button>
          <button className="btn" onClick={handleclearclick}>
            Clear Text
          </button>
          <button className="btn" onClick={handleReverseClick}>
            Reverse Text
          </button>
          <button className="btn" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn" onClick={handlePasteClick}>
            Paste Text
          </button>
          <button className="btn" onClick={handleCapitalizeClick}>
            Capitalize Text
          </button>
          <button className="btn" onClick={handleSentenceCaseClick}>
            Sentence Case
          </button>
          <button className="btn" onClick={handleRemoveExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn" onClick={handleUndo}>
            Undo
          </button>
          <button className="btn" onClick={handleRedo}>
            Redo
          </button>
        </div>
      </div>
      <div className="container my-3 text-summary">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length > 0).length} words and {text.length} characters
        </p>
        <p>{(0.008 * text.split(/\s+/).filter((element) => element.length > 0).length).toFixed(2)} minutes read</p>
      </div>
    </>
  );
}
