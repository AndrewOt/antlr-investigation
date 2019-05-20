// Generated from JsonParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by JsonParser.
function JsonParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

JsonParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
JsonParserListener.prototype.constructor = JsonParserListener;

// Enter a parse tree produced by JsonParser#json.
JsonParserListener.prototype.enterJson = function(ctx) {
};

// Exit a parse tree produced by JsonParser#json.
JsonParserListener.prototype.exitJson = function(ctx) {
};


// Enter a parse tree produced by JsonParser#key_value_pair.
JsonParserListener.prototype.enterKey_value_pair = function(ctx) {
};

// Exit a parse tree produced by JsonParser#key_value_pair.
JsonParserListener.prototype.exitKey_value_pair = function(ctx) {
};


// Enter a parse tree produced by JsonParser#key.
JsonParserListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by JsonParser#key.
JsonParserListener.prototype.exitKey = function(ctx) {
};


// Enter a parse tree produced by JsonParser#value.
JsonParserListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by JsonParser#value.
JsonParserListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by JsonParser#object.
JsonParserListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by JsonParser#object.
JsonParserListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by JsonParser#array.
JsonParserListener.prototype.enterArray = function(ctx) {
};

// Exit a parse tree produced by JsonParser#array.
JsonParserListener.prototype.exitArray = function(ctx) {
};



exports.JsonParserListener = JsonParserListener;