describe('NotFoundPage Component', function(){
    describe('must be rendered properly' , function() {
        let TestUtils = require('react-addons-test-utils');
        let React = require('react');
        let NotFoundPage = require.requireActual('../../../src/components/notFoundPage.js');
        var ReactRouterContext = require('../../../testingHelpers/reactRouterContext.js'); 
        var notFoundPage;
    
        NotFoundPage = ReactRouterContext(NotFoundPage, {});
        
        beforeEach(function() {
            notFoundPage = TestUtils.renderIntoDocument(<NotFoundPage />);;  
        });
        
        it('should be rendered the h1 content properly', function(){
            let h1 = TestUtils.findRenderedDOMComponentWithTag(notFoundPage, 'h1');
            expect(h1.textContent).toEqual('Page not found');
        });
        
        it('should be rendered the p content properly', function() {
            let p = TestUtils.findRenderedDOMComponentWithTag(notFoundPage, 'p');
            expect(p.textContent).toEqual('Whoops! Sorry, there is nothing to see here.');
        });
        
        it('should be present an HTML element with a container className property', function() {
            let container = TestUtils.findRenderedDOMComponentWithClass(notFoundPage,'container');
            expect(container).not.toBeUndefined();
        });
        
        it('should be present an HTML element with a row className property ', function() {
            let row = TestUtils.findRenderedDOMComponentWithClass(notFoundPage,'row');
            expect(row).not.toBeUndefined();
        });
        
        it('should be present an img HTML element', function() {
            let img = TestUtils.findRenderedDOMComponentWithTag(notFoundPage,'img');
            expect(img).not.toBeUndefined();
            
            describe('the src property' , function() {
                it('should be equal to 404-page-not-found-design.jpg', function() {
                    expect(img.src).toEqual('images/404-page-not-found-design.jpg');
                });
            });
            
            describe('the alt property' , function() {
                it('should be equalt to Page not found image', function() {
                    expect(img.alt).toEqual('Page not found image');
                });
            });
            
        });
        
        
        
        
    });
});