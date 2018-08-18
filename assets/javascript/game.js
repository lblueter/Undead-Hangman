var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var zombie = ["z", "o", "m", "b", "i", "e"]
// var ghoul = ["g", "h", "o", "u", "l"]
// var skeleton = ["s", "k", "e", "l", "e", "t", "o", "n"]
// var ghost = ["g", "h", "o", "s", "t"]
// var wraith = ["w", "r", "a", "i", "t", "h"]
// var lich = function () { ["l", "i", "c", "h"] }
// var poltergeist = ["p", "o", "l", "t", "e", "r", "g", "e", "i", "s", "t"]
// var shadow = ["s", "h", "a", "d", "o", "w"]
// var ghast = ["g", "h", "a", "s", "t"]
// var wight = ["w", "i", "g", "h", "t"]
var winNumber = 0;
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
    return Math.floor(Math.random() * wordList.length)
}
var randomNumber = random();
console.log(randomNumber)
var chosenWord = wordList[randomNumber]
console.log(chosenWord)
var used = [];
var guessCounter = 10;
var displayedWord = [];
var guessedLetter = [];
var chosenWordArray = chosenWord.split("")
guessedLetter.length = chosenWordArray.length
displayedWord.length = guessedLetter.length
// make blank array = length of word
// match index of array to blank array
// display blank array on html
var reset = function () {
    for (var k = 0; k < chosenWordArray.length; k++) {
        displayedWord[k] = (" _ ")
    }
}
var doTheReset = reset()
console.log(displayedWord)
var word = document.getElementById("word")
word.textContent = displayedWord
console.log(doTheReset)
// .split("") splits string on every character into an array


document.onkeyup = (function (event) {
    var key = event.key
    var word = document.getElementById("word")
    var paragraph = document.getElementById("guessed");
    var guessRemain = document.getElementById("guessremain")
    var wins = document.getElementById("wins")
    if (alpha.indexOf(key.toLowerCase()) == '-1') {
        alert("Making the code to check for your keys made me cry.");
    }
    else {
        if (used.indexOf(key) == "-1") {
            for (var i = 0; i < chosenWordArray.length; i++) {
                if (chosenWordArray[i] == key) {
                    console.log(chosenWordArray[i])
                    guessedLetter[i] = key
                    console.log(guessedLetter)
                    for (var j = 0; j < chosenWordArray.length; j++) {
                        if (chosenWordArray[j] == guessedLetter[j]) {
                            // displayedWord = []
                            displayedWord[j] = guessedLetter[j]
                            console.log(displayedWord)
                        }
                        else {
                            displayedWord[j] = " _ "
                        }
                    }
                }

            }
            word.textContent = displayedWord
            used.unshift(key)
            console.log(used)
            paragraph.textContent += key + ", ";
            if (chosenWordArray.indexOf(key) == "-1") {
                guessCounter--;
            }
            if (guessCounter < 1) {
                alert("You Lose.")
                guessCounter = 10
                used = [" "]
                paragraph.textContent = " "
            }
            console.log(guessCounter)
            guessRemain.textContent = guessCounter
            // if (chosenWordArray == displayedWord) {
            //     alert("You Win.")
            //     guessCounter = 10
            //     used = [" "]
            //     paragraph.textContent = " "
            // }
            if (displayedWord.indexOf(" _ ") == "-1") {
                alert("You Win!")
                winNumber++;
                wins.textContent = winNumber
                randomNumber = random();
                console.log(randomNumber)
                chosenWord = wordList[randomNumber]
                console.log(chosenWord)
                used = [];
                guessCounter = 10;
                displayedWord = [];
                guessedLetter = [];
                chosenWordArray = chosenWord.split("")
                guessedLetter.length = chosenWordArray.length
                displayedWord.length = guessedLetter.length
                paragraph.textContent = " "
                reset();
                console.log(doTheReset)
                word.textContent = displayedWord
            }
        }

    }
})

