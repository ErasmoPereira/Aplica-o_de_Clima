const apiKey = "63f4757263f4e128dbe35cc79b9f54ea";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const umidityElement = document.querySelector('#umidity span');
const windElement = document.querySelector('#wind span');


//Funções
const getWeatherData = async(city)=>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br` //pegando os dados da cidade

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
}

const showWeatherData =  async (city)=>{
    const data = await getWeatherData(city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description;
    umidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed} Km/h`
}

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const city = cityInput.value;

    showWeatherData(city);

})