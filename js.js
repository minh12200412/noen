function playMusic() {
  const audio = document.getElementById("audioPlayer");
  audio.play().catch((error) => {
    console.log("Không thể phát nhạc do lỗi: ", error);
  });
}
