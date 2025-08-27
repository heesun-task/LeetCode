/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 // helper function
 function getAsciiFromStr(str) {
    // convert str to an array of sorted ascii codes
    const arr = [];
    for (let i = 0; i < str.length; i++) arr.push(str.charCodeAt(i));
    arr.sort((a,b)=>a-b);

    // return joined string (because arrays have different references)
    return arr.join(',');
 }
 
var groupAnagrams = function(strs) {
    // create a map with key: array of sorted ascii codes, value: array of anagrams
  const map = new Map();
    
    
    // loop strs for i 
    for (const s of strs){
        // initiate array of Ascii codes for current str
        const key = getAsciiFromStr(s);

        // check if map does not have asciiArr as key, and initiate key and value pair
        if (!map.has(key)) map.set(key, []);
        
        // update value by adding current str
        map.get(key).push(s);
    }

    // return map values as an array
    return [...map.values()]



    
};