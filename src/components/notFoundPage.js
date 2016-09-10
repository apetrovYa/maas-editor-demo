"use strict";
var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
 render: function() { 
 
   
   return (
    <div>
      <h1>Page not found</h1>
      <p>Whoops! Sorry, there is nothing to see here.</p>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
              <img src="images/404-page-not-found-design.jpg" 
                    alt="Page not found image"
                    className="img-circle"
                     />
           </div>    
        </div>
        
      </div> 
      <Link to="app">Back to Home</Link> 
    </div>
  );
 }
});
module.exports = NotFoundPage;
