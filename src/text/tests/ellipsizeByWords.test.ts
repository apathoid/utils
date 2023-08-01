import { ellipsizeByWords } from '..';


describe('ellipsizeByWords()', () => {
    test('should return a string with the given amount of word blocks', () => {
        const string = 'some; test; string;'
        const quantity = 2;
        const delimiter = ';';

        const result = ellipsizeByWords(string, quantity, delimiter);

        expect(result).toBe('some; test...');
        expect(result.split(delimiter).length).toBe(quantity);
    });

    test('should return a string with the given amount of word blocks (preserve formatting)', () => {
        const string = '     some     ;    test    ;    string;'
        const quantity = 2;
        const delimiter = ';';

        const result = ellipsizeByWords(string, quantity, delimiter);

        expect(result).toBe('     some     ;    test...');
        expect(result.split(delimiter).length).toBe(quantity);
    });

    test('should return the given string as is (the given quantity of word blocks is greater than available)', () => {
        const string = 'some; test; string;'
        const quantity = 4;
        const delimiter = ';';

        const result = ellipsizeByWords(string, quantity, delimiter);

        expect(result).toBe(string);
        expect(result.split(delimiter).length).toBe(string.split(delimiter).length);
    });

    test('should return the given string as is (the given quantity of word blocks is equal to available)', () => {
        const string = 'some; test; string;'
        const quantity = 3;
        const delimiter = ';';

        const result = ellipsizeByWords(string, quantity, delimiter);

        expect(result).toBe(string);
        expect(result.split(delimiter).length).toBe(string.split(delimiter).length);
    });

    test('should return ellipsis only (the quantity is negative)', () => {
        const string = 'some; test; string;'
        const quantity = -4;
        const delimiter = ';';

        const result = ellipsizeByWords(string, quantity, delimiter);

        expect(result).toBe('...');
    });
});
