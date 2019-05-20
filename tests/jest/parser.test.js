/* global test */
const parserRunner = require('../../parser-runner');
const test1 = require('../test1');
const test2 = require('../test2');
const test3 = require('../test3');
const test4 = require('../test4');
const test5 = require('../test5');

test('test1', () => {
    expect(parserRunner.runSingleTest(test1)).toMatchSnapshot();
});

test('test2', () => {
    expect(parserRunner.runSingleTest(test2)).toMatchSnapshot();
});

test('test3', () => {
    expect(parserRunner.runSingleTest(test3)).toMatchSnapshot();
});

test('test4', () => {
    expect(parserRunner.runSingleTest(test4)).toMatchSnapshot();
});

// Syntax error
test('test5', () => {
    expect(parserRunner.runSingleTest(test5)).toMatchSnapshot();
});
