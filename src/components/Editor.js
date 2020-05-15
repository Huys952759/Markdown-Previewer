import React from 'react';


function Editor(props) {
  return (
    <div id = 'left'>
      <div className = 'toolbar'>
        Editor
      </div>
      <textarea id = 'editor' value = {props.value} 
          onChange = {props.handleChange}>
      </textarea>
    </div>
  );
}

export default Editor;  