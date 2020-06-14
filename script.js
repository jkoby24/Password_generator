// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for user option arrays 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]" ];


var decision; 
// Variables for user numbers 
var first; 
var userNumber;
var userChar; 
var userUpper;
var userLower;


 //Write password to the #password input
function writePassword(event) {
  event.preventDefault();

  first = parseInt(prompt("How many characters would you to include in your password?",'8-128 characters')); 

  if (!first) {
    alert("This requires an input");
} else if (first < 8 || first > 128) {
    first = parseInt(prompt("Must be between 8 and 128 characters"));
    return 
} else {
    userNumber = confirm("Would you like to include numbers?");
     userChar = confirm("Would you like to have special characters?");
      userUpper = confirm("Would you like to have Uppercase letters?");
     userLower = confirm("Would you like to have Lowercase letters?");
}
  if (userNumber && userChar && userUpper && userLower ) {
  decision = upperCase.concat(lowerCase,numbers,specialChar);
}
else if (userNumber && userChar && userUpper ) {
  decision = upperCase.concat(numbers,specialChar);
}
else if (userNumber && userChar && userLower ) {
  decision = lowerCase.concat(numbers,specialChar);
}
else if (userNumber && userUpper && userLower ) {
  decision = upperCase.concat(lowerCase,numbers);
}
else if (userChar && userUpper && userLower ) {
decision = upperCase.concat(lowerCase,specialChar);
}
else if (userNumber && userChar ) {
  decision = numbers.concat(specialChar);
}
else if (userNumber && userUpper ) {
  decision = upperCase.concat(numbers);
}
else if (userNumber && userLower ) {
  decision = numbers.concat(lowerCase);
}
else if (userUpper && userChar ) {
  decision = upperCase.concat(specialChar);
}
else if (userLower && userChar ) {
  decision = lowerCase.concat(specialChar);
}
else if (userUpper && userLower ) {
  decision = upperCase.concat(lowerCase);
}
else if (userUpper) {
  decision = upperCase; 
}
else if (userLower) {
  decision = lowerCase; 
}
else if (userChar) {
  decision = specialChar; 
}
else if (userNumber) {
  decision = numbers; 
}

var values = []; 

for (var i = 0; i <= first; i++) {
   userChoices = decision[Math.floor(Math.random() * Math.floor(decision.length + 1))];
  values.push(userChoices);
}

var password = values.toString(); 


  var passwordText = document.querySelector("#password").textContent = password;
  

  passwordText.value = password;


  

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
