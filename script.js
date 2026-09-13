const image = document.getElementById("musicImage");
const audio = document.getElementById("audio");
const cd = document.getElementById("cd");

image.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    cd.classList.add("spinning");
  } else {
    audio.pause();
    cd.classList.remove("spinning");
  }
});

/* Stop the spinning when the song naturally ends */
audio.addEventListener("ended", () => {
  cd.classList.remove("spinning");
});
