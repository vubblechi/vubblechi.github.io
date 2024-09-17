


const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; ///PERSONAL NOTE1: Replace this with a more sleek/modern looking icon.///
} else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png"; /// ///
}
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
progressBar.style.width = value + "%";
}

