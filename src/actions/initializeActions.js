"use strict";
var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var DslApi = require('../api/dslApi');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                dsls: DslApi.getAllDsls()
            }
        });
    }
};

module.exports = InitializeActions;