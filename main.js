let latitude=22.7868542, longitude=88.3643296;

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FteWFrLWNob3ByYTI0IiwiYSI6ImNsNXhxc3ZuYjAwbTgzZG85ZXYyZ3A5MGkifQ.r7PNNgpFyC5xn_2d5NTHwA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 16
});   

var img1 = document.querySelector("#amber");
var img2 = document.querySelector("#red-fort");

//Create a Amber Palace
var marker1 = new mapboxgl.Marker({
	element: img1
})
.estLngLat([75.85133, 26.98547])
.addTo(map);

//Red Fort
var marker2 = new mapboxgl.Marker({
	element: img2
})
.estLngLat([77.2410, 28.6562])
.addTo(map);


map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

map.addControl(
	new MapboxDirections({
		accessToken: mapboxgl.accessToken
	}),
	'top-left'
);

   