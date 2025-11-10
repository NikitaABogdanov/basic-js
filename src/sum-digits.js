const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 0;
  let num = n;
  while (num > 9) {
    for (let i = String(num).length - 1; i >= 0; i--) {
    result += +String(num)[i];
    }
    num = result;
    result = 0;
  }
  return num;
}

module.exports = {
  getSumOfDigits
};
