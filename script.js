var generateBtn = document.querySelector("#generate");

function generatePassword() {

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
 
var resultArray = [];
var userArray = [];

// uppercaseArray [1]

  var numCharacter = prompt ("How many characters would you like your password to be (must be between 8 and 128 characters)?");
  if (numCharacter < 8) {
    alert ("Has to be greater than or equal to 8.")
    return;
  }
  if (numCharacter > 128) {
    alert ("Has to be less than or equal to 128.")
    return;
  }
  var numbers = confirm ("Would you like numbers in your password?");
  var uppercases = confirm ("Would you like uppercase letters in your password?");
  var lowercases = confirm ("Would you like lowercase letters in your password?");
  var characters = confirm ("Would you like special characters in your password?");


if (numbers){
  resultArray = resultArray.concat(numbArray);
  userArray.push (numbArray[Math.floor(Math.random() * numbArray.length)]);
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);
  userArray.push (uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)]);
}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);
  userArray.push (lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)]);
}

if (characters){
  resultArray = resultArray.concat(characterArray);
  userArray.push (characterArray[Math.floor(Math.random() * characterArray.length)]);
}
console.log(resultArray)


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


// function copyToClipboard() {
// }

generateBtn.addEventListener("click", writePassword);