const testing = require('../lib/testing.js');
const sourceFunction = require('../src/even-sum.js');

const assertArray = testing.assertArray;
const printHeadLine = testing.printHeadLine;
const calculateEvenSum = sourceFunction.calculateEvenSum;


const testCalculateEvenSum = function() {
  printHeadLine("\nTesting calculateEvenSum")
  assertArray([],calculateEvenSum(),"It gives 0 when no element is provided");
  assertArray([0],calculateEvenSum(1, 1),"When start and end index is same and odd number");
  assertArray([2],calculateEvenSum(2, 2),"When starting and end index is same and even number");
  assertArray([0, 4, 4, 10],calculateEvenSum(3, 6),"When one of the index is odd number");
  assertArray([2, 2, 6, 6, 12, 12, 20],calculateEvenSum(2, 8),"When both index is even and are not same");
  assertArray([0, -4, -4, -6, -6, -6, -6, -4, -4, 0, 0],calculateEvenSum(-5, 5),"When starting index is negative");
  assertArray([0, -4,-4,-6],calculateEvenSum(-5, -2),"When both starting and ending index is negative");

}
testCalculateEvenSum();
testing.getSummary();
