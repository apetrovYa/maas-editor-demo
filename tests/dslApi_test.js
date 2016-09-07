const assert = require('assert');

describe('API Testing', function(){
  const dslData = require('../src/api/dslData');
  const api = require('../src/api/dslApi');
  
  describe('Getting all DSLs', function() {
    it('should return the same number of elements', function() {
      assert.equal(dslData['dsls'].length, (api.getAllDsls()).length);
    });
  }); 
  
  describe('Getting a DSL by Id', function() {
    it('should return a legal existing id', function(){
      let dsl = api.getDslById('1');
      let id = dsl['id'];
      assert.equal(id, '1');
    });    
  });
  
  describe('Save a new DSL into the existinng collection of DSLs', function(){
    it('should return the new size of the collection increased by 1', function(){
      let dsl = {
        id: '',
        name: 'DSLNew',
        spec: 'document(name: \'newCollectionTest\'){}'
      };
      
      api.saveDsl(dsl);
      assert.equal(dslData.dsls.length, 4);
      
      // ------------------------------------------------
      let dslnew = api.getDslById(4);
      let id = dsl['id'];
      let name = dsl['name'];
      
      describe('Id of the new inserted DSL', function() {
        it('should return the id of new inserted dsl', function(){
          assert.equal(id, 4);});
        });
      });
    
      describe('The name of the new inserted DSl' , function() {
        if('should be ', function() {
          assert.equal(name, 'DSLNew');
       });
      });
    
      describe('The name of the new inserted DSl' , function() {
        if('should be different by', function() {
          assert.equal(name, 'DSLOld');
        });
      });
  });  
});