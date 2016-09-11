describe('TextInput Component' , function() {
    describe('The component must be rendered properly' , function() {
        let TestUtils = require('react-addons-test-utils');
        let React = require('react');
        let ReactDom = require('react-dom');
        let TextInput = require('../../../../src/components/common/textInput.js');
        let textInputPage;
        
        let properties = {
            name: 'Example',
            label: 'ExampleLabel',
            onChange: function(e){
                console.log(e.target.value)
            }
        };
        
        beforeEach(function(){
            textInputPage = 
            TestUtils.renderIntoDocument(<TextInput 
                                          name={properties.name}
                                          label={properties.label}
                                          onChange={properties.onChange}
                                          />);        
        });
        
        afterEach(function(done){
            ReactDom.unmountComponentAtNode(document.body);
            document.body.innerHTML = "";               
            setTimeout(done);
        });
        
        it('should be possibile to initialize the label field', function(){
            let label = TestUtils.findRenderedDOMComponentWithTag(textInputPage, 'label');
            expect(label.textContent).toEqual(properties.label);
        });
        
        it('should be sure that the value field is not set', function(){
            let input = TestUtils.findRenderedDOMComponentWithTag(textInputPage, 'input');
            expect(input.value).toEqual("");
        });
    });
});