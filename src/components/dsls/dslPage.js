"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var DslStore = require('../../stores/dslStore');
var DslActions = require('../../actions/dslActions');
var DslList = require('./dslList');

var DslPage = React.createClass({
 getInitialState: function() {
   return {
     dsls: DslStore.getAllDsls()  
   }; 
 },
 
 componentWillMount: function() {
     DslStore.addChangeListener(this._onChange);
 },
 
 componentWillUnmount: function() {
     DslStore.removeChangeListener(this._onChange);
 },
 
 _onChange: function() {
     this.setState({dsls: DslStore.getAllDsls()});
 },
 render: function() { 
     return (
        <div>
            <h1>DSLs</h1>
            <Link to="addDsl" className="btn btn-default">Add DSL</Link>
            <DslList dsls={this.state.dsls} />
        </div> 
    );
 }
});
module.exports = DslPage;