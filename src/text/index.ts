/**
 * @param string string to be splitted
 * @param delimiter delimiter between words
 * @param trim should trim each substring in the result array
 * @returns splitted string
 * 
 * @description
 * Splits the string by the given delimiter and excludes empty trailing substring.
 * Optionaly trims each member of the result array.
 */
export const splitString = (string: string, delimiter: string, trim?: boolean) => {
    let splittedString: string[] = [];

    let tmpStr = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === delimiter) {
            if (trim) {
                tmpStr = tmpStr.trim();
            }

            splittedString.push(tmpStr);
            tmpStr = '';

            continue;
        }

        tmpStr += string[i];
    }

    if (tmpStr.trim()) {
        if (trim) {
            tmpStr = tmpStr.trim();
        }
        
        splittedString.push(tmpStr);
    }

    return splittedString;
};

/**
 * @param string string to be ellipsized
 * @param quantity number of chars to be visible (can be negative - the string will be cut from the end)
 * @returns ellipsized string
 * 
 * @description
 * Cuts the string and appends ellipsis to the end.
*/
export const ellipsize = (string: string, quantity: number) => {
    return appendEllipsis(string, string.slice(0, quantity));
};


/**
 * @param string string to be ellipsized
 * @param quantity number of words to be visible (if negative only ellipsis will be returned)
 * @param delimiter delimiter between words
 * 
 * @description
 * Splits the string with words (by the given delimiter) and appends ellipsis to the end.
*/
export const ellipsizeByWords = (string: string, quantity: number, delimiter: string) => {
    if (quantity <= 0) {
        return '...';
    }

    const splittedString = splitString(string, delimiter);
    
    if (splittedString.length === quantity || splittedString.length < quantity) {
        return string;
    }

    const newString = appendEllipsis(string, splittedString.slice(0, quantity).join(delimiter));
    
    return newString;
};


/**
 * @param origString initial string
 * @param newString sliced string
 * @returns sliced string with ellipsis appended (if needed)
 */
function appendEllipsis(origString: string, newString: string) {
    if (newString.length < origString.length) {
        return newString.trimEnd() + '...';
    }

    return newString;
}
