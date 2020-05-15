import React from 'react';
import marked from 'marked'


const Previewer = (props) => {
    return (
        <div id = 'right'>
            <div className = 'toolbar'>Preview</div>
            <div  id = 'preview' dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />

        </div>
            
    );
};

export default Previewer;