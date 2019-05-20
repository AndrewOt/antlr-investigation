// Entry point to call the parser runner
var runner = require('./parser-runner');

exports.execute = (function() {
    console.log('PARSER OUTPUT --------------------------');
    console.log(runner.run()[1].ast.children[0]);
})();
