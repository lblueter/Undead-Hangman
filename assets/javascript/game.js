var wins = document.getElementById("wins")
var guessRemain = document.getElementById("guessRemain")
var guessed = document.getElementById("guessed")
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

document.onkeyup = function(event) {
    for (var i = 0; i < wordList.length; i++) {
        console.log(wordList[0])
        var letter = event.key.toLowerCase();

        if (wordList[0].charAt[i] === letter) {
            
        }
    }
}