export default function asyncDebounce<T extends unknown[], R>(fn: (...args: T) => Promise<R>, wait: number) {
    let timeoutId: NodeJS.Timeout | undefined;

    return function (...args: T) {
        clearTimeout(timeoutId);

        return new Promise((resolve, reject) => {
            timeoutId = setTimeout(() => {
                fn(...args)
                    .then(resolve)
                    .catch(reject);
            }, wait);
        });
    };
}

