let wordsData = [];

// Fetch the words data from the JSON file
fetch("words.json")
    .then(response => response.json())
    .then(data => {
        wordsData = data;
    })
    .catch(error => console.error("Error loading words data:", error));

// Get DOM elements
const searchBar = document.getElementById("search-bar");
const wordTypeSelect = document.getElementById("word-type");
const recommendationsList = document.getElementById("recommendations");
const themeToggle = document.getElementById("theme-toggle");

// Search and display word recommendations
searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase();
    const wordType = wordTypeSelect.value;

    // Only display recommendations if there is a query
    if (query.length > 0) {
        const filteredWords = wordsData.filter(word =>
            (word.oinkish.includes(query) || word.english.toLowerCase().includes(query)) &&
            (!wordType || word.type === wordType)
        );
        displayRecommendations(filteredWords);
    } else {
        recommendationsList.innerHTML = ""; // Clear recommendations if query is empty
    }
});

// Display recommendations
function displayRecommendations(words) {
    recommendationsList.innerHTML = "";
    words.forEach(word => {
        const li = document.createElement("li");
        li.classList.add("recommendation");
        li.textContent = `${word.oinkish} - ${word.english}`;
        li.onclick = () => {
            window.location.href = `word-detail.html?word=${word.oinkish}`;
        };
        recommendationsList.appendChild(li);
}

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "Dark Mode";
    } else {
        themeToggle.textContent = "Light Mode";
    }
});
