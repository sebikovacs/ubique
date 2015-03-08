var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/hurst ...');
test('hurst', function (done) {

var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

assert.deepEqual(ubique.hurst(x),0.3440590389509703);
assert.deepEqual(ubique.hurst(x,1),0.3440590389509703);
assert.deepEqual(ubique.hurst(ubique.cat(1,x,y)),[[0.3440590389509703,0.5153097350177327]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->