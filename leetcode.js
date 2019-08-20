/*

Given an array A of strings made only from lowercase letters, 
return a list of all characters that show up in all strings within 
the list (including duplicates).  For example, if a character occurs 3 
times in all strings but not 4 times, you need to include that character 
three times in the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]

*/

var commonChars = function(A) {
    
    let ar = []
    
    let makeHash = (word) => {
        let hash = {}
        for (let i = 0; i < word.length; i++){
            hash[word[i]] ? hash[word[i]]++ : hash[word[i]] = 1
        }
        return hash
    }
    
    let hash = makeHash(A[0])
    
    for (let i = 1; i < A.length; i++){
        let current = makeHash(A[i])
        for (let key in hash){
            if (hash[key] && !current[key]){
                delete hash[key]
            }
            if (hash[key] && current[key]){
                hash[key] > current[key] && (hash[key] = current[key])
            }
        }
    }
    
    for (let key in hash){
        for (let i = 0; i < hash[key]; i++){
            ar.push(key)
        }
    }
    
    return ar
};