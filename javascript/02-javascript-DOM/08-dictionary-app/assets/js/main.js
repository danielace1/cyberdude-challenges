// api url
// https://dictionaryapi.dev/

const inputSearchEl = document.querySelector("#wordSearch");
const searchBtnEl = document.querySelector("#searchBtn");
const searchWordEl = document.querySelector("#searchword");
const phoneticsEl = document.querySelector("#phonetic");
const audioEl = document.querySelector("audio");
const playBtnEl = document.querySelector("#playBtn");
const partOfSpeech = document.getElementById("partOfSpeech");
const definitionEl = document.getElementById("definition");

const searchImg = document.querySelector("#searchImg");
const notFoundImgEl = document.querySelector("#notFoundImg");

const contentSection = document.querySelector("#content");

const DICT_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

async function getDictionaryData(word) {
  try {
    // fetching data according to input search
    const dictionary = await fetch(`${DICT_URL}${word}`);

    if (!dictionary.ok) {
      throw new Error(`Word '${word}' not found`);
    }

    const jsonData = await dictionary.json();
    console.log(jsonData);

    return jsonData;
  } catch (error) {
    if (error.message.includes("not found")) {
      const notFoundImg = `<img src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg" class='size-1/2' alt="notFoundImg" />`;
      searchImg.classList.add("hidden");
      notFoundImgEl.innerHTML = notFoundImg;
      contentSection.classList.add("hidden"); // Hide the content section
    } else {
      throw error;
    }
  }
}

// default audio playing action
playBtnEl.addEventListener("click", () => {
  // Play the audio
  audioEl.play();
});

// Function to display error message
function displayErrorMessage(msg) {
  notFoundImgEl.innerHTML = `<img src="https://img.freepik.com/premium-vector/search-result-find-illustration_585024-17.jpg" class='sm:size-1/2' alt="notFoundImg" />`;
}

// unique set for partofSpeech recognition
const seenPartOfSpeech = new Set();

// function for displayDicionary data
function displayDictionaryData(dictionaryData) {
  definitionEl.innerHTML = "";

  searchImg.classList.add("hidden");
  contentSection.classList.remove("hidden");

  //   mapping the dictionary object
  dictionaryData.map((values) => {
    searchWordEl.textContent = values.word;

    // checking audio src
    let audioFound = false;

    // looping the phonetic object
    for (let phonetic of values.phonetics) {
      phoneticsEl.textContent = phonetic.text;
      // Exit the loop after finding the phonetic text

      // Remove the hidden & ml class from the word & play button
      searchWordEl.classList.remove("ml-2");
      playBtnEl.classList.remove("hidden");

      if (phonetic.audio) {
        audioEl.src = phonetic.audio;

        // if audio src is there then it becomes true
        audioFound = true;
        break;
      }
    }
    // if there is no audio src then
    if (!audioFound) {
      searchWordEl.classList.add("ml-2");
      playBtnEl.classList.add("hidden");
    }

    //   Play Action
    playBtnEl.addEventListener("click", () => {
      audioEl.play();
    });

    // part of speech mapping from the dicitonary object
    let partOfSpeechHTML = "";

    values.meanings.map((meaning) => {
      const partOfSpeech = meaning.partOfSpeech;

      if (!seenPartOfSpeech.has(partOfSpeech)) {
        // Comma separated word
        if (seenPartOfSpeech.size > 0) {
          partOfSpeechHTML += ", ";
        }

        seenPartOfSpeech.add(partOfSpeech);
        partOfSpeechHTML += `<span class='font-normal'>${partOfSpeech}</span>`;
      }
      // Append definitions
      meaning.definitions.forEach((definition) => {
        const listItem = document.createElement("li");
        listItem.classList.add("font-italic", "ml-4");
        listItem.innerHTML = definition.definition;
        definitionEl.appendChild(listItem);
      });
    });

    partOfSpeech.innerHTML += partOfSpeechHTML;
  });
}

// Actions perform on search button
async function handleSearch() {
  const word = inputSearchEl.value.trim();
  if (!word) return;

  try {
    const dictionaryData = await getDictionaryData(word);
    if (dictionaryData.length === 0) {
      displayErrorMessage("Word not found");
      return;
    }
    // Hide the error message image
    hideErrorMessage();
    contentSection.classList.remove("hidden");
    displayDictionaryData(dictionaryData);
  } catch (error) {
    displayErrorMessage("An error occurred while fetching data");
  }
}

// Hide the error message image
function hideErrorMessage() {
  notFoundImgEl.innerHTML = "";
}

searchBtnEl.addEventListener("click", handleSearch);

// action perform on hit enter btn
inputSearchEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    definitionEl.innerHTML = "";
    handleSearch();
  }
});
