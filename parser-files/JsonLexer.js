// Generated from JsonLexer.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010\\\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0006\n1\n\n\r\n\u000e\n2\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b@\n\u000b\u0003",
    "\f\u0006\fC\n\f\r\f\u000e\fD\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r",
    "K\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000eQ\n",
    "\u000e\f\u000e\u000e\u000eT\u000b\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003R\u0002",
    "\u0010\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u0003\u0002\u0003\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002a",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0003\u001f\u0003\u0002\u0002\u0002\u0005!\u0003\u0002\u0002\u0002",
    "\u0007#\u0003\u0002\u0002\u0002\t%\u0003\u0002\u0002\u0002\u000b\'\u0003",
    "\u0002\u0002\u0002\r)\u0003\u0002\u0002\u0002\u000f+\u0003\u0002\u0002",
    "\u0002\u0011-\u0003\u0002\u0002\u0002\u00130\u0003\u0002\u0002\u0002",
    "\u0015?\u0003\u0002\u0002\u0002\u0017B\u0003\u0002\u0002\u0002\u0019",
    "F\u0003\u0002\u0002\u0002\u001bL\u0003\u0002\u0002\u0002\u001dW\u0003",
    "\u0002\u0002\u0002\u001f \u0007}\u0002\u0002 \u0004\u0003\u0002\u0002",
    "\u0002!\"\u0007\u007f\u0002\u0002\"\u0006\u0003\u0002\u0002\u0002#$",
    "\u0007]\u0002\u0002$\b\u0003\u0002\u0002\u0002%&\u0007_\u0002\u0002",
    "&\n\u0003\u0002\u0002\u0002\'(\u0007.\u0002\u0002(\f\u0003\u0002\u0002",
    "\u0002)*\u0007$\u0002\u0002*\u000e\u0003\u0002\u0002\u0002+,\u00070",
    "\u0002\u0002,\u0010\u0003\u0002\u0002\u0002-.\u0007<\u0002\u0002.\u0012",
    "\u0003\u0002\u0002\u0002/1\t\u0002\u0002\u00020/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u000234\u0003\u0002\u0002\u000245\b\n\u0002\u00025\u0014\u0003\u0002",
    "\u0002\u000267\u0007v\u0002\u000278\u0007t\u0002\u000289\u0007w\u0002",
    "\u00029@\u0007g\u0002\u0002:;\u0007h\u0002\u0002;<\u0007c\u0002\u0002",
    "<=\u0007n\u0002\u0002=>\u0007u\u0002\u0002>@\u0007g\u0002\u0002?6\u0003",
    "\u0002\u0002\u0002?:\u0003\u0002\u0002\u0002@\u0016\u0003\u0002\u0002",
    "\u0002AC\u00042;\u0002BA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002",
    "\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002E\u0018\u0003",
    "\u0002\u0002\u0002FJ\u0005\u0017\f\u0002GH\u0005\u000f\b\u0002HI\u0005",
    "\u0017\f\u0002IK\u0003\u0002\u0002\u0002JG\u0003\u0002\u0002\u0002J",
    "K\u0003\u0002\u0002\u0002K\u001a\u0003\u0002\u0002\u0002LR\u0005\r\u0007",
    "\u0002MN\u0007^\u0002\u0002NQ\u0007$\u0002\u0002OQ\u000b\u0002\u0002",
    "\u0002PM\u0003\u0002\u0002\u0002PO\u0003\u0002\u0002\u0002QT\u0003\u0002",
    "\u0002\u0002RS\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002SU\u0003",
    "\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UV\u0005\r\u0007\u0002V",
    "\u001c\u0003\u0002\u0002\u0002WX\u0007p\u0002\u0002XY\u0007w\u0002\u0002",
    "YZ\u0007n\u0002\u0002Z[\u0007n\u0002\u0002[\u001e\u0003\u0002\u0002",
    "\u0002\t\u00022?DJPR\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function JsonLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

JsonLexer.prototype = Object.create(antlr4.Lexer.prototype);
JsonLexer.prototype.constructor = JsonLexer;

Object.defineProperty(JsonLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

JsonLexer.EOF = antlr4.Token.EOF;
JsonLexer.LEFT_CURLY = 1;
JsonLexer.RIGHT_CURLY = 2;
JsonLexer.LEFT_BRACKET = 3;
JsonLexer.RIGHT_BRACKET = 4;
JsonLexer.COMMA = 5;
JsonLexer.DOUBLE_QUOTE = 6;
JsonLexer.DOT = 7;
JsonLexer.COLON = 8;
JsonLexer.WS = 9;
JsonLexer.BOOLEAN = 10;
JsonLexer.NUMBER = 11;
JsonLexer.DECIMAL = 12;
JsonLexer.STRING = 13;
JsonLexer.NULL = 14;

JsonLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

JsonLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

JsonLexer.prototype.literalNames = [ null, "'{'", "'}'", "'['", "']'", "','", 
                                     "'\"'", "'.'", "':'", null, null, null, 
                                     null, null, "'null'" ];

JsonLexer.prototype.symbolicNames = [ null, "LEFT_CURLY", "RIGHT_CURLY", 
                                      "LEFT_BRACKET", "RIGHT_BRACKET", "COMMA", 
                                      "DOUBLE_QUOTE", "DOT", "COLON", "WS", 
                                      "BOOLEAN", "NUMBER", "DECIMAL", "STRING", 
                                      "NULL" ];

JsonLexer.prototype.ruleNames = [ "LEFT_CURLY", "RIGHT_CURLY", "LEFT_BRACKET", 
                                  "RIGHT_BRACKET", "COMMA", "DOUBLE_QUOTE", 
                                  "DOT", "COLON", "WS", "BOOLEAN", "NUMBER", 
                                  "DECIMAL", "STRING", "NULL" ];

JsonLexer.prototype.grammarFileName = "JsonLexer.g4";



exports.JsonLexer = JsonLexer;

