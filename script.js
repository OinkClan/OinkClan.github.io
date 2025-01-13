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
const recommendationsList = document.getElementById("recommendations");
const themeToggle = document.getElementById("theme-toggle");

// Search and display word recommendations
searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase();
    const filteredWords = wordsData.filter(word =>
        word.oinkish.includes(query) || word.english.toLowerCase().includes(query)
    );
    displayRecommendations(filteredWords);
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
    });
}

// Theme toggle functionality
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "Switch to Dark Mode";
    } else {
        themeToggle.textContent = "Switch to Light Mode";
    }
});
