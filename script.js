// Assignment Code
var generateBtn = document.querySelector("#generate");

//use these boolean variables to store what criteria needs to be met.
var pwLength = 0;
var pwNum = false;
var pwCap = false;
var pwLow = true;
var pwSpChar = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);

}

function generatePassword() {
    //prompt user
    pwLength = prompt("How many characters do you want the password to be?");
    pwNum = confirm("Do you want to allow numeric characters?");
    pwCap = confirm("Do you want to allow capital letters?");
    pwLow = confirm("What about lowercase ones?");
    pwSpChar = confirm("And finally, do you want to include special characters?");

    //create local variables
    var criteria = [];
    var newPW = "";

    //check which criteria the user selected
    if(pwNum){
        criteria.push('1','2','3','4','5','6','7','8','9','0');
    }
    if(pwCap){
        criteria.push('A','B','C','D','E','F','G','H','I','J','K','L'
            ,'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    }
    if(pwLow){
        criteria.push('a','b','c','d','e','f','g','h','i','j','k','l'
            ,'m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    }
    if(pwSpChar){
        criteria.push('!','#','$','%','&','(',')','-','/',':',';','?','@','[',']','~');
    }

    //loop through length of desired password and add a random character from the criteria array
    for(var i = 0; i < pwLength; i++){
        var randomChar = criteria[Math.floor(criteria.length * Math.random())];

        //add new character to the new password string
        newPW = newPW.concat(randomChar);
    }
    
    return newPW;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
