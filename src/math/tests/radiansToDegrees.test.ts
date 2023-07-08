import { radiansToDegrees } from '..';


describe('radiansToDegrees()', () => {
    test('should return the correct value', () => {
        const number = 1;

        const result = radiansToDegrees(number);

        expect(result).toBe(57.29577951308232);
    });

    test('should return the correct value', () => {
        const number = 1.5707963267948966;

        const result = radiansToDegrees(number);

        expect(result).toBe(90);
    });

    test('should return the correct value', () => {
        const number = -1.5707963267948966;

        const result = radiansToDegrees(number);

        expect(result).toBe(-90);
    });

    test('should return zero', () => {
        const number = 0;

        const result = radiansToDegrees(number);

        expect(result).toBe(0);
    });
});
