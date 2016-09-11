const assert = require('assert');

const dslData = require('../src/api/dslData');
const api = require('../src/api/dslApi');

describe('API Testing', function(){ 
  describe('#getAllDsls()', function() {
    it('should return the total number of elements', function() {
      let numElementsInDslData = dslData['dsls'].length;
      let numElemsReturnedFromAPI =(api.getAllDsls()).length; 
      assert.equal(numElemsReturnedFromAPI, numElementsInDslData);
    });
  }); 
  
  describe('#getDslById()', function() {
    it('should return an existing DSL by the given ID info', function(){
      let dsl = api.getDslById('1');
      let id = dsl['id'];
      assert.equal(id, '1');
    });    
  });
  
  describe('#saveDsl()', function(){
     api.saveDsl({
        id: '',
        name: 'DSLNew',
        spec: 'document(name: \'newCollectionTest\'){}'
      });
      
      
      it('should save the DSL into the collection', function(){
        assert.equal(dslData.dsls.length, 4);
      });
      
      it('should provide a consistent name after saving', function() {
        let name = 'DSLNew';
        assert.equal(dslData.dsls[3].name, name);
      });
      
      it('should provide a consistent specification after saving', function(){
        let spec = 'document(name: \'newCollectionTest\'){}';
        assert.equal(dslData.dsls[3].spec,spec);
      });
    });
    
   describe('#removeDSL()' , function() {
     it('should delete from the collection the DSL identified by ID', function(){
       let d = api.deleteDsl('1');
       assert.strictEqual(d, undefined);     
      });
      
      it('should not be possible to find the previously deleted ID', function(){
        let d = api.getDslById('1');
        assert.strictEqual(d, undefined);
      });
   });
   
   describe('#empty()', function(){
     describe('requiring the all DSLs from an empty collection', function() {     
       it ('should return undefined', function(){ 
           api.deleteDsl('0');
           api.deleteDsl('2');
           let collection = api.getAllDsls();
           let id = collection[0].id;
           api.deleteDsl(id);
        assert.strictEqual(api.getAllDsls(), undefined);   
       });
     });
     describe('getting the DSL by ID from an empty collection ' , function() {
      it ('should return undedined', function() {
        assert.strictEqual(api.getDslById('2'), undefined);
      });
     });
   });
   
  

}); 

