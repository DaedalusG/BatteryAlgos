const longestNonRepeatingSubstring = function (string) {
    let length = 0
    let currStr = []

    for (let i = 0; i < string.length; i++) {
        if (!string.length) return 0

        if (currStr.indexOf(string[i]) !== -1) {
            currStr = [string[i]]
        } else {
            currStr.push(string[i])
            if (currStr.length > length) {
                length = currStr.length;
            }
        }
    }
    return length
};

module.exports = longestNonRepeatingSubstring;