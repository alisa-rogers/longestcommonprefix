/**
doesn't work
returns "undefined";
**/
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
    else {
    let order = strs.sort((a,b)=> b.length - a.length);
    let long = order[0];
    let a = long.length;
    let b = order.length;
    let letter = 0;
    let word = 1;
         let mono = order[0].slice (0, letter);
            let poli = strs[word].slice (0, letter);
        function search(letter, word) {
    
            if (letter>=a) break;
            if (word>b) break;
            if (mono != poli) {
                return search (letter - 1, word - 1);
            }
            else {
                return mono;
            };
    };
         }; //else
}; //function


// doesn't work 
var longestCommonPrefix = function(strs) {
    let prefix = "";
    if (strs.length === 0) {
        return prefix;
    }
    else {
    let order = strs.sort((a,b)=> a.length - b.length);
    let short = order[0]; //!
    let a = short.length;
    let b = order.length;
    let word = b;
        for (let letter = a; letter++, word++) {
        let  first = order[0].substring(0, letter);
        let common = order[word].substring(0, letter);
        if (common = first) { 
           let commonPrefix = prefix + first;
              return commonPrefix;        
        };
        }; //for
         }; //ELSE
}; //FUNCTION
 