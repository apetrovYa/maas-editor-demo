"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
 render: function() { 
   return (
    <div className="jumbotron">
      <h1>Welcome Geek!</h1>
      <p>Are you ready to write a new DSL?</p>
      <Link to="addDsl" className="btn btn-success">Write new DSL</Link>
    </div>
  );
 }
});
module.exports = Home;