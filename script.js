// script.js
const wordBank = [
  { word: "OinkishWord1", type: "noun", meaning: "Meaning of OinkishWord1" },
  { word: "OinkishWord2", type: "verb", meaning: "Meaning of OinkishWord2" },
  { word: "OinkishWord3", type: "adjective", meaning: "Meaning of OinkishWord3" },
  // Add more words here
];

function showRecommendations() {
  const input = document.getElementById("search").value.toLowerCase();
  const recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = ""; // Clear previous recommendations

  if (input) {
    const filteredWords = wordBank.filter(word => word.word.toLowerCase().includes(input));
    filteredWords.forEach(word => {
      const div = document.createElement("div");
      div.classList.add("recommendation-item");
      div.textContent = word.word;
      div.onclick = () => showWordDetails(word);
      recommendations.appendChild(div);
    });
  }
}

function showWordDetails(word) {
  const results = document.getElementById("results");
  results.innerHTML = `
    <h2>${word.word}</h2>
    <p>Type: ${word.type}</p>
    <p>Meaning: ${word.meaning}</p>
  `;
}
