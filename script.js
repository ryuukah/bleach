const image = document.getElementById("musicImage");
const audio = document.getElementById("audio");

image.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
