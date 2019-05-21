lexer grammar JsonLexer;

// Structure symbols
LEFT_CURLY:                    '{';
RIGHT_CURLY:                  '}';
LEFT_BRACKET:               '[';
RIGHT_BRACKET:             ']';
COMMA:                              ',';
DOUBLE_QUOTE:              '"';
DOT:                                    '.';
COLON:                               ':';

// Whitespace
WS:                                     [ \t\r\n\u000C]+ -> skip;

// Data types
BOOLEAN:                         'true'
                 |                          'false'
                 ;

NUMBER:                            ('0'..'9')+;

DECIMAL:                            NUMBER (DOT NUMBER)?;

STRING:                             DOUBLE_QUOTE ('\\"'|.)*? DOUBLE_QUOTE;

NULL:                                 'null';
