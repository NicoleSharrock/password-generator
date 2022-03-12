// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here
var getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var getRandomNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var getRandomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ",", "'", "/", "<", ">",];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var getRandomLength = prompt("How many characters would you like your password to contain?")

var getRandomsymbol = window.confirm("Click OK to confirm including special characters")

var getRandomNumber = window.confirm("Click OK to confirm including numeric characters")

var getRandomLower = window.confirm("Click OK to confirm including uppercase characters")

var getRandomUpper = window.confirm("Click OK to confirm including lowercase characters")

// function generatePassword() {
//   return prompt("this is a prompt")
// }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
