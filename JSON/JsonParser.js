// Generated from JsonParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var JsonParserListener = require('./JsonParserListener').JsonParserListener;
var JsonParserVisitor = require('./JsonParserVisitor').JsonParserVisitor;

var grammarFileName = "JsonParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010o\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0005\u0002\u0010\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u001a\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u001e\n\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005\"\n\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005&\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005*\n\u0005\u0005\u0005",
    ",\n\u0005\u0003\u0006\u0003\u0006\u0007\u00060\n\u0006\f\u0006\u000e",
    "\u00063\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007=\n\u0007",
    "\f\u0007\u000e\u0007@\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007G\n\u0007\f\u0007\u000e\u0007J\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007Q\n\u0007\f\u0007\u000e\u0007T\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007[\n\u0007\f\u0007\u000e",
    "\u0007^\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007f\n\u0007\f\u0007\u000e\u0007i\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007m\n\u0007\u0003\u0007\u0002",
    "\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0002\u0002}\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0004\u0011\u0003\u0002\u0002\u0002\u0006\u0015\u0003",
    "\u0002\u0002\u0002\b+\u0003\u0002\u0002\u0002\n-\u0003\u0002\u0002\u0002",
    "\fl\u0003\u0002\u0002\u0002\u000e\u0010\u0005\n\u0006\u0002\u000f\u000e",
    "\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0003",
    "\u0003\u0002\u0002\u0002\u0011\u0012\u0005\u0006\u0004\u0002\u0012\u0013",
    "\u0007\n\u0002\u0002\u0013\u0014\u0005\b\u0005\u0002\u0014\u0005\u0003",
    "\u0002\u0002\u0002\u0015\u0016\u0007\u000f\u0002\u0002\u0016\u0007\u0003",
    "\u0002\u0002\u0002\u0017\u0019\u0007\u000f\u0002\u0002\u0018\u001a\u0007",
    "\u0007\u0002\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u0019\u001a\u0003",
    "\u0002\u0002\u0002\u001a,\u0003\u0002\u0002\u0002\u001b\u001d\u0007",
    "\r\u0002\u0002\u001c\u001e\u0007\u0007\u0002\u0002\u001d\u001c\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e,\u0003",
    "\u0002\u0002\u0002\u001f!\u0007\f\u0002\u0002 \"\u0007\u0007\u0002\u0002",
    "! \u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\",\u0003\u0002",
    "\u0002\u0002#%\u0005\f\u0007\u0002$&\u0007\u0007\u0002\u0002%$\u0003",
    "\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&,\u0003\u0002\u0002\u0002",
    "\')\u0005\n\u0006\u0002(*\u0007\u0007\u0002\u0002)(\u0003\u0002\u0002",
    "\u0002)*\u0003\u0002\u0002\u0002*,\u0003\u0002\u0002\u0002+\u0017\u0003",
    "\u0002\u0002\u0002+\u001b\u0003\u0002\u0002\u0002+\u001f\u0003\u0002",
    "\u0002\u0002+#\u0003\u0002\u0002\u0002+\'\u0003\u0002\u0002\u0002,\t",
    "\u0003\u0002\u0002\u0002-1\u0007\u0003\u0002\u0002.0\u0005\u0004\u0003",
    "\u0002/.\u0003\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000212\u0003\u0002\u0002\u000224\u0003\u0002\u0002\u000231\u0003",
    "\u0002\u0002\u000245\u0007\u0004\u0002\u00025\u000b\u0003\u0002\u0002",
    "\u000267\u0007\u0005\u0002\u00027m\u0007\u0006\u0002\u000289\u0007\u0005",
    "\u0002\u00029>\u0007\f\u0002\u0002:;\u0007\u0007\u0002\u0002;=\u0007",
    "\f\u0002\u0002<:\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002\u0002>",
    "<\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?A\u0003\u0002\u0002",
    "\u0002@>\u0003\u0002\u0002\u0002Am\u0007\u0006\u0002\u0002BC\u0007\u0005",
    "\u0002\u0002CH\u0007\r\u0002\u0002DE\u0007\u0007\u0002\u0002EG\u0007",
    "\r\u0002\u0002FD\u0003\u0002\u0002\u0002GJ\u0003\u0002\u0002\u0002H",
    "F\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002",
    "\u0002JH\u0003\u0002\u0002\u0002Km\u0007\u0006\u0002\u0002LM\u0007\u0005",
    "\u0002\u0002MR\u0007\u000f\u0002\u0002NO\u0007\u0007\u0002\u0002OQ\u0007",
    "\u000f\u0002\u0002PN\u0003\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002",
    "RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SU\u0003\u0002\u0002",
    "\u0002TR\u0003\u0002\u0002\u0002Um\u0007\u0006\u0002\u0002VW\u0007\u0005",
    "\u0002\u0002W\\\u0005\n\u0006\u0002XY\u0007\u0007\u0002\u0002Y[\u0005",
    "\n\u0006\u0002ZX\u0003\u0002\u0002\u0002[^\u0003\u0002\u0002\u0002\\",
    "Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]_\u0003\u0002\u0002",
    "\u0002^\\\u0003\u0002\u0002\u0002_`\u0007\u0006\u0002\u0002`m\u0003",
    "\u0002\u0002\u0002ab\u0007\u0005\u0002\u0002bg\u0005\f\u0007\u0002c",
    "d\u0007\u0007\u0002\u0002df\u0005\f\u0007\u0002ec\u0003\u0002\u0002",
    "\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002gh\u0003\u0002",
    "\u0002\u0002hj\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002jk\u0007",
    "\u0006\u0002\u0002km\u0003\u0002\u0002\u0002l6\u0003\u0002\u0002\u0002",
    "l8\u0003\u0002\u0002\u0002lB\u0003\u0002\u0002\u0002lL\u0003\u0002\u0002",
    "\u0002lV\u0003\u0002\u0002\u0002la\u0003\u0002\u0002\u0002m\r\u0003",
    "\u0002\u0002\u0002\u0010\u000f\u0019\u001d!%)+1>HR\\gl"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", "'['", "']'", "','", "'\"'", "'.'", 
                     "':'", null, null, null, null, null, "'null'" ];

var symbolicNames = [ null, "LEFT_CURLY", "RIGHT_CURLY", "LEFT_BRACKET", 
                      "RIGHT_BRACKET", "COMMA", "DOUBLE_QUOTE", "DOT", "COLON", 
                      "WS", "BOOLEAN", "NUMBER", "DECIMAL", "STRING", "NULL" ];

var ruleNames =  [ "json", "key_value_pair", "key", "value", "object", "array" ];

function JsonParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

JsonParser.prototype = Object.create(antlr4.Parser.prototype);
JsonParser.prototype.constructor = JsonParser;

Object.defineProperty(JsonParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

JsonParser.EOF = antlr4.Token.EOF;
JsonParser.LEFT_CURLY = 1;
JsonParser.RIGHT_CURLY = 2;
JsonParser.LEFT_BRACKET = 3;
JsonParser.RIGHT_BRACKET = 4;
JsonParser.COMMA = 5;
JsonParser.DOUBLE_QUOTE = 6;
JsonParser.DOT = 7;
JsonParser.COLON = 8;
JsonParser.WS = 9;
JsonParser.BOOLEAN = 10;
JsonParser.NUMBER = 11;
JsonParser.DECIMAL = 12;
JsonParser.STRING = 13;
JsonParser.NULL = 14;

JsonParser.RULE_json = 0;
JsonParser.RULE_key_value_pair = 1;
JsonParser.RULE_key = 2;
JsonParser.RULE_value = 3;
JsonParser.RULE_object = 4;
JsonParser.RULE_array = 5;


function JsonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JsonParser.RULE_json;
    return this;
}

JsonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JsonContext.prototype.constructor = JsonContext;

JsonContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

JsonContext.prototype.enterRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.enterJson(this);
	}
};

JsonContext.prototype.exitRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.exitJson(this);
	}
};

JsonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JsonParserVisitor ) {
        return visitor.visitJson(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JsonParser.JsonContext = JsonContext;

JsonParser.prototype.json = function() {

    var localctx = new JsonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, JsonParser.RULE_json);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===JsonParser.LEFT_CURLY) {
            this.state = 12;
            this.object();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Key_value_pairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JsonParser.RULE_key_value_pair;
    return this;
}

Key_value_pairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Key_value_pairContext.prototype.constructor = Key_value_pairContext;

Key_value_pairContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
};

Key_value_pairContext.prototype.COLON = function() {
    return this.getToken(JsonParser.COLON, 0);
};

Key_value_pairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Key_value_pairContext.prototype.enterRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.enterKey_value_pair(this);
	}
};

Key_value_pairContext.prototype.exitRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.exitKey_value_pair(this);
	}
};

Key_value_pairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JsonParserVisitor ) {
        return visitor.visitKey_value_pair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JsonParser.Key_value_pairContext = Key_value_pairContext;

JsonParser.prototype.key_value_pair = function() {

    var localctx = new Key_value_pairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, JsonParser.RULE_key_value_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.key();
        this.state = 16;
        this.match(JsonParser.COLON);
        this.state = 17;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function KeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JsonParser.RULE_key;
    return this;
}

KeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyContext.prototype.constructor = KeyContext;

KeyContext.prototype.STRING = function() {
    return this.getToken(JsonParser.STRING, 0);
};

KeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.enterKey(this);
	}
};

KeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.exitKey(this);
	}
};

KeyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JsonParserVisitor ) {
        return visitor.visitKey(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JsonParser.KeyContext = KeyContext;

JsonParser.prototype.key = function() {

    var localctx = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, JsonParser.RULE_key);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this.match(JsonParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JsonParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.STRING = function() {
    return this.getToken(JsonParser.STRING, 0);
};

ValueContext.prototype.COMMA = function() {
    return this.getToken(JsonParser.COMMA, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(JsonParser.NUMBER, 0);
};

ValueContext.prototype.BOOLEAN = function() {
    return this.getToken(JsonParser.BOOLEAN, 0);
};

ValueContext.prototype.array = function() {
    return this.getTypedRuleContext(ArrayContext,0);
};

ValueContext.prototype.object = function() {
    return this.getTypedRuleContext(ObjectContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JsonParserVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JsonParser.ValueContext = ValueContext;

JsonParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, JsonParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.state = 41;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case JsonParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 21;
            this.match(JsonParser.STRING);
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===JsonParser.COMMA) {
                this.state = 22;
                this.match(JsonParser.COMMA);
            }

            break;
        case JsonParser.NUMBER:
            this.enterOuterAlt(localctx, 2);
            this.state = 25;
            this.match(JsonParser.NUMBER);
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===JsonParser.COMMA) {
                this.state = 26;
                this.match(JsonParser.COMMA);
            }

            break;
        case JsonParser.BOOLEAN:
            this.enterOuterAlt(localctx, 3);
            this.state = 29;
            this.match(JsonParser.BOOLEAN);
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===JsonParser.COMMA) {
                this.state = 30;
                this.match(JsonParser.COMMA);
            }

            break;
        case JsonParser.LEFT_BRACKET:
            this.enterOuterAlt(localctx, 4);
            this.state = 33;
            this.array();
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===JsonParser.COMMA) {
                this.state = 34;
                this.match(JsonParser.COMMA);
            }

            break;
        case JsonParser.LEFT_CURLY:
            this.enterOuterAlt(localctx, 5);
            this.state = 37;
            this.object();
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===JsonParser.COMMA) {
                this.state = 38;
                this.match(JsonParser.COMMA);
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JsonParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.LEFT_CURLY = function() {
    return this.getToken(JsonParser.LEFT_CURLY, 0);
};

ObjectContext.prototype.RIGHT_CURLY = function() {
    return this.getToken(JsonParser.RIGHT_CURLY, 0);
};

ObjectContext.prototype.key_value_pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Key_value_pairContext);
    } else {
        return this.getTypedRuleContext(Key_value_pairContext,i);
    }
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.exitObject(this);
	}
};

ObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JsonParserVisitor ) {
        return visitor.visitObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JsonParser.ObjectContext = ObjectContext;

JsonParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, JsonParser.RULE_object);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this.match(JsonParser.LEFT_CURLY);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===JsonParser.STRING) {
            this.state = 44;
            this.key_value_pair();
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 50;
        this.match(JsonParser.RIGHT_CURLY);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = JsonParser.RULE_array;
    return this;
}

ArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

ArrayContext.prototype.LEFT_BRACKET = function() {
    return this.getToken(JsonParser.LEFT_BRACKET, 0);
};

ArrayContext.prototype.RIGHT_BRACKET = function() {
    return this.getToken(JsonParser.RIGHT_BRACKET, 0);
};

ArrayContext.prototype.BOOLEAN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JsonParser.BOOLEAN);
    } else {
        return this.getToken(JsonParser.BOOLEAN, i);
    }
};


ArrayContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JsonParser.COMMA);
    } else {
        return this.getToken(JsonParser.COMMA, i);
    }
};


ArrayContext.prototype.NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JsonParser.NUMBER);
    } else {
        return this.getToken(JsonParser.NUMBER, i);
    }
};


ArrayContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(JsonParser.STRING);
    } else {
        return this.getToken(JsonParser.STRING, i);
    }
};


ArrayContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

ArrayContext.prototype.array = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArrayContext);
    } else {
        return this.getTypedRuleContext(ArrayContext,i);
    }
};

ArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.enterArray(this);
	}
};

ArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof JsonParserListener ) {
        listener.exitArray(this);
	}
};

ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof JsonParserVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};




JsonParser.ArrayContext = ArrayContext;

JsonParser.prototype.array = function() {

    var localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, JsonParser.RULE_array);
    var _la = 0; // Token type
    try {
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 52;
            this.match(JsonParser.LEFT_BRACKET);
            this.state = 53;
            this.match(JsonParser.RIGHT_BRACKET);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 54;
            this.match(JsonParser.LEFT_BRACKET);

            this.state = 55;
            this.match(JsonParser.BOOLEAN);
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JsonParser.COMMA) {
                this.state = 56;
                this.match(JsonParser.COMMA);
                this.state = 57;
                this.match(JsonParser.BOOLEAN);
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 63;
            this.match(JsonParser.RIGHT_BRACKET);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 64;
            this.match(JsonParser.LEFT_BRACKET);

            this.state = 65;
            this.match(JsonParser.NUMBER);
            this.state = 70;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JsonParser.COMMA) {
                this.state = 66;
                this.match(JsonParser.COMMA);
                this.state = 67;
                this.match(JsonParser.NUMBER);
                this.state = 72;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 73;
            this.match(JsonParser.RIGHT_BRACKET);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 74;
            this.match(JsonParser.LEFT_BRACKET);

            this.state = 75;
            this.match(JsonParser.STRING);
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JsonParser.COMMA) {
                this.state = 76;
                this.match(JsonParser.COMMA);
                this.state = 77;
                this.match(JsonParser.STRING);
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 83;
            this.match(JsonParser.RIGHT_BRACKET);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 84;
            this.match(JsonParser.LEFT_BRACKET);

            this.state = 85;
            this.object();
            this.state = 90;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JsonParser.COMMA) {
                this.state = 86;
                this.match(JsonParser.COMMA);
                this.state = 87;
                this.object();
                this.state = 92;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 93;
            this.match(JsonParser.RIGHT_BRACKET);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 95;
            this.match(JsonParser.LEFT_BRACKET);

            this.state = 96;
            this.array();
            this.state = 101;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===JsonParser.COMMA) {
                this.state = 97;
                this.match(JsonParser.COMMA);
                this.state = 98;
                this.array();
                this.state = 103;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 104;
            this.match(JsonParser.RIGHT_BRACKET);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.JsonParser = JsonParser;
