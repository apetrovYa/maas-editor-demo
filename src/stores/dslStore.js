"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _dsls = [];

var DslStore = assign({}, EventEmitter.prototype, {
 addChangeListener: function(callback) {
     this.on(CHANGE_EVENT, callback);
 },
 removeChangeListener: function(callback) {
     this.removeListener(CHANGE_EVENT, callback);
 },
 emitChange: function() {
     this.emit(CHANGE_EVENT);
 },
 getAllDsls: function() {
     return _dsls;
 },
 getDslById: function(id) {
     return _.find(_dsls, {id: id});
 }   
});

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE: 
                _dsls = action.initialData.dsls;
                DslStore.emitChange();
                break;
        case ActionTypes.CREATE_DSL: 
                _dsls.push(action.dsl);
                DslStore.emitChange();
                break;
        case ActionTypes.UPDATE_DSL:
                var existingDsl = _.find(_dsls, {id: action.dsl.id});
                var existingDslIndex = _.indexOf(_dsls, existingDsl);
                _dsls.splice(existingDsl, 1, action.dsl);
                DslStore.emitChange();
                break;
        case ActionTypes.DELETE_DSL: 
                _.remove(_dsls, function(dsl){
                   return dsl.id === action.id; 
                });                        
                DslStore.emitChange();
                break;
        default: // no op
    }
});

module.exports = DslStore;