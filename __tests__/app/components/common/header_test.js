describe('Header Component' , function() {
    describe('must be initialized and rendered properly ' , function() {
        let TestUtils = require('react-addons-test-utils');
        let React = require('react');
        let ReactDom = require('react-dom');
        let HeaderPage = require.requireActual('../../../../src/components/common/header.js');
        var ReactRouterContext = require('../../../../testingHelpers/reactRouterContext.js');
        let headerPage;
       
       
        HeaderPage = ReactRouterContext(HeaderPage, {});
        
        beforeEach(function(){
          headerPage = TestUtils.renderIntoDocument(<HeaderPage />);
        });
        
         afterEach(function(done) {
            ReactDom.unmountComponentAtNode(document.body);
            document.body.innerHTML = "";               
            setTimeout(done);
        }); 
        
        it('should be rendered the nav-bar and properly initialized', function() {
           let nav = TestUtils.findRenderedDOMComponentWithTag(headerPage, 'nav');
           expect(nav).not.toBeUndefined();
        });
        
        it('should be rendered the header logo', function() {
           let img = TestUtils.findRenderedDOMComponentWithTag(headerPage, 'img');
           expect(img).not.toBeUndefined(); 
        });
        
        it('should guarantee that the src property is pointing correctly', function(){
            let img = TestUtils.findRenderedDOMComponentWithTag(headerPage, 'img');
            expect(img.src).toEqual('images/maas.png');
        });
    });
});