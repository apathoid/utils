import { pauseThread } from '..';


describe('pauseThread()', () => {
    test('should pause the execution flow for a given time', () => {
        const then = Date.now();
        const duration = 500;

        pauseThread(duration);

        expect(Date.now() - then).toBe(duration);
    });
});
