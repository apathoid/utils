import { degreesToRadians } from '..';


describe('degreesToRadians()', () => {
    test('should return the correct value', () => {
        const number = 1;

        const result = degreesToRadians(number);

        expect(result).toBe(0.017453292519943295);
    });

    test('should return the correct value', () => {
        const number = 90;

        const result = degreesToRadians(number);

        expect(result).toBe(1.5707963267948966);
    });

    test('should return the correct value', () => {
        const number = -90;

        const result = degreesToRadians(number);

        expect(result).toBe(-1.5707963267948966);
    });

    test('should return zero', () => {
        const number = 0;

        const result = degreesToRadians(number);

        expect(result).toBe(0);
    });
});
