import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Footer from "./components/Footer";
import marked from "marked";
import Toolbar from "./components/Toolbar";

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" href="${href}">${text}</a>`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      markdedText: "",
      previewText: "",
      isResizeEditor: false,
      isResizePreviewer: false
    };
    this.editorOnChange = this.editorOnChange.bind(this);
    this.resizeOnClick = this.resizeOnClick.bind(this);
  }

  resizeOnClick(e) { 
    const resizeMe = e.target.name;
    this.setState({
      [resizeMe]: !this.state[resizeMe]
    });
  }

  componentWillMount() {
    let html = marked(text, { renderer: renderer, breaks: true });
    this.setState({
      markdedText: text,
      previewText: html
    });
  }
  editorOnChange(e) {
    let txtEditor = e.target.value;
    let preview = marked(txtEditor, { renderer: renderer, breaks: true });
    this.setState({
      markdedText: txtEditor,
      previewText: preview
    });
  }
  render() {
    return (
      <main className={`grid-container ${this.state.isResizeEditor || this.isResizePreviewer ? "animation-is-running-hide-main-grid" : undefined}`}>
        <Header />
        <section id="editor-container" className={this.state.isResizeEditor ? "animate-editor-previewer-full-size" : undefined}>
          <Toolbar toolbarTitle="Editor" resize={this.resizeOnClick} name="isResizeEditor" isResize={this.state.isResizeEditor}/>
          <Editor
            markedText={this.state.markdedText}
            onChange={this.editorOnChange}

          />
        </section>
        <section id="previewer-container" className={this.state.isResizePreviewer ? "animate-editor-previewer-full-size" : undefined}>
          <Toolbar toolbarTitle="Previewer" 
          resize={this.resizeOnClick} name="isResizePreviewer" isResize={this.state.isResizePreviewer}/>
          <Previewer previewText={this.state.previewText} />
        </section>

        <Footer />
      </main>
    );
  }
}
const text =
 `# Heading level 1
  ## Heading level 2
  a link [google](https://www.google.com)  
  some code \`<html>title</html>}\`
  Love **is** bold  
  This text is ***really important***.  
  I really like using Markdown.  
  I think I'll use it to format all of my documents from now on.   
  Italicized text is the *cat's meow*.  
  > Dorothy followed her through many of the beautiful rooms in her castle.  
  - First item
  - Second item
  - Third item
  - Fourth item   
     \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  ![React logo](https://dl.dropboxusercontent.com/s/39bi491qprkfpd9/react_logo.png) `
  ;

export default App;
