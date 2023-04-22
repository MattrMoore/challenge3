// generate the button
var generateBtn = document.querySelector("#generate");
//options for the password
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
// special options depending on the parameters of the desired password
var passwordLength;
var upperCheck;
var numberCheck;
var specialCheck;

// function to determine the length of the password
function determineLength(){
  passwordLength = prompt("How many characters long you'd like your password to be? (must be between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }
    return passwordLength;
}

// function to see if user wants to use numbers in the password
function determineNumbers(){
  numberCheck = prompt("Would you like to use numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

// function used to determine if user wants to use uppercase characters in the password
function determineUppercase(){
    upperCheck = prompt("Would you like to use uppercase letters in your password? \n(Yes or No)");
      upperCheck = upperCheck.toLowerCase();
  
      if (upperCheck === null || upperCheck === ""){
        alert("Please answer Yes or No");
        determineUppercase();
  
      }else if (upperCheck === "yes" || upperCheck ==="y"){
        upperCheck = true;
        return upperCheck;
  
      }else if (upperCheck === "no" || upperCheck ==="n"){
        upperCheck = false;
        return upperCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineUppercase();
      }
      return upperCheck;
  }
  
// function used to determine if the user wants to use special characters
function determineSpecial(){
  specialCheck = prompt("Would you like to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

 // function used to take all the input from the previous functions and generate a password 

function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(upperCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowerChar;
var password = "";
if (upperCheck && numberCheck && specialCheck){
  characters  + numberChar + specialChar;

}else if (upperCheck && numberCheck){
  characters  + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (upperCheck && specialCheck){
  characters  + specialChar;

}else if (upperCheck){
  characters ;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowerChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// write password 
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

generateBtn.addEventListener("click", writePassword);
