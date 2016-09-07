"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var DslApi = require('../api/dslApi'); 
var ActionTypes = require('../constants/actionTypes'); 

var DslActions = {
    createDsl: function(dsl) {
        var newDsl = DslApi.saveDsl(dsl);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_DSL,
            dsl: newDsl
        });
    },
    updateDsl: function(dsl) {
        var updatedDsl = DslApi.saveDsl(dsl);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_DSL,
            dsl: updatedDsl
        });
    },
    deleteDsl: function(id) {
        DslApi.deleteDsl(id);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_DSL,
            id: id
        });
    }
};
module.exports = DslActions;  