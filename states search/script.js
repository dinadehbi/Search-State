
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(keyword, cities) {
  return cities.filter(place => {
    const regex = new RegExp(keyword, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const selectedState = this.value;
  const citiesInState = cities.filter(place => place.state === selectedState);

  const cityOptionsHTML = citiesInState.map(place => `<option>${place.city}</option>`).join('');

  document.getElementById("div1").innerHTML =
    `<select>
      <option id="opt1">${selectedState} :</option>
      ${cityOptionsHTML}
     </select>`;
}

let input = document.getElementById("inp");

input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);






