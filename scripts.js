function showSuggestions() {
    const input = document.getElementById("search").value.toLowerCase();
    const filter = document.getElementById("filter").value;
    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";

    const filteredWords = wordData.filter(item => {
        const notTypedYet = item.word.toLowerCase().startsWith(input) && item.word.toLowerCase() !== input;
        const matchesFilter = filter === "all" || item.type === filter;
        return notTypedYet && matchesFilter;
    });

    filteredWords.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.word} (${item.type})`;
        li.onclick = () => showWordEntry(item);
        suggestions.appendChild(li);
    });
}

function showWordEntry(wordEntry) {
    const wordPageUrl = `wordEntry.html?word=${wordEntry.word}`;
    window.location.href = wordPageUrl;
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
}
