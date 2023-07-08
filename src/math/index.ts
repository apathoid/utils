/**
* @param rad - value in radians
* @returns the given value in degrees
*/
export const radiansToDegrees = (rad: number) => rad * 180 / Math.PI;


/**
* @param deg - value in degrees
* @returns the given value in radians
*/
export const degreesToRadians = (deg: number) => deg * Math.PI / 180;


/**
* @param number - number to convert
* @param digits - desired number of decimal places (0 - 20)
* @returns the given value with the desired number of signs after the dot
*
* @description
* The value is rounded according to the general rules.
* That is, if the last digit of the number is 5 or more, the number will be increased by 1,
* otherwise, it will be decreased by 1.
*/
export const toFixedRounded = (number: number, digits: number) => {
    const x = 1 / 10 ** (digits + 1);
    const fraction = String(number).slice(String(number).indexOf('.') + 1);
    let num = number;

    if (fraction[digits] === '5') {
        num += number > 0 ? x : -x;
    }

    return num.toFixed(digits);
};


/**
* @param number - number to convert
* @param digits - desired number of decimal places (0 - 20)
* @returns the given value converted, if it allowed, to the value with the given number of signs after the dot
*
* @description
* Makes an attempt to convert the passed value to a number with the desired number of decimal places.
* If the conversion results in a loss of information, i.e. the part after the dot becomes 0,
* the number of characters after the dot will be increased by 1.
* The conversion attempt will be repeated until the correct value is found.
*/
export const softRound = (number: number, digits: number) => {
    const isUnprocessable = (
        Number.isNaN(number) ||
        digits < 0 ||
        number === 0 ||
        Math.abs(number) - Math.floor(Math.abs(number)) === 0
    );

    if (isUnprocessable) {
        return number;
    }

    let _digits = digits;
    let roundedNumber = +toFixedRounded(number, digits);

    if (digits === 0) {
        return roundedNumber;
    }

    while (
        Math.floor(Math.abs(number)) === Math.floor(Math.abs(roundedNumber)) &&
        Math.abs(roundedNumber) - Math.floor(Math.abs(roundedNumber)) === 0
    ) {
        _digits++;
        roundedNumber = +toFixedRounded(number, _digits);
    }

    return roundedNumber;
};
