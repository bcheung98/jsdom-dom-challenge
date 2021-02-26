let displayCounter = document.getElementById("counter");
let currentCounter = -1;
let timer;

document.addEventListener("DOMContentLoaded", () => defaultTimer());

function defaultTimer() {
    currentCounter++;
    displayCounter.innerHTML = currentCounter;
    timer = setTimeout(defaultTimer, 1000);
}

let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");

plusButton.addEventListener("click", function () {
    if (!timePaused) {
        displayCounter.innerHTML = currentCounter + 1;
        currentCounter++;
    }
})

minusButton.addEventListener("click", function () {
    if (!timePaused) {
        displayCounter.innerHTML = currentCounter - 1;
        currentCounter--;
    }
})

let likeButton = document.getElementById("heart");
let likeList = document.querySelector(".likes");
let likedNumbers = [];
let likedCount;

likeButton.addEventListener("click", function () {
    if (!timePaused) {
        if (!likedNumbers.includes(currentCounter)) {
            likedCount = 1;
            likedNumbers.push(currentCounter);
            let newLikeCounter = document.createElement("li");
            newLikeCounter.setAttribute("id", currentCounter);
            newLikeCounter.innerText = `${currentCounter} has been liked 1 time`
            likeList.appendChild(newLikeCounter);
        }
        else {
            likedCount++;
            document.getElementById(currentCounter).innerText = `${currentCounter} has been liked ${likedCount} times`;
        }
    }

});

let pauseButton = document.getElementById("pause");
let timePaused = false;

pauseButton.addEventListener("click", function () {
    if (timePaused) {
        defaultTimer();
        pauseButton.innerText = "pause";
        timePaused = false;
        minusButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
    }
    else {
        clearTimeout(timer);
        pauseButton.innerText = "resume"
        timePaused = true;
        minusButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;
    }
});

let inputBox = document.getElementById("comment-form");
let userInput = document.getElementById("comment-input");
let comments = document.querySelector(".comments");

inputBox.addEventListener("submit", (e) => {
    e.preventDefault();
    let newComment = document.createElement("p");
    newComment.textContent = userInput.value;
    comments.appendChild(newComment);
    e.target.reset()
});