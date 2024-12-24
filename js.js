document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("background-music");
  music.play().catch(() => {
    console.log("Trình duyệt yêu cầu tương tác để phát nhạc.");
  });
});
