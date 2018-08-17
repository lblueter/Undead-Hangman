
var wins = document.getElementById("wins")
var wordList = [
    "zombie",
    "ghoul",
    "ghost",
    "skeleton",
    "wraith",
    "poltergeist",
    "lich",
    "wight",
    "ghast",
    "shadow"
]
var random = function () {
    Math.floor(Math.random() * wordList.length)
}
console.log(random)
chosenWord = wordList[random]
console.log(chosenWord)
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var zombie = ["z", "o", "m", "b", "i", "e"]
var ghoul = ["g", "h", "o", "u", "l"]
var skeleton = ["s", "k", "e", "l", "e", "t", "o", "n"]
var ghost = ["g", "h", "o", "s", "t"]
var wraith = ["w", "r", "a", "i", "t", "h"]
var lich = function () { ["l", "i", "c", "h"] }
var poltergeist = ["p", "o", "l", "t", "e", "r", "g", "e", "i", "s", "t"]
var shadow = ["s", "h", "a", "d", "o", "w"]
var ghast = ["g", "h", "a", "s", "t"]
var wight = ["w", "i", "g", "h", "t"]
var used = [ ];
var guessCounter = 10;
var newWord = [ ];
var chosenWordArray = chosenWord.split("")
// make blank array = length of word
// match index of array to blank array
// display blank array on html
for (var o = 0; o < zombie.length; o++) {
    newWord.push("_ ")
}
// .split("") splits string on every character into an array


document.onkeyup = (function (event) {
    var key = event.key
    var word = document.getElementById("word")
    var paragraph = document.getElementById("guessed");
    var guessRemain = document.getElementById("guessremain")
    if (alpha.indexOf(key.toLowerCase()) == '-1') {
        alert("Making the code to check for your keys made me cry.");
    }
    else {
        newWord = []
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWordArray[i] == key) {
                console.log(chosenWordArray[i])
                for (var j = 0; j < chosenWordArray; j++) {

                }
                //if (character = chosenWordArray[i])
                // displayword += character
                //for (loop) {
                //     for (loop) {
                //     if ( guessedLetter[j] === chosenWordArray[j])
                //     displayedWord += guessedLetter[j]
                //     else {
                //         displayWord += "_ "
                //     }
                // }
                // }
                //HOW TO GET THE LETTERS IN THE RIGHT SPOT
                // _ _ o_ _ _ _
                
                // make 6 p tags?
            }
        }
        //COUNTER GO DOWN WHEN INCORRECT, STAY SAME WHEN CORRECT
        //HOW TO STOP REPEATS
        //keep track in an array?
        //How make an array and add in new inputs?
        
        if (used.indexOf(key) == "-1") {
            used.unshift(key)
            console.log(used)
            paragraph.textContent += key + ", ";
            guessCounter--;
            console.log(guessCounter)
            guessRemain.textContent = guessCounter
        }
        if (guessCounter < 1) {
            alert("You Lose.")
            guessCounter = 10
            used = [" "]
            paragraph.textContent = " "
        }
    }
})

