import { normalizeString } from "../../src/controllers/normalizeString";
import 'jest';

describe('normalizeString', () => {
    const testCases = [
        { input: 'púrpura', expected: 'purpura', description: 'remove diacritics from a string' },
        { input: 'üñéáíóú', expected: 'uneaiou', description: 'remove all types of diacritics' },
        { input: 'Marrón', expected: 'marron', description: 'remove diacritics and convert to lowercase' },
        { input: 'POLLO', expected: 'pollo', description: 'convert to lowercase' },
    ];

    test.each(testCases)('should $description', ({ input, expected }) => {
        const output = normalizeString(input);
        expect(output).toStrictEqual(expected);
    });
});