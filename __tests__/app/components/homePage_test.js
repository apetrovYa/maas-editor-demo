

describe('HomePage Component', function(){
    describe('must be rendered properly' , function() {
        let TestUtils = require('react-addons-test-utils');
        let React = require('react');
        let ReactDom = require('react-dom');
        let HomePage = require.requireActual('../../../src/components/homePage.js');
        var ReactRouterContext = require('../../../testingHelpers/reactRouterContext.js');
        let homePage;
       
       
        HomePage = ReactRouterContext(HomePage, {});
        
        beforeEach(function(){
          homePage = TestUtils.renderIntoDocument(<HomePage />);
        });
        
         afterEach(function(done) {
            ReactDom.unmountComponentAtNode(document.body);
            document.body.innerHTML = "";               
            setTimeout(done);
        });        
        
        it('should render properly the jumbotron container', function(){
            let jumbotron = TestUtils.findRenderedDOMComponentWithClass(homePage,'jumbotron');
            expect(jumbotron).not.toBeUndefined();
        });
                
        it('should render properly the h1 element ', function() {
            let h1 = TestUtils.findRenderedDOMComponentWithTag(homePage, 'h1');
            expect(h1.textContent).toEqual('Welcome Geek!');
        });
        
        it('should render properly the p element', function() {
            let p = TestUtils.findRenderedDOMComponentWithTag(homePage, 'p');
            expect(p.textContent).toEqual('Are you ready to write a new DSL?');
        });
       
    });
});