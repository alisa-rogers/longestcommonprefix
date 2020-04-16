function lcp (array) {    
let order = array.sort((a,b)=> a.length - b.length);
let short = order[0];
    let letter = 0;
    if (order[0][letter] !== order[1][letter]) {
       console.log ("No common prefix");
    };
    while (letter <= short.length && order[0][letter] === order[1][letter]) {
              letter++;
    };
    let prefix = order[0].substring (0, letter);
           return prefix;
};

console.log (lcp(["flower", "flow"]));
console.log (lcp(["default", "definition"]));
console.log (lcp(["construct", "constant"]));
console.log (lcp(["apple", "animal"]));
console.log (lcp(["sky", "earth"]));
/*
print(“Testing LCP for strings flower and flow”);
print ("“Expected result: flow");
print(“Actual result: flow");

print(“Testing LCP for strings default and definition”);
print ("“Expected result: def");
print(“Actual result: def");

print(“Testing LCP for strings construct and constant”);
print ("“Expected result: const");
print(“Actual result: const");

print(“Testing LCP for strings apple and animal”);
print ("“Expected result: a");
print(“Actual result: a");

print(“Testing LCP for strings sky and earth”);
print ("“Expected result: No common prefix");
print(“Actual result: No common prefix");
*/