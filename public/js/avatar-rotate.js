document.addEventListener("DOMContentLoaded", () => {
  const avatar = document.getElementById("jade-avatar");
  const imageCount = 4;
  let current = 1;

  // Lock dimensions & style early
  avatar.style.width = "100%";
  avatar.style.height = "100%";
  avatar.style.objectFit = "cover";
  avatar.style.display = "block";
  avatar.style.transition = "opacity 0.4s ease-in-out";
  avatar.classList.add("jade-avatar-rotating");

  // Preload avatars
  preloadImages();

  // Start the rotation loop with a short buffer
  setTimeout(() => {
    setInterval(() => {
      // Fade out
      avatar.style.opacity = "0";

      // Swap image after fade out
      setTimeout(() => {
        current = (current % imageCount) + 1;
        avatar.src = `/images/jade-avatar-${current}.png`;
        avatar.style.opacity = "1"; // fade back in
      }, 250); // match fade timing
    }, 5000); // image swap every 5 seconds
  }, 300); // slight buffer on initial load

  // Preload helper
  function preloadImages() {
    for (let i = 1; i <= imageCount; i++) {
      const img = new Image();
      img.src = `/images/jade-avatar-${i}.png`;
    }
  }
});
