import React from "react";

function Previewer(props) {
  return <iframe srcDoc={props.previewText} id="preview" title="preview" />;
}

export default Previewer;
