/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numStr = x.toString().split('').reverse()
    if (+numStr.join('') === x) {
        return true
    } else {
    return false
    }
};