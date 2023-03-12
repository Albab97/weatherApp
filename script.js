let submit = document.getElementById('submit');
let cityName = document.getElementById('inlineFormInput');
let temp = document.getElementById('temp');
let wind_speed = document.getElementById('wind_speed');
let humidity = document.getElementById('humidity');
let max_temp = document.getElementById('max_temp');
let min_temp = document.getElementById('min_temp');
let feels_like = document.getElementById('feels_like');
let wind_speed1 = document.getElementById('wind_speed1');
let wind_degrees = document.getElementById('wind_degrees');
let cloud_pct = document.getElementById('cloud_pct');
let humidity1=document.getElementById('humidity1');
let sunrise = document.getElementById('sunrise');
let sunset = document.getElementById('sunset');


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '845e9f66a9mshe0fbf74822ae354p18b1cdjsn38ea22e5ecd7',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
	console.log('clicked');
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
			console.log(response);
			// if(response.temp<0){
			// 	temp.style.color="blue";
			// }
			temp.innerHTML = response.temp;
			wind_speed.innerHTML=response.wind_speed;
			humidity.innerHTML=response.humidity;
			max_temp.innerHTML=response.max_temp;
			min_temp.innerHTML=response.min_temp;
			feels_like.innerHTML=response.feels_like;
			wind_speed1.innerHTML=response.wind_speed;
			wind_degrees.innerHTML=response.wind_degrees;
			cloud_pct.innerHTML=response.cloud_pct;
			humidity1.innerHTML=response.humidity;
			sunrise.innerHTML=response.sunrise;
			sunset.innerHTML=response.sunset;
		})
        .catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather(cityName.value);
});