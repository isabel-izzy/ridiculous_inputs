function getRandomLetters() {
    let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = letterArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [letterArray[i], letterArray[j]] = [letterArray[j], letterArray[i]];
    }

    // Select the first 3 shuffled letters
    return letterArray.slice(0, 3);
}

function displayPercent() {
    let random = Math.floor(Math.random() * 100) + 1;
    let randomLetters = getRandomLetters(); // Get 3 random letters

    document.getElementById("bebel2").innerHTML = 
    `<span style="color: red; font-weight: bold;">Error! Password is only ${random}% accurate.</span> 
    <br>Try letters: <span style="color: grey;">${randomLetters.join(", ")}</span>`;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bebel").addEventListener("click", displayPercent);
});