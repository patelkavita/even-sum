// find sum of all even numbers in an [1,N] iterations
//if N = 5, then output should be 0,2,2,6,6
//if N = 4, then output should be 0,2,2,6
//if N = 3, then output should be 0,2,2
//if N = 2, then output should be 0,2
//if N = 1, then output should be 0


const isEven = function(n) {
  return (n % 2 === 0);
}

const calculateEvenSum = function(M, N) {
  const sum = [];
  let total = 0;

  for(let index = M; index <= N; index++) {
    if(isEven(index)) {
      total += index;
    }  
    sum.push(total);
  }

  return sum;
}

exports.calculateEvenSum = calculateEvenSum;
