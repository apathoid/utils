import { ellipsize } from '..';


describe('ellipsize()', () => {
    test('should return an ellipsized string', () => {
        const string = 'test string';
        const quantity = 3;

        const result = ellipsize(string, quantity);

        expect(result).toBe('tes...');
        expect(result.length).toBe(6);
    });

    test('should return an ellipsized string (preserve formatting)', () => {
        const string = '   test      string';
        const quantity = 6;

        const result = ellipsize(string, quantity);

        expect(result).toBe('   tes...');
        expect(result.length).toBe(9);
    });
    
    test('should return an ellipsized string (trimmed)', () => {
        const string = 'test string';
        const quantity = 5;

        const result = ellipsize(string, quantity);

        expect(result).toBe('test...');
        expect(result.length).toBe(7);
    });

    test('should return an ellipsized string (trimmed; the given string ends with empty space)', () => {
        const string = 'test string ';
        const quantity = string.length - 1;

        const result = ellipsize(string, quantity);

        expect(result).toBe('test string...');
        expect(result.length).toBe(14);
    });

    test('should return an ellipsized string (sliced from the end)', () => {
        const string = 'test string';
        const quantity = -2;

        const result = ellipsize(string, quantity);

        expect(result).toBe('test stri...');
        expect(result.length).toBe(12);
    });

    test('should return the given string as is (the given quantity of symbols greater than the length of the string)', () => {
        const string = 'test string';
        const quantity = 99;

        const result = ellipsize(string, quantity);

        expect(result).toBe(string);
        expect(result.length).toBe(string.length);
    });

    test('should return the given string as is (the given quantity of symbols equals to the string length)', () => {
        const string = 'test string ';
        const quantity = string.length;

        const result = ellipsize(string, quantity);

        expect(result).toBe(string);
        expect(result.length).toBe(string.length);
    });

    test('should return ellipsis only (the given quantity of symbols lesser than the string length)', () => {
        const string = 'test string';
        const quantity = -99;

        const result = ellipsize(string, quantity);

        expect(result).toBe('...');
        expect(result.length).toBe(3);
    });
});
