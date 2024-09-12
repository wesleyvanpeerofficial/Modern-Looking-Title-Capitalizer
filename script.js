function liveCapitalize() {
    const inputText = document.getElementById('inputText').value;
    const lowerCaseWords = ["a", "and", "as", "at", "but", "by", "for", "if", "in", "nor", "of", "on", "so", "the", "to", "up", "yet"];
    const words = inputText.toLowerCase().split(" ");

    const capitalizedWords = words.map((word, index) => {
        if (index === 0 || index === words.length - 1 ||
            !lowerCaseWords.includes(word)) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        });

        const outputText = capitalizedWords.join(" ");
        document.getElementById('outputText').textContent = outputText;
    }