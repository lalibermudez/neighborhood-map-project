var sites = [
	{
		title: "Panama Viejo - Old Panama",
		location: {lat: 9.00677, lng: -79.487071},
		map: map,
		label : "A"
	},
	{
		title: "Casco Antiguo",
		location: {lat: 8.953272, lng: -79.533692},
		map: map,
		label : "B"
	},
	{
		title: "Panama Canal",
		location: {lat: 9.022348, lng: -79.616695},
		map: map,
		label : "C"
	},
	{
		title: "Causeway",
		location: {lat: 8.917218, lng: -79.533039},
		map: map,
		label : "D"
	},
	{
		title: "Tocumen International Airport",
		location: {lat: 9.067526, lng: -79.387147},
		map: map,
		label : "E"
	}
];

var map;
var markers = [];

function initMap() {
	// Constructor creates a new map
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 9.00876, lng: -79.520244},
		zoom: 11
	});

	// The following group uses the sites array to create an array of markers on initialize.
	for (var i = 0; i < sites.length; i++) {
		// Get the position from the sites array.
		var position = sites[i].location;
		var title = sites[i].title;
		var label = sites[i].label;
		// Create a marker per site, and put into markers array.
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			title: title,
			label: label,
			animation: google.maps.Animation.DROP,
			id: i
		});
		// Push the marker to our array of markers.
		markers.push(marker);
	};
};


var AppViewModel = function() {
	var self = this;

};

ko.applyBindings(new AppViewModel()); 