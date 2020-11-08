
const fs = require('fs');
const assert = require('assert');
const extractDomContent = require('..');

require('jsdom-global')(fs.readFileSync('./test/test-page.html', 'utf8'));

describe('extractDomContent', function() {
    const defaultExpectation = fs.readFileSync('./test/expectations/default.txt', 'utf8');
    const duplicateFreeExpectation = fs.readFileSync('./test/expectations/no-duplicates.txt', 'utf8');

    // Default options
    test({}, defaultExpectation);

    // No duplicates
    test({ removeDuplicates: true }, duplicateFreeExpectation);

    // Returned as array
    test({ returnAsArray: true }, defaultExpectation.split('\n'));

    // Returned as array with no duplicates
    test({ removeDuplicates: true, returnAsArray: true }, duplicateFreeExpectation.split('\n'));
});

function test(options, expectation) {
    it('should match expected content text for options ' + JSON.stringify(options), function() {
        const content = extractDomContent(document.body, options);
        assert.deepEqual(content, expectation);
    });
}
