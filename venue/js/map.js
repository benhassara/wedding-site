/** Google Map for Lingrow */

function lingrowMap() {
    // 40.671313, -79.602337
    map = new google.maps.Map(document.getElementById('lingrow-map'), {center: {lat: 40.671313, lng: -79.602337}, zoom: 12});
    placeId = {placeId: 'ChIJQyUY8R-lNIgRjnsIxdCB35w'};
    placesServce = new google.maps.places.PlacesService(map);
    info = new google.maps.InfoWindow();

    placesServce.getDetails(placeId, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            info.setContent(infoWindowText(place));
            info.open(map, marker);
        }
    });
}

/** Takes a Place Object from the Google Places API
 * Returns HTML for simple InfoWindow */
function infoWindowText(place) {
    var text = '<div><strong>' + place.name + '</strong><br>';
    text += place.formatted_address + '<br>';
    text += '<a href="' + place.url + '">View on Google Maps</a><br>';

    return text;
}
