let days = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun",
};
const locations = [
    {lat: 52.367, lng: 4.904, city: "Amsterdam", country: "Netherlands"},
    {lat: 39.933, lng: 32.859, city: "Ankara", country: "Turkey"},
    {lat: 56.134, lng: 12.945, city: "Åstorp", country: "Sweden"},
    {lat: 37.983, lng: 23.727, city: "Athens", country: "Greece"},
    {lat: 54.597, lng: -5.93, city: "Belfast", country: "Northern Ireland"},
    {lat: 41.387, lng: 2.168, city: "Barcelona", country: "Spain"},
    {lat: 52.52, lng: 13.405, city: "Berlin", country: "Germany"},
    {lat: 46.948, lng: 7.447, city: "Bern", country: "Switzerland"},
    {lat: 43.263, lng: -2.935, city: "Bilbao", country: "Spain"},
    {lat: 50.847, lng: 4.357, city: "Brussels", country: "Belgium"},
    {lat: 47.497, lng: 19.04, city: "Bucharest", country: "Romania"},
    {lat: 59.329, lng: 18.068, city: "Budapest", country: "Hungary"},
    {lat: 51.483, lng: -3.168, city: "Cardiff", country: "Wales"},
    {lat: 50.937, lng: 6.96, city: "Cologne", country: "Germany"},
    {lat: 55.676, lng: 12.568, city: "Copenhagen", country: "Denmark"},
    {lat: 51.898, lng: -8.475, city: "Cork", country: "Ireland"},
    {lat: 53.349, lng: -6.26, city: "Dublin", country: "Ireland"},
    {lat: 55.953, lng: -3.188, city: "Edinburgh", country: "Scotland"},
    {lat: 43.7696, lng: 11.255, city: "Florence", country: "Italy"},
    {lat: 50.11, lng: 8.682, city: "Frankfurt", country: "Germany"},
    {lat: 43.254, lng: 6.637, city: "French Riviera", country: "France"},
    {lat: 32.65, lng: -16.908, city: "Funchal", country: "Portugal"},
    {lat: 57.708, lng: 11.974, city: "Gothenburg", country: "Sweden"},
    {lat: 53.548, lng: 9.987, city: "Hamburg", country: "Germany"},
    {lat: 60.169, lng: 24.938, city: "Helsinki", country: "Finland"},
    {lat: 39.02, lng: 1.482, city: "Ibiza", country: "Spain"},
    {lat: 50.45, lng: 30.523, city: "Kyiv", country: "Ukraine"},
    {lat: 61.115, lng: 10.466, city: "Lillehammer", country: "Norway"},
    {lat: 38.722, lng: -9.139, city: "Lisbon", country: "Portugal"},
    {lat: 51.507, lng: -0.127, city: "London", country: "England"},
    {lat: 40.416, lng: -3.703, city: "Madrid", country: "Spain"},
    {lat: 39.695, lng: 3.017, city: "Mallorca", country: "Spain"},
    {lat: 53.48, lng: -2.242, city: "Manchester", country: "England"},
    {lat: 43.296, lng: 5.369, city: "Marseille", country: "France"},
    {lat: 27.76, lng: -15.586, city: "Maspalomas", country: "Spain"},
    {lat: 45.464, lng: 9.19, city: "Milan", country: "Italy"},
    {lat: 48.135, lng: 11.582, city: "Munich", country: "Germany"},
    {lat: 40.851, lng: 14.268, city: "Naples", country: "Italy"},
    {lat: 43.034, lng: -2.417, city: "Oñati", country: "Spain"},
    {lat: 59.913, lng: 10.752, city: "Oslo", country: "Norway"},
    {lat: 48.856, lng: 2.352, city: "Paris", country: "France"},
    {lat: 50.075, lng: 14.437, city: "Prague", country: "Czech Republic"},
    {lat: 64.146, lng: -21.942, city: "Reykjavík", country: "Iceland"},
    {lat: 56.879, lng: 24.603, city: "Riga", country: "Latvia"},
    {lat: 41.902, lng: 12.496, city: "Rome", country: "Italy"},
    {
        lat: 39.453,
        lng: -31.127,
        city: "Santa Cruz das Flores",
        country: "Portugal",
    },
    {
        lat: 28.463,
        lng: -16.251,
        city: "Santa Cruz de Tenerife",
        country: "Spain",
    },
    {lat: 57.273, lng: -6.215, city: "Skye", country: "Scotland"},
    {lat: 42.697, lng: 23.321, city: "Sofia", country: "Bulgaria"},
    {lat: 59.329, lng: 18.068, city: "Stockholm", country: "Sweden"},
    {lat: 59.437, lng: 24.753, city: "Tallinn", country: "Estonia"},
    {lat: 18.208, lng: 16.373, city: "Vienna", country: "Austria"},
    {lat: 52.229, lng: 21.012, city: "Warsaw", country: "Poland"},
    {lat: 53.961, lng: -1.07, city: "York", country: "England"},
    {lat: 47.376, lng: 8.541, city: "Zurich", country: "Switzerland"},
];
let images_weather = [
    {
        weather: "ts",
        img: "../images/tstorm.png",
        fullform: "Thunderstorm"
    },
    {
        weather: "lightrain",
        img: "../images/lightrain.png", fullform: "Light Rain"
    },
    {
        weather: "cloudy",
        img: "../images/cloudy.png", fullform: "Cloudy"
    }, {
        weather: "clear",
        img: "../images/clear.png", fullform: "Clear"
    }, {
        weather: "oshower",
        img: "../images/oshower.png", fullform: "Occasional Showers"
    }, {
        weather: "ishower",
        img: "../images/ishower.png", fullform: "Isolated Showers"
    }, {
        weather: "lightsnow",
        img: "../images/lightsnow.png", fullform: "Light Snow"
    }, {
        weather: "humid",
        img: "../images/humid.png", fullform: "Humid"
    }, {
        weather: "foggy",
        img: "../images/foggy.png", fullform: "Foggy"
    }, {
        weather: "pcloudy",
        img: "../images/pcloudy.png", fullform: "Partly Cloud"
    }, {
        weather: "mcloudy",
        img: "../images/mcloudy.png", fullform: "Very Cloudy"
    }, {
        weather: "windy",
        img: "../images/windy.png", fullform: "Windy"
    }, {
        weather: "tsrain",
        img: "../images/tsrain.png", fullform: "Thunderstorm and Rain"
    }, {
        weather: "rain",
        img: "../images/rain.png", fullform: "Rain"
    }, {
        weather: "rainsnow",
        img: "../images/rainsnow.png", fullform: "Rain snow"
    }, {
        weather: "snow",
        img: "../images/snow.png", fullform: "Snow"
    }

];

function setCurrentDate() {
    let current = new Date();
    let element = document.querySelector("#todays-date");
    element.innerHTML =
        days[current.getDay()] +
        " " +
        current.getDate() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getFullYear();
}

function setCurrentTime() {
    let current = new Date();
    const hours = current.getHours();
    const min =
        current.getMinutes() < 10
            ? "0" + current.getMinutes()
            : current.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    let element = document.querySelector("#current-time");

    element.innerHTML = hours + ":" + min + " " + ampm;
}

function changeFocusSearch() {
    let search = document.querySelector("#search-city");
    let searchIcon = document.querySelector("#search-label");
    search.addEventListener("focus", function () {
        searchIcon.classList.add("search-bar-focus");
    });
    search.addEventListener("focusout", function () {
        if (search.value === "") {
            searchIcon.classList.toggle("search-bar-focus");
        }
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function loadWeatherData(lat, long) {
    let current = new Date();
    let element = document.querySelector("#todays-date");
    element.innerHTML =
        days[current.getDay()] +
        " " +
        current.getDate() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getFullYear();
    await fetch(
        `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`
    )
        .then((response) => response.json())
        .then((result) => {
            let parent = document.querySelector(".weather-list");
            for (let index in result.dataseries) {
                let object = document.createElement("div");
                object.className = "weather-item";
                let data = result.dataseries[index];
                let img = "";
                let wea_index = 0;
                for (let i in images_weather) {
                    if (images_weather[i].weather === data.weather) {
                        img = images_weather[i].img;
                        wea_index = i;
                        break;
                    }
                }
                let image = document.createElement("img");
                image.src = img;
                image.width = 131;
                image.height = 66;
                object.innerHTML = `<h2>${images_weather[wea_index].fullform}</h2><img src="${img}" width=131 height=66 alt="image"><h2>Date : ${(parseInt(current.getDate()) + parseInt(index) + parseInt(1)) +
                "-" +
                (current.getMonth() + 1) +
                "-" +
                current.getFullYear()}
                   </h2><div class="temp-data"><p>Max : ${data.temp2m.max}°C</p><p>Min : ${data.temp2m.min}°C</p></div>`
                parent.appendChild(object);
            }
        });
}

async function preLoadingData(lat, lng) {
    const loader = document.querySelector('#loader');
    const parent = document.querySelector(".weather-list");
    removeAllChildNodes(parent);
    loader.style.display = 'flex';
    const nextContent = await loadWeatherData(lat, lng);
    loader.style.display = 'none';
}

function loadCityCoordinates() {
    let element = document.querySelector("#search-city");
    let object = document.createElement("option");
    object.innerHTML = "";
    object.value = "";
    element.appendChild(object);
    for (let i in locations) {
        let object = document.createElement("option");
        object.innerHTML = locations[i].city + ", " + locations[i].country;
        object.value = `lat: ${locations[i].lat}, lng: ${locations[i].lng}`;
        element.appendChild(object);
    }
    element.addEventListener("change", function () {
        let lat = element.value.split(",")[0].split(":")[1];
        let lng = element.value.split(",")[1].split(":")[1];
        preLoadingData(lat, lng);
    });
}
changeFocusSearch();
setCurrentDate();
setCurrentTime();
loadCityCoordinates();
