import { toFixedRounded } from '..';


describe('toFixedRounded()', () => {
    test('should return a rounded value', () => {
        const number = 0.235;
        const digits = 2;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('0.24');
    });

    test('should return a rounded value', () => {
        const number = 0.0000235;
        const digits = 6;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('0.000024');
    });

    test('should return a rounded value', () => {
        const number = -0.235;
        const digits = 2;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('-0.24');
    });

    test('should return a rounded value', () => {
        const number = -0.0000235;
        const digits = 6;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('-0.000024');
    });

    test('should return a value with the rounded integer part', () => {
        const number = 13.99999;
        const digits = 1;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('14.0');
    });

    test('should return a value with the rounded integer part', () => {
        const number = 13.99999;
        const digits = 4;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('14.0000');
    });

    test('should return a value with the rounded integer part', () => {
        const number = 1.5324315;
        const digits = 0;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('2');
    });

    test('should return a value without rounding', () => {
        const number = 0.23541;
        const digits = 3;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('0.235');
    });

    test('should return a value without rounding', () => {
        const number = -0.23541;
        const digits = 3;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('-0.235');
    });

    test('should return a value without rounding', () => {
        const number = 0.000023541;
        const digits = 7;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('0.0000235');
    });

    test('should return a value without rounding', () => {
        const number = -0.000023541;
        const digits = 7;

        const result = toFixedRounded(number, digits);

        expect(result).toBe('-0.0000235');
    });
});
