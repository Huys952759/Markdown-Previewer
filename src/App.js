import React, { Component } from 'react';
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import marked from 'marked';
import './App.css'

marked.setOptions({
  breaks: true,
});
const initialMarkdown = 
`# This is a Header 

## This is a sub header
### And this is a sub sub header

There is a inline code \`\`\`Math.random\`\`\`

The following is a function 
\`\`\`
function random(a, b) {
  return a + Math.floor(Math.random() * (b - a))
}
  
\`\`\`
>block code

this is a **bold** text

There's also a [links](https://www.google.ca) to Google, and
> Block Quotes!


The following is a list about my hobbies
1. football;
2. basketball;
3. reading


![React Logo w/ Text](https://goo.gl/Umyytc)
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialMarkdown,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }
  render() {
    return (
      <div id = 'main'>
        <h1 id = 'title'>Markdown Previewer</h1>
        <div id = 'markdown-previewer'>
        <Editor value = {this.state.markdown} handleChange = {this.handleChange} />
        <Previewer markdown = {marked(this.state.markdown)}/>
        </div>
      </div>
    );
  }
}

export default App;