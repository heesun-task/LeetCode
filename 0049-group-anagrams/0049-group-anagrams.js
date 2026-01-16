/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // anagramDict:
    // key   -> unique character frequency signature
    // value -> list of strings that share the same signature
    const anagramDict = {};

    // iterate through each string in the input array
    for (const str of strs) {
      // create an array of size 26 to count characters a–z
      // index 0 -> 'a', index 1 -> 'b', ..., index 25 -> 'z'
      const count = new Array(26).fill(0);

      // count frequency of each character in the string
      for (const ch of str) {
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        count[index]++;
      }

      // convert the frequency array into a unique string key
      // strings with the same character counts will produce the same key
      // e.g. "act" and "cat" -> "1#0#0#1#0#0#...#1"
      const key = count.join('-');

      // group strings by the same key
      if (!anagramDict[key]) {
        anagramDict[key] = [];
      }
      anagramDict[key].push(str);
    }

    // return all grouped anagrams
    return Object.values(anagramDict);
};