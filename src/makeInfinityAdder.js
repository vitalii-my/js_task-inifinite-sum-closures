'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let numberSum = 0;
  
  const adder = (number) => {
    /*  if (typeof number === 'number') {
       numberSum += number;
       result = adder;
     }else{
     result = numberSum;
     numberSum = 0;
     } */
    const result = typeof number === 'number' ? adder : numberSum;

    numberSum = (numberSum + number) || 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
