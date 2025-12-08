      async function fetchWeather(url){
            try{
              let weatherData= await fetch(url);
                if (!weatherData.ok) {
                    throw new Error(`HTTP error: ${weatherData.status}`);
                }
              let json=await weatherData.json();
                         console.log(`Temperature: ${json.current_weather.temperature}°C`);
                         console.log(`Wind Speed: ${json.current_weather.windspeed} km/h`);
                         console.log(`Wind Direction: ${json.current_weather.winddirection}°`);
               
            }
            catch(err){
            console.log(`Failed to load users: ${err.message}`)
            }
            console.log('Done')
        }
        fetchWeather('https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true')
        console.log('Loading weather data...')
