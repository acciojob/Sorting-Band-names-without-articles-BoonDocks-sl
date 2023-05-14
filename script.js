//your code here

const bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Rolling Stones'];

function sortBandNames(names) {
  const articles = ['the', 'an', 'a'];

  // Strip articles from band names
  const strippedNames = names.map(name => {
    const words = name.split(' ');
    return words.filter(word => !articles.includes(word.toLowerCase())).join(' ');
  });

  // Sort the stripped names in lexicographic order
  const sortedNames = strippedNames.sort((a, b) => a.localeCompare(b));

  // Create a list of li elements for each band name
  const listItems = sortedNames.map(name => {
    const li = document.createElement('li');
    li.textContent = name;
    return li;
  });

  // Add the list items to the unordered list with the id "band"
  const bandList = document.querySelector('#band');
  listItems.forEach(li => bandList.appendChild(li));
}

sortBandNames(bandNames);
