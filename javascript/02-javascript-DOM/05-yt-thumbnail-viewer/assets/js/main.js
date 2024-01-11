const urlFormEl = document.querySelector("#urlForm");
const thumbnailImgEl = document.querySelector("#thumbnailImg");
const urlInputEl = document.querySelector("#urlInput");

const videoURL = `https://www.youtube.com/watch?v=Fh9YgIT1mPc`;

const videoId = videoURL.substring("32");

const getUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

// https://www.youtube.com/watch?v=Fh9YgIT1mPc
// https://i.ytimg.com/vi/[VIDEO_ID]/maxresdefault.jpg
urlFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (urlInputEl.value === "") {
  } else {
    thumbnailImgEl.src = getUrl;
    thumbnailImgEl.alt = urlInputEl.value;
    thumbnailImgEl.classList.remove("hidden", "w-10", "h-10", "mx-auto");
    thumbnailImgEl.classList.add("px-40", "py-3", "rounded");
  }

  const inputUrl = e.target[0].value;

  console.log(inputUrl);
});
