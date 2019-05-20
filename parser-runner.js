var antlr4 = require('antlr4');
var jsonLexer = require('./parser-files/JsonLexer').JsonLexer;
var jsonParser = require('./parser-files/JsonParser').JsonParser;
var jsonVisitor = require('./parser-files/JsonParserVisitor').JsonParserVisitor;
var jsonListener = require('./parser-files/JsonParserListener').JsonParserListener;
var ASTGenerator = require('./ASTGenerator').ASTGenerator;

function run() {
    return runAllTests();
}

function runSingleTest(test) {
    return runTest(test);
}

function runAllTests() {
    const examples = [
        'test1.js',
        'test2.js'
    ];

    const path = './tests/';
    return examples.map((exampleName) => {
        var example = require(path + exampleName);
        return runTest(example);
    });
}

function runTest(script) {
    var chars = new antlr4.InputStream(script);
    var lexer = new jsonLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new jsonParser(tokens);

    parser.buildParseTrees = true;
    var tree = parser.object(); // First parser rule

    var visitor = new jsonVisitor();
    return visitor.visitJson(tree);
}

module.exports = { run, runSingleTest };
