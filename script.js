// Word data as a JavaScript object
const wordsData = [
    {
        "oinkish": "hu",
        "english": "hello",
        "definition": "A greeting used to express a friendly hello."
    },
    {
        "oinkish": "ma",
        "english": "mother",
        "definition": "A female parent."
    }
];

// Get DOM elements
const searchBar = document.getElementById("search-bar");
const recommendationsList = document.getElementById("recommendations");
const themeToggle = document.getElementById("theme-toggle");

// Search and display word recommendations
searchBar.addEventListener("input", function() {
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
        li.onclick = () => showWordDetail(word.oinkish);
        recommendationsList.appendChild(li);
    });
}

// Show word detail
function showWordDetail(oinkishWord) {
    const word = wordsData.find(w => w.oinkish === oinkishWord);
    alert(`Word: ${word.oinkish}\nDefinition: ${word.definition}`);
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

// Navigate to the 'chr' page
function goToChrPage() {
    const categories = {
        L: ["la", "le", "li", "lo", "lu", "lou"],
        M: ["ma", "me", "mi", "mo", "mu", "mou"],
        N: ["na", "ne", "ni", "no", "nu", "nou"],
        R: ["ra", "re", "ri", "ro", "ru", "rou"],
        T: ["ta", "te", "ti", "to", "tu", "tou"],
        K: ["ka", "ke", "ki", "ko", "ku", "kou"],
        S: ["sa", "se", "si", "so", "su", "sou"],
        H: ["ha", "he", "hi", "ho", "hu", "hou"],
        P: ["pa", "pe", "pi", "po", "pu", "pou"],
        B: ["ba", "be", "bi", "bo", "bu", "bou"],
        D: ["da", "de", "di", "do", "du", "dou"],
        Z: ["za", "ze", "zi", "zo", "zu", "zou"]
    };

    let chrPageContent = "<h2>Word Categories</h2>";
    for (let letter in categories) {
        chrPageContent += `<h3>${letter}</h3><ul>`;
        categories[letter].forEach(word => {
            chrPageContent += `<li>${word}</li>`;
        });
        chrPageContent += "</ul>";
    }

    // Display chr content
    document.body.innerHTML = chrPageContent;
}
