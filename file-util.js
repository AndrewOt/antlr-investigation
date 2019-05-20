// Utility for copying the parser files from the generator.
var fileSystem = require('fs');

const fileNames = [
    'JsonLexer.interp',
    'JsonLexer.js',
    'JsonLexer.tokens',
    'JsonParser.interp',
    'JsonParser.js',
    'JsonParser.tokens',
    'JsonParserListener.js',
    'JsonParserVisitor.js'
];

const srcFilePrefix = '../JSON/';
const srcDestPrefix = './parser-files/';

function copy() {
    fileNames.forEach((file) => {
        const src = srcFilePrefix + file;
        const dest = srcDestPrefix + file;
        fileSystem.copyFile(src, dest, (error) => {
            if (error)
                throw error;
            console.log(src, 'copied to ', dest);
        });
    });
}

module.exports = { copy };
