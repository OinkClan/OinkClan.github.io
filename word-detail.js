let wordData = [];

// Fetch the words data from the JSON file
fetch("words.json")
    .then(response => response.json())
    .then(data => {
        wordData = data;
        displayWordDetail();
    })
    .catch(error => console.error("Error loading words data:", error));

function displayWordDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const wordQuery = urlParams.get('word');

    const word = wordData.find(w => w.oinkish === wordQuery);
    if (word) {
        document.getElementById("word-title").textContent = word.oinkish;
        document.getElementById("word-definition").textContent = word.definition;
    } else {
        document.getElementById("word-title").textContent = "Word not found.";
        document.getElementById("word-definition").textContent = "The word you searched for is not available.";
    }
}
