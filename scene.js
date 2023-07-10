const weather = ['sun', ['sun', 'clouds'], ['sun', 'wind'], 'rain', ['rain', 'wind'], ['rain', 'storm'], 'wind', 'clouds', 'snow', 'fog', ['fog', 'sun'], 'storm'];
const landscape = ['forest', 'lake', 'sea', 'mountain', 'meadows', 'beach', 'wetland'];
const daytime = ['sunrise', 'morning', 'midday', 'afternoon', 'evening', 'sunset', 'night'];
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

    const formattedNightWeather = weather.map(item => {
        if (randomDaytime === 'night') {
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



   /* if (season[randomSeasonIndex] === 'winter') {
        const filteredWinterWeather = weather.filter((condition) => condition !== 'rain');
        randomWeatherIndex = Math.floor(Math.random() * filteredWinterWeather.length);
        randomWeather = filteredWinterWeather[randomWeatherIndex];
    } else {
        const filteredWeather = weather.filter((condition) => condition !== 'snow');
        randomWeatherIndex = Math.floor(Math.random() * filteredWeather.length);
        randomWeather = filteredWeather[randomWeatherIndex];
    }

    if (daytime[randomDaytimeIndex] === 'night') {
        const replaceSunString = weather.map((condition) => {
            return Array.isArray(condition) ?
                (condition.map((subCondition) => subCondition === 'sun' ? 'clear' : subCondition)) :
                (condition === 'sun' ? 'clear' : condition)
        });

        const filteredReplaceSunString = replaceSunString.filter((condition) => condition !== 'sun');
        randomWeatherIndex = Math.floor(Math.random() * filteredReplaceSunString.length);
        randomWeather = filteredReplaceSunString[randomWeatherIndex];
    }*/

    const randomWeatherElement = document.getElementById('randomWeather');
    randomWeatherElement.textContent = randomWeather;

 const randomLandscapeElement = document.getElementById('randomLandscape');
    randomLandscapeElement.textContent = randomLandscape;

 const randomDaytimeElement = document.getElementById('randomDaytime');
    randomDaytimeElement.textContent = randomDaytime;

    const randomSeasonElement = document.getElementById('randomSeason');
    randomSeasonElement.textContent = randomSeason;
}

/*
shorter way to do it:

const generateRandomEntries = () => {
    const randomDaytime = daytime[Math.floor(Math.random() * daytime.length)];
    const randomSeason = season[Math.floor(Math.random() * season.length)];

    document.getElementById('randomDaytime').textContent = randomDaytime;
    document.getElementById('randomSeason').textContent = randomSeason;
};*/
