const urlFormEl = document.querySelector("#urlForm");
const thumbnailImgEl = document.querySelector("#thumbnailImg");

urlFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const urlInputEl = document.querySelector("#urlInput");
  const urlInputElVal = urlInputEl.value;

  // https://www.youtube.com/watch?v=Fh9YgIT1mPc
  // https://www.youtube.com/watch?v=ZQkUYmaVwgs&list=RDCLAK5uy_ksEjgm3H_7zOJ_RHzRjN1wY-_FFcs7aAU

  const videoId = urlInputElVal.slice(32, 43);
  const videoId2 = urlInputElVal.slice(49);

  const getUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  const validUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const validUrl2 = `https://www.youtube.com/watch?v=${videoId}&list=${videoId2}`;

  if (urlInputEl === "") {
  } else if (urlInputElVal === validUrl || urlInputElVal === validUrl2) {
    thumbnailImgEl.src = getUrl;
    thumbnailImgEl.alt = videoId;
    thumbnailImgEl.classList.remove("hidden", "w-10", "h-10", "mx-auto");
    thumbnailImgEl.classList.add("px-40", "py-3", "rounded");
  } else {
    alert("Enter Youtube video URL only!");
  }
});
