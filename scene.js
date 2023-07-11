const weather = ['sun', ['sun', 'clouds'], ['sun', 'wind'], ['sun', 'rain'], ['sun', 'fog'], 'rain', ['rain', 'wind'], ['rain', 'storm'], 'clouds', ['clouds', 'wind'], 'snow', ['snow', 'sun'], ['snow', 'storm']];
const landscape = ['forest', 'lake', 'sea', 'mountain', 'meadows', 'beach', 'river'];
const daytime = ['dawn', 'sunrise', 'morning', 'midday', 'afternoon', 'evening', 'sunset', 'dusk', 'night'];
const season = ['spring', 'summer', 'autumn', 'winter'];

const button = document.getElementById('randomButton');
button.addEventListener('click', generateRandomEntries);
window.addEventListener('load', generateRandomEntries);

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function formatSubArray(array) {
    return array.map(element => {
        if (Array.isArray(element)) {
            return element.join(' and ');
        } else {
            return element;
        }
    }).join(', ').split(', ');
}

function generateRandomEntries() {
    const randomLandscape = getRandomElement(landscape);
    const randomDaytime = getRandomElement(daytime);
    const randomSeason = getRandomElement(season);

    const formattedWinterWeather = weather.filter(el => {
        if (Array.isArray(el)) {
            if (randomSeason === 'winter') {
                return !el.includes('rain');
            } else {
                return !el.includes('snow');
            }
        } else {
            if (randomSeason === 'winter') {
                return el !== 'rain';
            } else {
                return el !== 'snow';
            }
        }
    });

    const formattedNightWeather = formattedWinterWeather.map(item => {
        if (randomDaytime === 'night' || randomDaytime === 'dawn' || randomDaytime === 'dusk') {
        return item === 'sun'
            ? 'clear'
            : Array.isArray(item)
                ? item.map(subItem => (subItem === 'sun' ? 'clear' : subItem))
                : item;
        } else {
            return item
        }
    })

    const formattedWeather = formatSubArray(formattedNightWeather);
    const randomWeather = getRandomElement(formattedWeather);

    const randomWeatherElement = document.getElementById('randomWeather');
    randomWeatherElement.textContent = randomWeather;

    const randomLandscapeElement = document.getElementById('randomLandscape');
    randomLandscapeElement.textContent = randomLandscape;

    const randomDaytimeElement = document.getElementById('randomDaytime');
    randomDaytimeElement.textContent = randomDaytime;

    const randomSeasonElement = document.getElementById('randomSeason');
    randomSeasonElement.textContent = randomSeason;
}
