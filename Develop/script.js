//arrays of varrying criteria
// const upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// const specialArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// const lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generatePassword = function() {
  
  //empty array + scoped variables
  const fullPassArray = [];
  var passLength;
  var fullPassword = "";
  var passCriteria = 0;
  
  //confrim how long the user wants their password
  var lengthConfirm = window.prompt("How long do you want your password to be? Please select a number between 8 and 128.");
  debugger;
  if (lengthConfirm === "" || lengthConfirm === null) {
    window.alert("Please input a valid response, thank you!")
    return generatePassword();
  }
  else if (lengthConfirm < 8 || lengthConfirm > 128) {
    window.alert("Please input a number between 8 and 128.");
    return generatePassword();
  }
  else {
    window.alert("You have selected a length of " + lengthConfirm + " for your password.");
    var passLength = lengthConfirm;
  }

  //ask user if they want special characters then push array to primary array
  var specialConfirm = window.confirm("Do you want special characters in your password?");
  if (specialConfirm) {
    fullPassArray.push (" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
    window.alert("You have chosen to include special characters!");
    passCriteria++;
  }
  else {
    window.alert("You have declined to add special characters!");
  }

  //ask user if they want upper case characters then push array to primary array
  var upperConfirm = window.confirm("Do you want to include upper case letters in your password?");
  if (upperConfirm) {
    fullPassArray.push ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    window.alert("You have chosen to include upper case letters!");
    passCriteria++;
  }
  else {
    window.alert("You have declined to add upper case characters!");
  }

  //ask user if they want lower case characters then push array to primary array
  var lowerConfirm = window.confirm("Do you want to include lower case letters in your password?");
  if (lowerConfirm) {
    fullPassArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    window.alert("You have chosen to include lower case letters!");
    passCriteria++;
  }
  else {
    window.alert("You have declined to add lower case characters!")
  }

  //ask user if they want to include numeric characters then push array to primary array
  var numericConfirm = window.confirm("Do you want numeric characters in your password?");
  if (numericConfirm) {
    fullPassArray.push ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    window.alert("You have chosen to include numeric characters!");
    passCriteria++;
  }
  else {
    window.alert("You have declined to add numeric characters!");
  }

  //check passCriteria and if it is 0, the user did not select enough criteria and will be sent back to beginning.
  if (passCriteria === 0) {
    window.alert("You need to select at least one additive to generate your password properly!");
    generatePassword();
  }
  
  //take users length input, loop x times, adding a randomly indexed number/character from fullPassArray.
  for (var i = 0; i < passLength; i++) {
    fullPassword += fullPassArray[Math.floor(Math.random() * fullPassArray.length)];
  }
  //return the randomly generated password
  return fullPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
