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
    console.log(pwLength)
    pwNum = confirm("Do you want to allow numeric characters?");
    console.log(pwNum)
    pwCap = confirm("Do you want to allow capital letters?");
    console.log(pwCap);
    pwLow = confirm("What about lowercase ones?");
    console.log(pwLow);
    pwSpChar = confirm("And finally, do you want to include special characters?");
    console.log(pwSpChar);

    var criteria = [];
    var newPW = "";
    if(pwLow){
        criteria.push('a','b','c','d','e','f','g','h','i','j','k','l'
            ,'m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    }

    for(var i = 0; i < pwLength; i++){
        var randomChar = criteria[Math.floor(criteria.length * Math.random())];
        newPW = newPW.concat(randomChar);
    }

    

    return newPW;
    


    //math.random
    //conditionals
    //array logic
     //callback function

     //get values from user

    


     return "Howdy!";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
