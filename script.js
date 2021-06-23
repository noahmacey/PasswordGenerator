var generateBtn = document.querySelector("#generate");

function generatePassword() {

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
 
var resultArray = [];
var userArray = [];

  var numCharacter = prompt ("How many characters would you like your password to be (must be between 8 and 128 characters)?");
  
  if (numCharacter < 8) {
    alert ("Has to be greater than or equal to 8.")
    return;
  }

  if (numCharacter > 128) {
    alert ("Has to be less than or equal to 128.")
    return;
  }

  var lowercase = confirm ("Include lowercase letters in your password?");
  var uppercase = confirm ("Include uppercase letters in your password?");
  var numbers = confirm ("Include numbers in your password?");
  var specialCharacters = confirm ("Include special characters in your password?");



if (lowercase){
  resultArray = resultArray.concat(lowercaseArray);
  userArray.push (lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
}

if (uppercase){
  resultArray = resultArray.concat(uppercaseArray);
  userArray.push (uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
}

if (numbers){
  resultArray = resultArray.concat(numArray);
  userArray.push (numArray[Math.floor(Math.random() * numArray.length)]);
}

if (specialCharacters){
  resultArray = resultArray.concat(specialArray);
  userArray.push (specialArray[Math.floor(Math.random() * specialArray.length)]);
}

for (var i = userArray.length; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);