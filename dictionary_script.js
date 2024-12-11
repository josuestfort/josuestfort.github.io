let dictionary = [];
let filteredWords = [];
let currentPage = 1;
const wordsPerPage = 1000;

// Load dictionary data from JSON
fetch('dictionary.json')
    .then(response => response.json())
    .then(data => {
        dictionary = data;
        filteredWords = dictionary; // Start with all words
        displayPage(1);
    })
    .catch(error => console.error('Error loading dictionary:', error));

// Display words for the current page
function displayPage(page) {
    const start = (page - 1) * wordsPerPage;
    const end = start + wordsPerPage;
    const wordsToDisplay = filteredWords.slice(start, end);

    const dictionaryContainer = document.getElementById('dictionary');
    dictionaryContainer.innerHTML = ""; // Clear previous results
    wordsToDisplay.forEach(item => {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'word';
        wordDiv.innerHTML = `<h3>${item.word}</h3><p>${item.meaning}</p>`;
        dictionaryContainer.appendChild(wordDiv);
    });

    updatePagination(page);
}

// Update pagination controls
function updatePagination(page) {
    currentPage = page;
    const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = "";

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = "Previous";
    prevButton.disabled = page === 1;
    prevButton.onclick = () => displayPage(page - 1);
    paginationContainer.appendChild(prevButton);

    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.disabled = page === totalPages;
    nextButton.onclick = () => displayPage(page + 1);
    paginationContainer.appendChild(nextButton);
}

// Search functionality
function searchWord() {
    const query = document.getElementById('search-box').value.toLowerCase();
    filteredWords = dictionary.filter(item => 
        item.word.toLowerCase().includes(query) || 
        item.meaning.toLowerCase().includes(query)
    );
    displayPage(1); // Reset to the first page
}
