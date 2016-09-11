"use strict";

var React = require('react');

var Editor = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired
    },
    
    
    componentDidMount: function() {
        
      var editor = ace.edit("editor");
            editor.setTheme("ace/theme/github");
            editor.getSession().setMode("ace/mode/dsl");
            editor.setHighlightActiveLine(true);
            editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true
            });
            editor.$blockScrolling = Infinity;
    
            
            editor.setValue(this.props.value);  
    },
       
    render: function () {
        var editorStyle = { height: 500 };
        return (
           <div className="container-fluid">
                <div id="editor" 
                     style={editorStyle} 
                     className="row"
                     >
                </div>
            </div>
        );
    }

});

module.exports = Editor;