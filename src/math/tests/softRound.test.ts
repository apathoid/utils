import { softRound } from '..';


describe('softRound()', () => {
    describe('the value with the specified number of digits', () => {
        test('should return a positive value (without rounding)', () => {
            const number = 0.234;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(0.23);
        });

        test('should return a negative value (without rounding)', () => {
            const number = -0.234;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(-0.23);
        });

        test('should return the correct value (without rounding)', () => {
            const number = 1.455;
            const digits = 0;

            const result = softRound(number, digits);

            expect(result).toBe(1);
        });

        test('should return a positive value (with rounding)', () => {
            const number = 0.235;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(0.24);
        });

        test('should return a negative value (with rounding)', () => {
            const number = -0.235;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(-0.24);
        });

        test('should return the correct value (with rounding)', () => {
            const number = 1.535;
            const digits = 0;

            const result = softRound(number, digits);

            expect(result).toBe(2);
        });
    });

    describe('the value with the calculated number of digits', () => {
        test('should return a positive value with the correct number of digits', () => {
            const number = 0.0000253;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(0.00003);
        });

        test('should return a positive value with the correct number of digits', () => {
            const number = 13.9999999;
            const digits = 1;

            const result = softRound(number, digits);

            expect(result).toBe(14);
        });

        test('should return a negative value with the correct number of digits', () => {
            const number = -0.0000253;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(-0.00003);
        });
    });

    describe('unprocessable input', () => {
        test('should return the same value', () => {
            const number = 0;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(0);
        });

        test('should return the same value', () => {
            const number = 5.00;
            const digits = 2;

            const result = softRound(number, digits);

            expect(result).toBe(5);
        });

        test('should return the same value', () => {
            const number = 2.03;
            const digits = -2;

            const result = softRound(number, digits);

            expect(result).toBe(number);
        });
    });
});
