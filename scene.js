const weather = ['sun', ['sun', 'clouds'], ['sun', 'wind'], 'rain', ['rain', 'wind'], ['rain', 'strom'], 'wind', 'clouds', 'snow', 'fog', ['fog', 'sun'], 'storm'];
const landscape = ['forest', 'lake', 'sea', 'mountain', 'meadows', 'beach', 'wetland'];
const daytime = ['morning', 'midday', 'afternoon', 'evening', 'night'];
const season = ['spring', 'summer', 'autumn', 'winter'];

const button = document.getElementById('randomButton');
button.addEventListener('click', generateRandomEntries);

function generateRandomEntries() {
    const randomLandscapeIndex = Math.floor(Math.random() * landscape.length);
    const randomDaytimeIndex = Math.floor(Math.random() * daytime.length);
    const randomSeasonIndex = Math.floor(Math.random() * season.length);
    let randomWeatherIndex;

    let randomWeather;
    const randomLandscape = landscape[randomLandscapeIndex];
    const randomDaytime = daytime[randomDaytimeIndex];
    const randomSeason = season[randomSeasonIndex];

    if (season[randomSeasonIndex] === 'winter') {
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

        randomWeather = replaceSunString[randomWeatherIndex];
    }

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
