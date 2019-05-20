// Entry point to call the file copier
var fileUtil = require('./file-util.js');

exports.copy = (() => {
    console.log('COPYING PARSER FILES ----------------');
    fileUtil.copy();
})();
