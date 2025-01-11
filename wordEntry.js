const urlParams = new URLSearchParams(window.location.search);
const wordParam = urlParams.get('word');

const wordEntry = wordData.find(item => item.word === wordParam);

if (wordEntry) {
    document.getElementById("word-entry").innerHTML = `
        <h1>${wordEntry.word}</h1>
        <h2>Type: ${wordEntry.type}</h2>
        <h3>Definitions:</h3>
        <ul>
            ${wordEntry.definitions.map(def => `<li>${def}</li>`).join('')}
        </ul>
    `;
} else {
    document.getElementById("word-entry").innerHTML = "<p>Word not found.</p>";
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
}
