/*
How Much is True?
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0

Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/

const countTrue = (arr) => {
    const length = arr.length;
       if(length === 0) {
           return 0;
       }
      let count = 0;
      for(let i=0;i<length;i++){
        if(arr[i]) count++;
      }
    return count;
  }