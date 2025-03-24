const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

let passwordEls = [firstPassword, secondPassword]

// Generates our random passwords
function generatePasswords(){

    // We create a random 15 digit password for each password in the passwordsEls
    for(el of passwordEls){
        let generatedPass = ""

        for (let i = 0; i < 15; i++) {
            generatedPass += characters[generateRandomNumber()]
        }

        // Update the HTML with generated password
        el.textContent = generatedPass
    }

}

// Function to generate generate random number based on the length of characters 
function generateRandomNumber(){
    return Math.floor(Math.random() * characters.length)
}

// Copies the password pressed to clipboard
function copyText(password){
    if (password.textContent){
        navigator.clipboard.writeText(password.textContent)
        alert("Text Copied!")
    } else {
        alert("No password generated yet")
    }
}