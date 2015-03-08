var assert = require('assert');
var ubique = require('../../index.js');

suite('stats',function () {
console.log('Testing stats/kurtosis ...');
test('kurtosis', function (done) {

var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

assert.deepEqual(ubique.kurtosis(x) // 3.03758,3.0375811348880486);
assert.deepEqual(ubique.kurtosis(x,0) // 4.03072,4.0307237920342285);
assert.deepEqual(ubique.kurtosis(z) // [[3.03758, 1.39764]],[[3.0375811348880486,1.397642467111859]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->