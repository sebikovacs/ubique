var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/cov ...');
test('cov', function (done) {

var c = [5,6,3];
var d = [0.5,-3,2.3];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

assert.deepEqual(ubique.cov(c),2.333333333333333);
assert.deepEqual(ubique.cov(c,d),[[2.333333333333333,-3.833333333333333],[-3.833333333333333,7.263333333333333]]);
assert.deepEqual(ubique.cov(c,d,0),[[1.5555555555555554,-2.5555555555555554],[-2.5555555555555554,4.8422222222222215]]);
assert.deepEqual(ubique.cov(e,f),[[10.916666666666666,2],[2,2]]);
assert.deepEqual(ubique.cov(l),[[0.3333333333333333,1.1666666666666665,0],[1.1666666666666665,6.333333333333334,-3],[0,-3,4]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->