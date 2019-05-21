parser grammar JsonParser;

options { tokenVocab=JsonLexer; }

json: object?;

key_value_pair: key COLON value;
key: STRING;

value
    : STRING (COMMA)?
    | NUMBER (COMMA)?
    | BOOLEAN (COMMA)?
    | array (COMMA)?
    | object (COMMA)?
    ;

object: LEFT_CURLY (key_value_pair)* RIGHT_CURLY;

array
    : LEFT_BRACKET RIGHT_BRACKET // empty array
    | LEFT_BRACKET (BOOLEAN) (COMMA BOOLEAN)* RIGHT_BRACKET // boolean array
    | LEFT_BRACKET (NUMBER) (COMMA NUMBER)* RIGHT_BRACKET // number array
    | LEFT_BRACKET (STRING) (COMMA STRING)* RIGHT_BRACKET // string array
    | LEFT_BRACKET (object) (COMMA object)* RIGHT_BRACKET // object array
    | LEFT_BRACKET (array) (COMMA array)* RIGHT_BRACKET // array of arrays
    ;