// Youtube Links
// Single Video - https://www.youtube.com/watch?v=Fh9YgIT1mPc
// Playlist- https://www.youtube.com/watch?v=ZQkUYmaVwgs&list=RDCLAK5uy_ksEjgm3H_7zOJ_RHzRjN1wY-_FFcs7aAU
// Live - https://www.youtube.com/watch?v=6CKoXhYOhXM&pp=ygUMbGl2ZSB2aWRlb3Mn

const urlFormEl = document.querySelector("#urlForm");
const thumbnailImgEl = document.querySelector("#thumbnailImg");

urlFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const urlInputEl = document.querySelector("#urlInput");
  const urlInputElVal = urlInputEl.value;

  // Regular expression to extract video ID from YouTube URL
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = urlInputElVal.match(regex);

  if (match) {
    const videoId = match[1];
    const getUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

    thumbnailImgEl.src = getUrl;
    thumbnailImgEl.alt = videoId;
    thumbnailImgEl.classList.remove(
      "hidden",
      "w-8",
      "lg:w-10",
      "lg:h-10",
      "lg:mx-auto"
    );
    thumbnailImgEl.classList.add(
      "px-5",
      "py-1",
      "lg:px-40",
      "lg:py-3",
      "rounded"
    );
  } else {
    alert("Enter a valid YouTube video URL!");
  }
});
