// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Assignment code here
const getRandomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const getRandomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const getRandomNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const getRandomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ",", "'", "/", "<", ">",];
const maxLength = [128]

const randomFun = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  Symbol: getRandomSymbol
}




function generatePassword() {
  var results = "";
  var numberOfCharacters = window.prompt("How many characters would you like your password to contain?");
  var maxLength = parseInt(numberOfCharacters);

  if (maxLength > 7 && maxLength < 129) {


    var getRandomsymbol = window.confirm("Click OK to confirm including special characters");

    var getRandomNumber = window.confirm("Click OK to confirm including numeric characters");

    var getRandomLower = window.confirm("Click OK to confirm including uppercase characters");

    var getRandomUpper = window.confirm("Click OK to confirm including lowercase characters");
  } else {
    window.alert("Invaild entry. Please input a length between 8 and 128");
    return generatePassword;
  }

  var pool = [];

  if (getRandomSymbol == true) pool.push(..)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
