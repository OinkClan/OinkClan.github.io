function showSuggestions() {
    const input = document.getElementById("search").value.trim().toLowerCase();
    const filter = document.getElementById("filter").value;
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";

    if (!input) return; // Exit if no input provided

    const filteredWords = wordData.filter(item => {
        const startsWithInput = item.word.toLowerCase().startsWith(input);
        const matchesFilter = filter === "all" || item.type === filter;
        return startsWithInput && matchesFilter;
    });

    if (filteredWords.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No results found.";
        suggestions.appendChild(li);
    } else {
        filteredWords.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.word} (${item.type})`;
            li.onclick = () => showWordEntry(item);
            suggestions.appendChild(li);
        });
    }
}

function showWordEntry(wordEntry) {
    const wordPageUrl = `wordEntry.html?word=${encodeURIComponent(wordEntry.word)}`;
    window.location.href = wordPageUrl;
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
}
