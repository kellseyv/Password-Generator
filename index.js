const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")


function generatePassword(){
    let password1 = []
    let password2 = []

    for(let i = 0; i < 15; i++){
        let temp = Math.floor(Math.random() * characters.length)
        password1 += characters[temp]
    }

    firstPassword.textContent = [password1]
    secondPassword.textContent = [password1]
    //returnPasswords(password1)
}

function returnPasswords([]){

}