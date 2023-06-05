const bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'The Who', 'Aerosmith'];

// Function to remove articles from the band names
function removeArticles(name) {
  const articles = ['a', 'an', 'the'];
  const words = name.split(' ');

  // Check if the first word is an article
  if (articles.includes(words[0].toLowerCase())) {
    words.shift(); // Remove the first word
  }

  return words.join(' ');
}

// Sort the band names in lexicographic order (excluding articles)
const sortedBandNames = bandNames.sort((a, b) => {
  const nameA = removeArticles(a).toLowerCase();
  const nameB = removeArticles(b).toLowerCase();
  return nameA.localeCompare(nameB);
});

// Display the sorted band names inside the ul id='bands' tag
const bandsList = document.querySelector('#bands');
sortedBandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandsList.appendChild(li);
});
