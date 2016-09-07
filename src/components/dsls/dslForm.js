"use strict";

var React = require('react');
var Input = require('../common/textInput');
var AceEditor = require('react-ace-wrapper');
var brace = require('brace');

require('brace/mode/javascript');
require('brace/theme/monokai');


var DslForm = React.createClass({
 propTypes: {
   dsl: React.PropTypes.object.isRequired,
   onSave: React.PropTypes.func.isRequired,
   onChange: React.PropTypes.func.isRequired,
   errors: React.PropTypes.object  
 },   
    
 render: function() { 
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
                
                    <AceEditor 
                        name="spec"    
                        mode="javascript"
                        theme="monokai"
                        value={this.props.dsl.spec}
                        onChange={this.props.onChange}
                      />
                
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
    );
 }
});
module.exports = DslForm;