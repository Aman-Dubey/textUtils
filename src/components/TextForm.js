import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);

  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    const word = event.target.value;
    setText(word);
    setWord(word.length);
  };

  const onClickHandler = () => {
    //console.log(data.target.value);
    let newText = text.toUpperCase();
    //console.log(newText);
    props.showAlert("Changes to UpperCase", "primary");
    setText(newText);
  };

  const onClickLowerHandler = () => {
    let newText = text.toLowerCase();
    props.showAlert("Changes to LowerCase", "primary");
    setText(newText);
  };

  const onCopyHandler = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "danger");
  };

  const onRemoveSpaceHandler = () => {
    const letters = text.replace(/  +/g, " ");
    setWord(letters.length);
    setText(letters);
    props.showAlert("Removed extra spaces", "danger");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Please Enter Text here</h1>
        <div className="form-floating my-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            className="form-control"
            autoFocus="autofocus"
            value={text}
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={onChangeHandler}
          ></textarea>
        </div>

        <div className="btn btn-primary mx-2 my-1" onClick={onClickHandler}>
          Convert to UpperCase
        </div>
        <div
          className="btn btn-primary mx-2 my-1"
          onClick={onClickLowerHandler}
        >
          Convert to LowerCase
        </div>
        <div className="btn btn-primary mx-2 my-1" onClick={onCopyHandler}>
          Copy Text
        </div>
        <div
          className="btn btn-primary mx-2 my-1"
          onClick={onRemoveSpaceHandler}
        >
          Remove spaces
        </div>

        <h3>
          <strong>{word}</strong> Words Total
        </h3>
      </div>
    </>
  );
};

export default TextForm;
