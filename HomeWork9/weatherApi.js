function getWeather() {
    let inputValue = $('#weather-input').val(),
        apiKey = 'AIzaSyDHqDBWDgOfS_nnietVtzDEVZ-41uGjXPo',
        url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + inputValue + '&key=' + apiKey,
        weatherUrl = '';

    $.getJSON(url).then(function (data) {
        let lat = data.results[0].geometry.location.lat,
            lng = data.results[0].geometry.location.lng;

        weatherUrl = 'https://simple-weather.p.mashape.com/weather?lat=' + lat + '&lng=' + lng;

        return $.ajax({
            type: 'GET',
            headers: {
                'X-Mashape-Key': 'UZ8o1uLBcTmshYqbstFIibDZGoz4p1wk4N5jsnp8SyUjoOrHGp',
                'Accept': 'text/plain'
            },
            url: weatherUrl,
            // dataType: 'text/plain',
            success: function (weatherData) {
                console.log('Hello');
                    displayWeather(weatherData);
            }
        });
    });



    function displayWeather(data) {
        console.log(data);
        // let title = data.query.results.channel.title;

        $('#weather-info-container').append('<p>' + data + '</p>');
    }

    // $.ajax({
    //     type: 'GET',
    //     url: url,
    //     dataType: 'json',
    //     success: function (data) {
    //         if (data.status === 'OK') {
    //
    //             let lat = data.results[0].geometry.location.lat,
    //                 lng = data.results[0].geometry.location.lng;
    //
    //             weatherUrl = 'https://simple-weather.p.mashape.com/weather?lat=' + lat + '&lng=' + lng;
    //
    //             $.ajaxSetup({
    //                 headers: {
    //                     'X-Mashape-Key': 'UZ8o1uLBcTmshYqbstFIibDZGoz4p1wk4N5jsnp8SyUjoOrHGp',
    //                     'Accept': 'application/json'
    //                 }
    //             });
    //             $.getJSON(weatherUrl).then(displayWeather(data2));
    //         }
    //     }
    // });

}