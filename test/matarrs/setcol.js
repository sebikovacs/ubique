var assert = require('assert');
var ubique = require('../../index.js');

suite('matarrs',function () {
console.log('Testing matarrs/setcol ...');
test('setcol', function (done) {



assert.deepEqual(ubique.setcol([2,0],[[5,6,5],[7,8,-1]],0),[[2,6,5],[0,8,-1]]);
assert.deepEqual(ubique.setcol([9,21],[[5,6,5],[7,8,-1]],2),[[5,6,9],[7,8,21]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->