"use strict";
// This file is mocking a web API. Hard coding. 
// This would be performed on the server in a real app. Just stubbing in.

var dsls = require('./dslData').dsls;
var _ = require('lodash');

/**
 *  @description Generate an Id for a new DSL spec. The "id" is retrieved by the number of
 * 				 existing dsls plus 1. 
 * 
 *  @return a value given by the arithmetic expression into the return statement.
 * 
 * */
var _generateId = function() {
	return Math.random();
};

/**
 * @description Generate a clone of an existing dsl item. 
 * @how-to      Given an existing item we have to parse it to obtain its value. After that 
 * 				we have to convert to a string the given before item value. 				
 *
 * @return A cloned copy so that the item is passed by value instead of by reference. 
 */
var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); 
};

/**
 * @description The DslsApi is a mock API for manipolating DSLs. 
 *              It exposes common methods - CRUD like operations.
 * @exposed-methods 
 * 				- getAllDsls 				 
 * 				- getDslById
 * 				- saveDsl
 * 				- deleteDsl
*/
var DslApi = {
	getAllDsls: function() {
		return _clone(dsls); 
	},

	getDslById: function(id) {
		var dsl = _.find(dsls, {id: id});
		return _clone(dsl);
	},
	
	saveDsl: function(dsl) {
				
		if (dsl.id) {
			/**
			 * @description The next two lines of code are doing the following 
			 * 				behavior: 
			 * 				_.indexOf is looking for an index into the array -dsls-
			 * 				of the given value passed by _.find that returns the value.
			 * 				The last line tries to overwrite the item into the given existingDslIndex.
			 * 				Remember: only the first occurence. 
			 * 																 * 			
			 * */
			var existingDslIndex = _.indexOf(dsls, _.find(dsls, {id: dsl.id})); 
			dsls.splice(existingDslIndex, 1, dsl);
		} else {
			//Just simulating creation here.
			//Cloning: returned copy is passed by value rather than by reference.
			dsl.id = JSON.stringify(_generateId());
			dsls.push(dsl);
		}

		return _clone(dsl);
	},

	deleteDsl: function(id) {
		_.remove(dsls, { id: id});
	}
};

module.exports = DslApi;