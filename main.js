onload = () =>{
        document.body.classList.remove("container");
};
function showLetter() {
  const letter = document.getElementById("letterBox");
  letter.style.display = "block";

  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
}

window.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  }
});
