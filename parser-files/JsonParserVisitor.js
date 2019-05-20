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
JsonParserVisitor.prototype.sourceString = "";

// Visit a parse tree produced by JsonParser#json.
JsonParserVisitor.prototype.visitJson = function(ctx) {
  this.sourceString = ctx.start.source[1].strdata;
  const rootNode = {
    type: "json",
    value: "",
    children: this.removeUndefFromArray(this.visitChildren(ctx)),
  };
  
  return { ast: rootNode };
};


// Visit a parse tree produced by JsonParser#key_value_pair.
JsonParserVisitor.prototype.visitKey_value_pair = function(ctx) {
  const currentKeyVal = {
    type: "keyValuePair",
    value: "",
    children: this.removeUndefFromArray(this.visitChildren(ctx)),
  };

  if (currentKeyVal)
    return currentKeyVal;
};


// Visit a parse tree produced by JsonParser#key.
JsonParserVisitor.prototype.visitKey = function(ctx) {
  const key = {
    type: "key",
    value: this.sourceString.substring(ctx.start.start, ctx.start.stop + 1),
    children: [],
  };

  if (key)
    return key;
};


// Visit a parse tree produced by JsonParser#value.
JsonParserVisitor.prototype.visitValue = function(ctx) {
  const value = {
    type: "value",
    value: this.sourceString.substring(ctx.start.start, ctx.start.stop + 1),
    children: [],
  };
  
  if (value)
    return value;
};


// Visit a parse tree produced by JsonParser#object.
JsonParserVisitor.prototype.visitObject = function(ctx) {
  const object = {
    type: "object",
    value: "",
    children: this.removeUndefFromArray(this.visitChildren(ctx)),
  };

  if (object)
    return object;
};


// Visit a parse tree produced by JsonParser#array.
JsonParserVisitor.prototype.visitArray = function(ctx) {
  const array = {
    type: "array",
    value: this.sourceString.substring(ctx.start.start, ctx.start.stop + 1),
    children: [],
  };

  if (array)
    return array;
};

JsonParserVisitor.prototype.removeUndefFromArray = function (arr) {
  if (arr) {
    return arr.filter((thing) => {
      return thing; // Filters out the undefineds because undefined is falsey.
    });
  }
};

exports.JsonParserVisitor = JsonParserVisitor;
