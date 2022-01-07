/* 
Have the function QuestionsMarks(str) take the str string parameter, which will contain 
single digit numbers, letters, and question marks, and check if there are exactly 
3 question marks between every pair of two numbers that add up to 10. If so, then your 
program should return the string true, otherwise it should return the string false. 
If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.


For example: if str is "arrb6???4xxbl5???eee5" then your program should return true
because there are exactly 3 question marks between 6 and 4, and 3 question marks 
between 5 and 5 at the end of the string.
*/

function QuestionsMarks(str) {
  let firstIndex = 0;
  let secondIndex = 0;
  let count = 0;
  let noOfPairs = 0;
  let noOfQue = 0;

  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(+str[i]) && !firstIndex) {
      firstIndex = i;
    } else if (Number.isInteger(+str[i]) && firstIndex) {
      secondIndex = i;
    } else if (firstIndex && !secondIndex && str[i] === "?") {
      count = count + 1;
    }

    if (secondIndex > firstIndex) {
      if (+str[firstIndex] + +str[secondIndex] === 10)
        noOfPairs = noOfPairs + 1;
      if (count === 3) noOfQue = noOfQue + 1;

      count = 0;
      firstIndex = secondIndex;
      secondIndex = 0;
    }
  }

  if (noOfQue && noOfPairs && noOfQue === noOfPairs) return true;
  return false;
}

QuestionsMarks("acc?7??sss?3rr1??????5"); // true
QuestionsMarks("arrb6???4xxbl5???eee5"); // true
QuestionsMarks("9???1???9??1???9"); // false
