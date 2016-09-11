describe('The DSL Store' , function() {
    let TestUtils = require('react-addons-test-utils');
    let React = require('react');
    let ReactDom = require('react-dom');
    let keyMirror = require('keymirror')
    let DslStore = require.requireActual('../../../src/stores/dslStore.js');
    let dStore;
    
    beforeEach(function(){
        dStore = TestUtils.renderIntoDocument(<DslStore />);
    });
    
    it('should ever be possible to getAllDsls()', function() {
       
        
    });
});