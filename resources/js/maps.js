// set map options
var myLatLng = {lat: 51.5074, lng:-0.1278}
var centerLatLng = {lat: 51.3896, lng:1.3868}
var mapOptions = {
    center: centerLatLng,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP   
};

// create map
var map = new google.maps.Map(document.getElementById('map'), mapOptions);

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay= new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

// setting the mapTypeId upon construction
map.setMapTypeId(google.maps.MapTypeId.ROADMAP);

// create marker1
var marker1Options = {
    position: myLatLng,
    map: map,
    title: "This is London",
    draggable: true,
    animation: google.maps.Animation.DROP
};
var marker1 = new google.maps.Marker(marker1Options);

// create infowindow
var contentString = "<div>This is an InfoWindow</div>";
var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 100
});

// add listener to the marker to show infoWindow
marker1.addListener("click", function(){
    infowindow.open(map, marker1);
});