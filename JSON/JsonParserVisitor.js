// Generated from JsonParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by JsonParser.

function JsonParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

JsonParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
JsonParserVisitor.prototype.constructor = JsonParserVisitor;

// Visit a parse tree produced by JsonParser#json.
JsonParserVisitor.prototype.visitJson = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JsonParser#key_value_pair.
JsonParserVisitor.prototype.visitKey_value_pair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JsonParser#key.
JsonParserVisitor.prototype.visitKey = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JsonParser#value.
JsonParserVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JsonParser#object.
JsonParserVisitor.prototype.visitObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by JsonParser#array.
JsonParserVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};



exports.JsonParserVisitor = JsonParserVisitor;