// Dummy data for Oinkish dictionary
const dictionary = {
    "Oinka": { definition: "Pig", category: "Noun" },
    "Lupa": { definition: "Friend", category: "Noun" },
    "Beko": { definition: "Eat", category: "Verb" },
    "Tupa": { definition: "Big", category: "Adjective" }
};

document.getElementById('mode-toggle').addEventListener('click', toggleMode);

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

function searchWord() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous results

    if (query.length === 0) return;

    for (let word in dictionary) {
        if (word.toLowerCase().includes(query)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${word} - ${dictionary[word].definition}`;
            listItem.onclick = () => showWordDetail(word);
            results.appendChild(listItem);
        }
    }
}

function showWordDetail(word) {
    const detail = document.getElementById('word-detail');
    const wordDef = document.getElementById('word-definition');
    wordDef.textContent = `${word}: ${dictionary[word].definition} (${dictionary[word].category})`;
}
