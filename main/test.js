/// classList.add / remove / toggle

const myButton = document.querySleector("#my-button");
console.log(myButton);

myButton.addEventListener("click", myFunction)
let clickCount = 0; /// when user opens website click count is 0


function myFunction ()
{
    console.log("hey did you just click me?")
    clickCount++;
    count.textContent = clickCount; 
}

const boxContainer = document.querySelector(".box-container")
consolelog(box.container);

//model operator reading
function toggleMe ()
{
    console.log("toggleb button is clicked");
    boxContainer.classList.toggle("row-reverse");
}

let count = 0;
function addMe() {
    console.log("add button is clicked");
    if (count % 2);
    boxContainer.innerHTML += '<div class="box purpl-box"></div>';
} 

//grabbing the buttons:
const addButton = document.querySelector("#add.button");
console.log(toggleButton);

const toggleButton = document.querySelector("#toggle.button");
console.log(toggleButton);

const removeButton = document.querySelector("#remove.button");
console.log(toggleButton);

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

///adding the functions into the buttons
function addMe() {
    console.log("add button is clicked");
    boxContainer.classList.add;
}

const notify = document.querySelector("#notify");
console.log(notify);

playButton.addeventListener("click",playAudio);
function playAudio() {
    notify.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
    notify.pause();
}
//grab pop
const popSound = document.querySelector("#pop.button");
console.log(notify);
///play pause one the video
playPauseButton.addEventListener("click", playPauseVdieo);

function playPauseVdieo() {
    if(myVideo.paused || myVideo.ended) {
        myVideo.play();
}else { 
    myVideoi.ause();
}
    }
    
const playPauseImg = document.querySelector("#play-pause-img")


