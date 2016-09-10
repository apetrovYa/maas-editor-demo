"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Editor = require('../editor/editorDsl');

var DslForm = React.createClass({
 propTypes: {
   dsl: React.PropTypes.object.isRequired,
   onSave: React.PropTypes.func.isRequired,
   onChange: React.PropTypes.func.isRequired,
   errors: React.PropTypes.object
 },
 render: function() {
     // style the margin-top of the button
     var styleButton = {
        marginTop: 20
     };
     
     return (
            <form>
                <h1>Manage DSL</h1>
                <Input
                    name="name"
                    label="DSL Name"
                    value={this.props.dsl.name}
                    onChange={this.props.onChange}
                    error={this.props.errors.name}
                />
                
               <Editor
                    name="spec"
                    value={this.props.dsl.spec}
                /> 
               
           <input type="submit" 
                  value="Save" 
                  className="btn btn-default" 
                  style={styleButton} 
                  onClick={this.props.onSave} />
           </form>
        );
    }
});
module.exports = DslForm;
 