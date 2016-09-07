"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var DslActions = require('../../actions/dslActions');
var toastr = require('toastr');

var DslList = React.createClass({
 propTypes: {
   dsls: React.PropTypes.array.isRequired  
 },
 
 deleteDsl: function(id, event) {
    event.preventDefault();
 
    DslActions.deleteDsl(id);
    toastr.success('DSL deleted'); 
 },
 render: function() { 
     var createDslRow = function(dsl) {
        return (
            <tr key={dsl.id}>
                <td><a href="#" onClick={this.deleteDsl.bind(this, dsl.id)}>Delete</a></td>
                <td><Link to="manageDsl" params={{id: dsl.id}}>{dsl.id}</Link></td>
                <td>{dsl.name}</td>
            </tr>
        );        
     };
     
     
     return (
        
        <div>
        <table className="table">
            <thead>
                <th></th>
                <th>ID</th>
                <th>Name</th>
            </thead>
            <tbody>
               {this.props.dsls.map(createDslRow, this)}
            </tbody>
            </table>
        </div> 
    
    );
 }
});
module.exports = DslList;