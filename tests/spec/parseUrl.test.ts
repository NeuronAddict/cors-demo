import {assert, expect, test} from 'vitest'
import parseId from "../../src/core/url-parser";

test('should parse relative url', () => {
    expect(parseId('/url/api/5')).equals(5);
});

test('should parse url', () => {
    expect(parseId('https://localhost:8443/url/api/5')).equals(5);
});

test('should error', async () => {
    assert.throws(() => {
        parseId('https://localhost:8443/url/api');
    });
});