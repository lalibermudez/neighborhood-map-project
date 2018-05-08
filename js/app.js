var sites = [
	{
		title: "Panama Viejo",
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
var largeInfowindow;
var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

var initMap = function() {
	// Constructor creates a new map
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 9.00876, lng: -79.520244},
		zoom: 11
	});

	largeInfowindow = new google.maps.InfoWindow();

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
		// Create an onclick event to open an infowindow at each marker.
		marker.addListener('click', function() {
			populateInfoWindow(this, largeInfowindow);
			toggleBounce(this);
		});
	};
};

// Function to display the infowindow above the marker
var populateInfoWindow = function(marker, infowindow) {
	// Check to make sure the infowindow is not already opened on this marker.
	if (infowindow.marker != marker) {
		infowindow.marker = marker;
		infowindow.setContent('<div>' + marker.title + '</div>');
		infowindow.open(map, marker);
		// Make sure the marker property is cleared if the infowindow is closed.
		infowindow.addListener('closeclick', function() {
			infowindow.marker = null;
		});
	};
};

// Function to make the marker bounce
var toggleBounce = function(marker) {
	if (marker.getAnimation() !== null) {
		marker.setAnimation(null);
	} else {
		marker.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function() {
			marker.setAnimation(null);
		}, 400);
	}
};	

var ViewModel = function() {

	var self = this;

	// Variable to relate marker to list item
	var currentMarker;

	// Function to display infowindow and bounce the marker when a name in the list is clicked
	self.clickList = function(current) {
		for (var i = 0; i < markers.length; i++) {
			if (markers[i].title === current.title) {
				currentMarker = markers[i];
				toggleBounce(currentMarker);
				populateInfoWindow(currentMarker, largeInfowindow);
				self.getWiki(currentMarker);
			}
		}
	};

	// Create an observable array from the sites array
	self.places = ko.observableArray(sites);

	// Create an observable with the value from the search input
	self.query = ko.observable('');

	// Function to filter the list items from the list value, obtained from:
	// 	https://opensoul.org/2011/06/23/live-search-with-knockoutjs/ 
	// 	http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
	self.filter = ko.computed(function() {
		var search = self.query().toLowerCase();
		return ko.utils.arrayFilter(self.places(), function(place) {
			var result = place.title.toLowerCase().indexOf(search) >= 0;
			
			// Filter the markers along with the search
			if (result === false) {
				for (var j = 0; j < markers.length; j++) {
					if (markers[j].title === place.title) {
						markers[j].setMap(null); // Remove marker from the map if it doesn't match the search
					} 
				}
			} else {
				for (var j = 0; j < markers.length; j++) {
					if (markers[j].title === place.title) {
						markers[j].setMap(map); // Place the markers on the map if they do match the search
					} 
				}
			};

			return result;
		});
	});

	self.getWiki = function(current) {
		$.ajax({
			url: wikiUrl + current.title,
			dataType: 'jsonp',
			success: function(response) {
				console.log(response);
			}
		});
	};
};

ko.applyBindings(new ViewModel()); 