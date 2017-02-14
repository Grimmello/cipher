var userSent = function (sentence) {
  alert("Your sentence ciphered is: " + sentence);
}
var UserInput = prompt("What sentence would you like ciphered? ");
var change1 = UserInput.charAt(0);
var change2 = UserInput.charAt(UserInput.length -1);
var change3 = change1 + change2
var change3 = change3.toUpperCase();
var reversestring = function(str) {
  var split = str.split("");
  var reverse = split.reverse();
  var join = reverse.join("");
  return join;
  alert(join)
}
var reversed = reversestring(change3)
userSent(reversed)
