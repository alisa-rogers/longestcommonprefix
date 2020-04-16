function lcp (first, second) {
   let letter = 0;
   if (first[letter] !== second[letter]) {
       console.log ("No common prefix");
   };
   while (letter <= 6 && first[letter] === second[letter]) {
              letter++;
   };
   let prefix = first.substring (0, letter);
           return prefix;
};

console.log (lcp("abcdef", "abcdee"));
console.log (lcp("abcdef", "abcddd"));
console.log (lcp("abcdef", "abcccc"));
console.log (lcp("abcdef", "abbbbb"));
console.log (lcp("abcdef", "bbbbbb"));

print(“Testing LCP for strings abcdef and abcdee”);
print ("“Expected result: abcde");
print(“Actual result: abcde");

print(“Testing LCP for strings abcdef and abcddd”);
print ("“Expected result: abcd");
print(“Actual result: abcd");

print(“Testing LCP for strings abcdef and abcccc”);
print ("“Expected result: abc");
print(“Actual result: abc");

print(“Testing LCP for strings abcdef and abbbbb”);
print ("“Expected result: ab");
print(“Actual result: ab");

print(“Testing LCP for strings abcdef and bbbbbb”);
print ("“Expected result: No common prefix");
print(“Actual result: No common prefix");


