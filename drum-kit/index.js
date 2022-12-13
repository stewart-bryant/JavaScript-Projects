//detect button clicks
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //check which button was clicked and send to makeSound()
        let buttonInnerText = this.innerText;
        makeSound(buttonInnerText);
        buttonAnimation(buttonInnerText);
    });
}

//detect keyboard press
document.addEventListener("keydown", function (event) {
    //check which key was pressed and send to makeSound()
    makeSound(event.key);
    buttonAnimation(event.key);
})

//determine which sound to play based on key
function makeSound(key) {
    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
           break;
        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: 
            console.log(this.innerText);
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}