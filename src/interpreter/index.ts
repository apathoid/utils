/**
 * @param ms duration
 * 
 * @description
 * Pause the execution flow for a given time.
 */
export function pauseThread(ms: number) {
    let then = Date.now();

    while (Date.now() - then < ms) {}
}
