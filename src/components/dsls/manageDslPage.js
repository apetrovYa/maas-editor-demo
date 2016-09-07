"use strict";

var React = require('react');
var Router = require('react-router');
var DslForm = require('./dslForm');
var DslActions = require('../../actions/dslActions');
var DslStore = require('../../stores/dslStore');
var toastr = require('toastr');


var ManageDslPage = React.createClass({
 mixins: [
     Router.Navigation
 ], 
 statics: {
     willTransitionForm: function(transition, component) {
         if (component.state.dirty && !confirm('Leave without saving?')) {
             transition.abort();
         }
     }
 },
 getInitialState: function() {
    return {
        dsl: {id: '', name: '', spec: ''},
        errors: {},
        dirty: false
    };   
 },
 componentWillMount: function() {
   var dslId = this.props.params.id;
   if(dslId) {
       this.setState({dsl: DslStore.getDslById(dslId)});
   }  
 },
 
setDslState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.dsl[field] = value;
    return this.setState({dsl: this.state.dsl});
},
dslFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};
    
    if (this.state.dsl.name.length < 3) {
    this.state.errors.name = 'Name must be at least 3 characters.';
	formIsValid = false;
    }
    
    this.setState({errors: this.state.errors});
    return formIsValid;
},
saveDsl: function(event) {
    event.preventDefault();
    if (!this.dslFormIsValid()) {
        return;
    }
    
    if (this.state.dsl.id) {
        DslActions.updateDsl(this.state.dsl);
    } else {
        DslActions.createDsl(this.state.dsl);
    }
    
    this.setState({dirty: false});
    toastr.success('DSL Saved');
    this.transitionTo('dsls');
},
 render: function() { 
  
     return (
         <DslForm 
            dsl={this.state.dsl}
            onChange={this.setDslState}
            onSave={this.saveDsl}
            errors={this.state.errors}
         />
    
    );
 }
});
module.exports = ManageDslPage;