// api url
// https://dictionaryapi.dev/

const inputSearchEl = document.querySelector("#wordSearch");
const searchBtnEl = document.querySelector("#searchBtn");
const searchWordEl = document.querySelector("#searchword");
const phoneticsEl = document.querySelector("#phonetic");
const audioEl = document.querySelector("audio");
const playBtnEl = document.querySelector("#playBtn");
const meaning = document.querySelector("#meaning");

const partOfSpeech = document.getElementById("partOfSpeech");
const definition = document.getElementById("definition");

const DICT_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

async function getDictionaryData(word) {
  try {
    // fetching data according to input search
    const dictionary = await fetch(`${DICT_URL}${word}`);
    const jsonData = await dictionary.json();
    return jsonData;
  } catch (error) {
    console.error("Error in fetching dictionary data:", error);
  }
}

// default audio playing action
playBtnEl.addEventListener("click", () => {
  // Play the audio
  audioEl.play();
});

// unique set for partofSpeech recognition
const seenPartOfSpeech = new Set();

// Actions perform on search button

const handleSearch = async () => {
  const word = inputSearchEl.value;
  const dictionaryData = await getDictionaryData(word);
  console.log(dictionaryData);

  //   mapping the dictionary object
  dictionaryData.map((values) => {
    searchWordEl.textContent = values.word;

    // checking audio src
    let audioFound = false;

    // looping the phonetic object
    for (let phonetic of values.phonetics) {
      phoneticsEl.textContent = phonetic.text;

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
    });

    partOfSpeech.innerHTML += partOfSpeechHTML;
  });
};

searchBtnEl.addEventListener("click", handleSearch);

inputSearchEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});

//   meaning.definitions.forEach((definition) => {
//     definition.forEach((def) => {
//       definition.textContent = def.definition;
//     });
//   });

// values.meanings.forEach((meaning, index) => {
//   const partOfSpeech = meaning.partOfSpeech;

//   const uniqueWords = new Set();

//   if (!uniqueWords.has(partOfSpeech)) {
//     // If not, add it to the Set and include it in the HTML
//     uniqueWords.add(partOfSpeech);
//     partOfSpeechHTML += `<span class='ml-2'>${partOfSpeech}</span>`;
//   }
// });
