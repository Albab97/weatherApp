let submit = document.getElementById('submit');
let cityName = document.getElementById('inlineFormInput');
let temp = document.getElementById('temp');
let wind_speed = document.getElementById('wind_speed');
let humidity = document.getElementById('humidity');

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
		})
        .catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather(cityName.value);
});