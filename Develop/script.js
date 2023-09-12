// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword(){
  getLength();
  getLower();
  getNumeric();
  getSpecial();
  console.log(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_+=<>?";

  var password = "";
  var criteria = [];

  var length = (prompt("Enter password length (between 8 and 128):"));

  if (isNaN(length) || length < 8 || length > 128) {
      alert("Password length must be between 8 and 128 characters.");
      return;
  }

  if (confirm("Include lowercase characters?")) {
      criteria.push(lowercaseChars);
  }
  if (confirm("Include uppercase characters?")) {
      criteria.push(uppercaseChars);
  }
  if (confirm("Include numeric characters?")) {
      criteria.push(numericChars);
  }
  if (confirm("Include special characters?")) {
      criteria.push(specialChars);
  }

  if (criteria.length === 0) {
      alert("You must select at least one character type.");
      return;
  }

  for (var i = 0; i < length; i++) {
      var randomCriteria = criteria[Math.floor(Math.random() * criteria.length)];
      var randomChar = randomCriteria.charAt(Math.floor(Math.random() * randomCriteria.length));
      password += randomChar;
  }

  alert("Generated Password: " + password);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElementById("password").value = password;