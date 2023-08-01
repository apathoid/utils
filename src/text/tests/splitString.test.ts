import { splitString } from '..';


describe('splitString()', () => {
    test('should return splitted string', () => {
        const string = 'some string to split';
        const delimiter = ' ';

        const result = splitString(string, delimiter);

        expect(result).toEqual(['some', 'string', 'to', 'split']);
    });

    test('should return splitted string', () => {
        const string = 'some \nstring to split';
        const delimiter = '\n';

        const result = splitString(string, delimiter);

        expect(result).toEqual(['some ', 'string to split']);
    });

    test('should return splitted string with trimmed members', () => {
        const string = '      some   ;   string    ;  to  ;    split     ;  ';
        const delimiter = ';';

        const result = splitString(string, delimiter, true);

        expect(result).toEqual(['some', 'string', 'to', 'split']);
    });

    test('should return splitted string with trimmed members', () => {
        const string = '      some   \n;   string    ;\n  to  ;    split     ;  ';
        const delimiter = '\n';

        const result = splitString(string, delimiter, true);

        expect(result).toEqual(['some', ';   string    ;', 'to  ;    split     ;']);
    });

    test('should return splitted string with _not_ trimmed members', () => {
        const string = '      some   ;   string    ;  to  ;    split     ;  ';
        const delimiter = ';';

        const result = splitString(string, delimiter, false);

        expect(result).toEqual(['      some   ', '   string    ', '  to  ', '    split     ']);
    });
});
