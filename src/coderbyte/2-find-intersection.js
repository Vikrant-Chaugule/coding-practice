/*Find Intersection
Have the function FindIntersection(strArr) read the array of strings
stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order,
the second element will represent a second list of comma-separated numbers (also sorted).
Your goal is to return a comma-separated string containing the numbers that occur in elements
of strArr in sorted order. If there is no intersection, return the string false.
*/

// Examples

// Input: ["1, 3, 4, 7, 13", "100, 200"]
// Output: "1,4,13"

// Input: ["10, 33, 4, 132", "100, 200"]
// Output: "false"

function FindIntersection(strArr) {
  const a = strArr[0].split(", ");
  const b = strArr[1].split(", ");
  const result = a.filter((x) => b.find((a) => a === x));
  if (!result.length) return "false";
  return result.join(",");
}
