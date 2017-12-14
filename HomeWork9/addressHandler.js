function handleRequest() {
    let inputValue = $('#map-input').val(),
        apiKey = 'AIzaSyDHqDBWDgOfS_nnietVtzDEVZ-41uGjXPo',
        url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + inputValue + '&key=' + apiKey;

    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function (data) {
            if (data.status === 'OK') {
                initMap(data);
            }
        }
    });

    function initMap(data) {
        let latLng = data.results[0].geometry.location,
            map, marker;

        console.log(latLng);

        if (!document.getElementById('map')) {
            $('#map-container').append($('<div id="map"></div>'));
        }

        if(data) {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: latLng,
            });

            marker = new google.maps.Marker({
                position: latLng,
                title: inputValue,
                map: map
            });
        }

        marker.setAnimation(google.maps.Animation.BOUNCE);

        $('#coords-container').html(`lat: ${data.results[0].geometry.location.lat}, lng: ${data.results[0].geometry.location.lng}`)
    }

}