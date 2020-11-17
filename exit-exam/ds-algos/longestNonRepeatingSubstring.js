const longestNonRepeatingSubstring = function (string) {
    let result = 0
    let currStr = []

    for (let i = 0; i < string.length; i++) {
        if (currStr.indexOf(string[i])) {
            currStr = [string[i]]
        } else {
            currStr.push(string[i])
        }

    }
};

module.exports = longestNonRepeatingSubstring;