/** Create Google Maps and attach to DOM */
function createMaps() {
    // Holiday Inn Express
    // var hieMap = new google.maps.Map(document.getElementById('hie-map'), {center: {lat: 40.813853, lng: -79.546492}, zoom: 12});
    // var hiePlaceId = {placeId: 'ChIJKY3L0uVXM4gR8xv-WuOD32E'};
    // var hiePlacesService = new google.maps.places.PlacesService(hieMap);
    // var hieInfo = new google.maps.InfoWindow();

    // get place info for Holiday Inn Kittanning
    // hiePlacesService.getDetails(hiePlaceId, searchCb);
    //
    // // Springhill Suites
    // var springMap = new google.maps.Map(document.getElementById('spring-map'), {center: {lat:40.570248, lng: -79.804384}, zoom: 12});
    // var springPlaceId = {placeId: 'ChIJwepGpj-UNIgRdxvK-VJSY8s'};
    // var springPlacesService = new google.maps.places.PlacesService(springMap);
    // var springInfo = new google.maps.InfoWindow();
    //
    // // get place info for SpringHill Suites
    // springPlacesService.getDetails(springPlaceId, searchCb);
    // Omni William Penn
    omni = {
      placeId: 'ChIJZZduw1nxNIgRY5TuolZ-SBA',
      lat: 40.440492,
      lng: -79.996543,
    };
    // GMaps objects
    omni.map = new google.maps.Map(document.getElementById('omni-map'),
                                   { center: { lat: 40.440492, lng: -79.996543 }, zoom: 15 });
    omni.places = new google.maps.places.PlacesService(omni.map);
    omni.info = new google.maps.InfoWindow

    omni.places.getDetails({ placeId: omni.placeId }, searchCb);


    function searchCb(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: omni.map,
                position: place.geometry.location
            });
            omni.info.setContent(infoWindowText(place));
            omni.info.open(omni.map, marker);
        }
    }
}

/** Takes a Place Object from the Google Places API
 * Returns HTML for simple InfoWindow */
function infoWindowText(place) {
    var text = '<div><strong>' + place.name + '</strong><br>';
    text += place.formatted_address + '<br>';
    text += '<a href="' + place.url + '">View on Google Maps</a><br>';

    return text;
}
