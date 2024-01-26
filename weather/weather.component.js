angular.module('weather')
   .component('weather', {
        templateUrl:'weather/weather.template.html',
        controller: ['weatherService', function(weatherService){
            var self = this;
          
            // $ctrl.weatherData = null;
            // $ctrl.error = null;
        
            self.getWeather = function(){
                console.log("Get weather is working");
                // $ctrl.weatherData = null;
                // $ctrl.error = null;
        
                weatherService.getWeather(self.city)
                    .then(function(data){
                        self.weatherData = data;
                    })
                    .catch(function(error){
                        self.error = 'Error while fetching the weather data:-' + error.message;
                        alert(error.message);
                    });
            };
        }]
        
    });
