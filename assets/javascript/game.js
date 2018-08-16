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
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var zombie = ["z", "o", "m", "b", "i", "e"]
var ghoul = ["g", "h", "o", "u", "l"]
var skeleton = ["s", "k", "e", "l", "e", "t", "o", "n"]
var ghost = ["g", "h", "o", "s", "t"]
var wraith = ["w", "r", "a", "i", "t", "h"]
var lich = ["l", "i", "c", "h"]
var poltergeist = ["p", "o", "l", "t", "e", "r", "g", "e", "i", "s", "t"]
var shadow = ["s", "h", "a", "d", "o", "w"]
var ghast = ["g", "h", "a", "s", "t"]
var wight = ["w", "i", "g", "h", "t"]


document.onkeyup = function (event) {
    var key = event.key
    if (alpha.indexOf(key.toLowerCase()) == '-1') {
        alert("Making the code to check for your keys made me cry.");
    }
    else {
        for (var i = 0; i < zombie.length; i++) {
            if (zombie[i].charAt(0) == key) {
                console.log(zombie[i])

            }
        }
        var guessCounter = 10;
        var guessRemain = document.getElementById("guessremain")
        guessRemain.textContent = guessCounter
        var paragraph = document.getElementById("guessed");
        paragraph.textContent += key + ", ";

    }
}