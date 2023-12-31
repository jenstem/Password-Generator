// Add lowercase, uppercase, number and special character options in variables, variables go at top
var lowerCaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharOptions = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~"]

// Starter Code - Start
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Starter Code - End

// Create function to hold prompts
function generatePassword() {
// Something to hold choosen options
  var createdPassword = []

// Prompts
var passwordLength = window.prompt("How many characters would you like your password to contain?  Pick a number between 8 and 128.");
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Please pick a number between 8 and 128.");
  return;
}

var lowerCase = window.confirm("Click OK to include lowercase letters in your password.");
var upperCase = window.confirm("Click OK to include uppercase letters in your password.");
var numbersChoosen = window.confirm("Click OK to include numbers in your password.");
var specialCharChoosen = window.confirm("Click OK to include special characters in your password.");

// Add options to password with concat - if statement for each option
if (lowerCase){
  createdPassword = createdPassword.concat(lowerCaseOptions)
  }
if (upperCase){
  createdPassword = createdPassword.concat(upperCaseOptions)
  }
if (numbersChoosen){
  createdPassword = createdPassword.concat(numberOptions)
  }
if (specialCharChoosen){
  createdPassword = createdPassword.concat(specialCharOptions)
  }

// Loop through options and add to create password
// Something to hold the password
  var password = "";
for (let i = 0; i < passwordLength; i++) {
    password += createdPassword[Math.floor(Math.random() * createdPassword.length)]
}

return password;

}

// Starter Code - Start
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Starter Code - End