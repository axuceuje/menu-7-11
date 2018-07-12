'use strict';
const rcmd = require('./index.js');
const assert = require('assert');
console.log(typeof rcmd.recommend);
const result = rcmd.recommend();
console.log(result);
assert.ok(result);
console.log('テストが正常に完了しました');