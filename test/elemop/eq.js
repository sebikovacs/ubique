var assert = require('assert');
var ubique = require('../../index.js');

suite('datatype',function () {
console.log('Testing datatype/eq ...');
test('eq', function (done) {



assert.deepEqual(ubique.eq(5,5),true);
assert.deepEqual(ubique.eq(5,[5,6,3]),[true,false,false]);
assert.deepEqual(ubique.eq(5,[[5,6],[3,5]]),[[true,false],[false,true]]);
assert.deepEqual(ubique.eq([5,6,3],5),[true,false,false]);
assert.deepEqual(ubique.eq([[5,6],[3,5]],5),[[true,false],[false,true]]);
assert.deepEqual(ubique.eq([5,6,3],[2,6,0]),[false,true,false]);
assert.deepEqual(ubique.eq([[5,6],[-1,2]],[[5,6],[3,5]]),[[true,true],[false,false]]);


done();
});
});


// <--- Auto-generated file based on comments inside the same filename in the LIB folder --->