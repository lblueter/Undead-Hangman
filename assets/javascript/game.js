var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var winNumber = 0;
var lossNumber = 0;
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
    "shadow",
    "banshee",
    "dracolich",
    "flameskull",
    "revenant",
    "mummy",
    "specter",
    "vampire",
    "bodak",
    "alhoon",
    "nightwalker",
    "phantasm"
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


document.onkeyup = (function (event) {
    var key = event.key
    var word = document.getElementById("word")
    var paragraph = document.getElementById("guessed");
    var guessRemain = document.getElementById("guessremain")
    var wins = document.getElementById("wins")
    var losses = document.getElementById("losses")
    if (alpha.indexOf(key.toLowerCase()) == '-1') {
        alert("Please press a letter of the alphabet or the undead army will catch you.");
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
                lossNumber++;
                losses.textContent = lossNumber;
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
            console.log(guessCounter)
            guessRemain.textContent = guessCounter
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

