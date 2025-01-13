// script.js
let wordBank = []; // Initially empty, will be populated from words.json
let selectedType = ''; // Store the selected type (e.g., noun, verb, etc.)

// Fetch words from words.json file
fetch('words.json')
  .then(response => response.json())  // Parse the JSON
  .then(data => {
    wordBank = data;  // Assign the fetched data to wordBank
  })
  .catch(error => {
    console.log('Error loading word bank:', error);  // Handle any errors
  });

function showRecommendations() {
  const input = document.getElementById("search-bar").value.toLowerCase();
  const selectedType = document.getElementById("word-type").value;
  const recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = ""; // Clear previous recommendations

  if (input) {
    const filteredWords = wordBank.filter(word => {
      const matchesType = selectedType ? word.type.toLowerCase() === selectedType : true;
      const matchesSearch = word.oinkish.toLowerCase().includes(input) || word.english.toLowerCase().includes(input);
      return matchesType && matchesSearch;
    });

    filteredWords.forEach(word => {
      const li = document.createElement("li");
      li.classList.add("recommendation-item");
      li.textContent = word.oinkish;
      li.onclick = () => showWordDetails(word);
      recommendations.appendChild(li);
    });
  }
}

function showWordDetails(word) {
  const results = document.getElementById("results");
  results.innerHTML = `
    <h2>${word.oinkish} (${word.english})</h2>
    <p>Type: ${word.type}</p>
    <p>Definition: ${word.definition}</p>
  `;
}
