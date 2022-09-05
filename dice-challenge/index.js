let randomNumber1 = Math.ceil(Math.random()*6);
let randomNumber2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src", `/images/dice${randomNumber1}.png`);

document.querySelector(".img2").setAttribute("src", `/images/dice${randomNumber2}.png`);

document.querySelector("h1").innerText = declareWinner();

function declareWinner () {
    if (randomNumber1 > randomNumber2) {
        return "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        return "Player 2 Wins! 🚩";
    } else {
        return "Draw!"
    }
}
