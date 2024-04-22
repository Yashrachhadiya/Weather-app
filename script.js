console.log("Connected");    
const weatherImg = document.getElementById("condtionimg");
weatherImg.style.display = "none";

const fetchWeather = async () => {
    let place = document.getElementById("userinput").value;
    let cityName = document.getElementById("cityname");
    let stateName = document.getElementById("statename");
    let countryName = document.getElementById("countryname");
    let localTime = document.getElementById("localtime");
    let temperature = document.getElementById("temperature");
    let weatherCondition = document.getElementById("condition");
    let feelsLike = document.getElementById("feelslike");
    let cloudContainer = document.getElementById("cloud");
    let humiditycontainer = document.getElementById("humidity");
    let windDirection = document.getElementById("winddirection");
    let windSpeed = document.getElementById("windspeed");
    let dayornight = document.getElementById("dayornight");
    let visibility = document.getElementById("visibility");


    


    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=a9af2dbbc47441cfbf693102241904&q=${place}`);
        const data = await response.json();
        console.log(data);

        if (data.error) {
            console.log("There is no such a city exist");
            weatherImg.style.display = "none";
            cityName.innerHTML = "No Such locatin found";

        } else {
          
            weatherImg.style.display = "block";
            cityName.innerHTML = ` Place : ${data.location.name}`;
            stateName.innerHTML =  ` State : ${data.location.region}`;
            countryName.innerHTML = ` Country : ${data.location.country}`;
            localTime.innerHTML = `Timezone : ${data.location.localtime}`;
            temperature.innerHTML = ` ${data.current.temp_c} <sup>.</sup>c `;
            weatherCondition.innerHTML = `${data.current.condition.text}`;
            weatherImg.src = ` ${data.current.condition.icon}`;
            feelsLike.innerHTML = ` Feels Like : ${data.current.feelslike_c}`;
            cloudContainer.innerHTML = ` Cloud : ${ data.current.cloud}`;
            humiditycontainer.innerHTML = ` Humidity : ${data.current.humidity}`;
            windDirection.innerHTML = ` Wind Direction : ${data.current.wind_dir}`;
            windSpeed.innerHTML = ` Wind Speed : ${data.current.wind_kph}`
          
            if(data.current.is_day == 0){
                dayornight.innerHTML = "Night"
            }else if (data.current.is_day == 1){
                dayornight.innerHTML = "day"
            }else {
                dayornight.innerHTML = ""
            }

            visibility.innerHTML = `Visibility : ${data.current.vis_km}`;
        }
    } catch (error) {
         console.error('Failed to fetch data:', error);
    }
}
