/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be
truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit 
signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, 
then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

*/

function divide(dividend, divisor) {
  if (divisor === 0) return Number.POSITIVE_INFINITY;
  else if (divisor === 1 || divisor === -1) {
    count = dividend;
  } else {
    let count = 0;
    let tempDividend = Math.abs(dividend);
    let tempDivisor = Math.abs(divisor);

    while (tempDivisor <= tempDividend) {
      tempDividend = tempDividend - tempDivisor;
      count++;
    }
  }
  let MAX_LIMIT = Math.pow(2, 31) - 1;
  let MIN_LIMIT = -Math.pow(2, 31);

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0))
    count = -count;

  if (count > MAX_LIMIT) return MAX_LIMIT;

  if (count < MIN_LIMIT) return MIN_LIMIT;

  return count;
}

// divide(10, 3) // 3
// divide(7, -3) // -2
// divide(-10, -2) // 5
// divide(-11, 3) // -3
// divide(-2147483648, -1);
