//your code here
//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
touristSpots.sort((a,b)=>{
    let nameA = a.toLowerCase().substring(2); // ignorer upperCase
    let nameB = b.toLowerCase().substring(2); // ignorer upperCase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
    return 1;
    }

    // names must be equal
    return 0;
})
// Generate the list items
const ul = document.getElementById('bands');
touristSpots.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});