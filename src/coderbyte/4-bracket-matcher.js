/*
Have the function BracketMatcher(str) take the str parameter being 
passed and return 1 if the brackets are correctly matched and each 
one is accounted for. Otherwise return 0. 

For example: if str is "(hello (world))", 
then the output should be 1, but if str is "((hello (world))" then
the output should be 0 because the brackets do not correctly match up. 
Only "(" and ")" will be used as brackets. If str contains no brackets return 1. 
*/

function BracketMatcher(str) {
  let leftBracket = 0;
  let rightBracket = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") leftBracket += 1;
    if (str[i] === ")") rightBracket += 1;

    if (rightBracket > leftBracket) return 0;
  }
  return leftBracket === rightBracket ? 1 : 0;
}

BracketMatcher("(c(oder)) b(yte)"); // 1
BracketMatcher("the color re(d))()(()"); // 0
BracketMatcher("(c(oder)) b(yte)"); // 1
