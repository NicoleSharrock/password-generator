// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here
const getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const getRandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const getRandomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ",", "'", "/", "<", ">",];
const maxLength = 128


function generatePassword() {
  var results = "";
  var numberOfCharacters = window.prompt("How many characters would you like your password to contain?");
  var maxLength = parseInt(numberOfCharacters);

  if (maxLength > 7 && maxLength < 129) {


    var symbol = window.confirm("Click OK to confirm including special characters");

    var number = window.confirm("Click OK to confirm including numeric characters");

    var lower = window.confirm("Click OK to confirm including uppercase characters");

    var upper = window.confirm("Click OK to confirm including lowercase characters");
  } else {
    window.alert("Invaild entry. Please input a length between 8 and 128");
    return !generatePassword;
  }

  var pool = [];

  if (symbol == true) pool.push(...getRandomSymbol);
  if (number == true) pool.push(...getRandomNumber);
  if (lower == true) pool.push(...getRandomLower);
  if (upper == true) pool.push(...getRandomUpper)

  if (getRandomSymbol || getRandomNumber || getRandomLower || getRandomUpper) {
    for (var i = 0; i < maxLength; i++) {
      results += pool[Math.floor(Math.random() * pool.length)];
    }
  } else {
    window.alert("A minimum of 1 variable must be selected to generate a paaword.")
    return generatePassword();
  }
  return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
