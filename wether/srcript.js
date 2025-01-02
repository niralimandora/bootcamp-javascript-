const apiKey = "c6c4f261222f68360e9c1864c097cc75";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

        const searchBox = document.querySelector(".search input ");
        const searchBtn = document.querySelector(".search button");
        const weathericon = document.querySelector(".weather-icon");

        async function checkWeather(city)
        {
            
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            const data = await response.json();
            const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            console.log(data.weather[0].main);
            // document.getElementById('tem').innerHTML= fetchdata(res) 
            //
            document.getElementById("wether-ico").innerHTML = ` <img src="${iconUrl}" alt="${data.weather[0].description}" class="wether-icon">`;
           
            // if((data.weather[0].main )== "Clouds")
            // {
            //     console.log("gh")
            //     weathericon.src = "C:\\Users\Nirali Mandora\Desktop\bootcamp\javascript\wether\images\clouds.png"  ;
            // }
            // else if((data.weather[0].main) == "Clear")
            // {
            //     weathericon.src = "C:\\Users\Nirali Mandora\Desktop\bootcamp\javascript\wether\images\clear.png";
            // }
            // else if(data.weather[0].main == "Rain")
            // {
            //     weathericon.src = "./images/rain.png";
            // }
            // else if(data.weather[0].main == "Drizzle")
            // {
            //     weathericon.src = "./images/drizzle.png";
            // }
            // else if(data.weather[0].main == "Mist")
            // {
            //     weathericon.src = "./images/mist.png";
            // }

        }
        searchBtn.addEventListener("click" , ()=>{
            checkWeather(searchBox.value);
        })
       

       