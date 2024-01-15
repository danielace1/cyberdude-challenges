// https://api.adviceslip.com/

const blockquoteEl = document.querySelector("blockquote");
const generateBtnEl = document.querySelector("button");

const quotesURL = "https://api.adviceslip.com/advice";

// hide the button
generateBtnEl.style.display = "none";

generateBtnEl.addEventListener("click", () => {
  window.location.href = "/";
});

// Using await and async
async function getAdvicesData() {
  try {
    const quotes = await fetch(quotesURL);
    const jsonData = await quotes.json();
    return jsonData;
  } catch (error) {
    console.error("Error in fetching quotes:", error);
  }
}

const res = await getAdvicesData();
blockquoteEl.textContent = res.slip.advice;

// display the button
generateBtnEl.style.display = "block";
