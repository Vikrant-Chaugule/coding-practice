// Sayurbox

// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [
//   ["bat"],
//   ["nat","tan"],
//   ["ate","eat","tea"]
// ]

function anagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  return s1.split("").every((ch) => s2.includes(ch));
}

function groupAnagram(arr) {
  const group = [arr[0]]; // eat
  const groupSet = { [arr[0]]: [arr[0]] };

  for (let i = 1; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < group.length; j++) {
      if (anagram(arr[i], group[j])) {
        groupSet[group[j]].push(arr[i]);
        found = true;
        break;
      }
    }

    if (!found) {
      group.push(arr[i]);
      groupSet[arr[i]] = [arr[i]];
    }

    found = false;
  }

  console.log(Object.values(groupSet));
}

groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

// anagram("tan", "nat")
