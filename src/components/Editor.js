import React from "react";

function Editor(props) {
  return (
    <textarea id="editor" value={props.markedText} onChange={props.onChange} />
  );
}

export default Editor;
