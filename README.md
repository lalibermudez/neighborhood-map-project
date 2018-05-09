# Neighborhood Map Project

The Neighborhood Map Project, is the final project of Udacity's Front-End Web Developer Nanodegree Program. It seeks to test all the capabilities and techniques that the students have learned throghout the course.

The goal of the project is to create a single page application featuring a particularly chosen map, and then to add functionality to that map including highlighted locations, third-party data about those locations and various ways to browse the content.

## App Description

This particular project is centered in Panama City, Panama, and features a few of it's most popular turistic sites. On load, it displays a map of Panama, with seven markers, pointing to the sites in question. When each marker is clicked, it displays an information window with the name of the site and a basic description. 

There is also a navigation menu to the left, with a list of the sites. If the list items are clicked, the information window will display on the map, on top of it's respective marker. The navigation menu also provides a search bar that allows to filter the sites. When a search is made, the sites listed on the menu will be filtered, as well as the locations displayed on the map.

For smaller screens (phones and tablets) the navigation menu is hidden, and can be accessed through the menu icon that is displayed on top of the page. The application is responsive and adapts itself to work properly on any device. 

The application fetches information from Google Maps and Wikipedia, using their respective APIs. The information is obtained through asynchronous requests, to provide a better experience for the user. For in-depth information on to use these APIs, you can visit their respective documention pages:
* Google Maps: [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
* Wikipedia: [Wikipedia API](https://www.mediawiki.org/wiki/API:Tutorial)

### Working on the application

If you want to work on the app, you may clone, fork or download this repository to your local machine.

The application is built with knockout.js, Bootstrap and jQuery. 

Knockout is an organizational library that provides functionality to the app with a clean underlying data model. Bootstrap was relied upon for responsiveness and styling. Minified files of each of these libraries/frameworks are included in the project's files, though you may want to update these files, or use the CDN version. Instructions on how to do this can be found on the documentation of each of these libraries.
* Knockout: [Knockout](http://knockoutjs.com/)
* Bootstrap: [Bootstrap](https://getbootstrap.com/)
* jQuery: [jQuery](https://api.jquery.com/)

### Main Application File

To load the application, simply open the **index.html** file on your browser, it is located in the main folder. This file contains the HTML and the basic structure for the page.

### Application Functionality

The **js/app.js** file contains the basic functionality for the application. In this file you can find the data, and the ViewModel necessary for Knockout to load correctly and provide proper functionality and organization. 

You can also find in this file all the functions that fetch the APIs' data and effectively renders it on the page. The data requests are performed asynchronously which allows to fetch the information without reloading the whole webpage, thus providing a better user experience. The requests to Wikipedia's API are made through jQuery's .ajax() method, more information on how to implement this method can be found in the jQuery documentation (link provided above).

In case the data is not properly obtained from the APIs, the application is equiped with functions to handle these kinds of errors. These functions can also be found on the **app.js** file. 

### Styles and Responsiveness

The **css/styles.css** file, provides the basic styling of the page, most of it is based on the styling options provided by Bootstrap.

## Running the application

To run the application in action, just click [here](https://lalibermudez.github.io/neighborhood-map-project/).

### Contributing

If you wish to contribute to this project, feel free to make a pull request.

### Author

This project was entirely made by **Lali Bermudez** to submit as the final project for the Front-End Web Developer Nanodegree Program, with the specifications and tools provided by the same program.

To see more of her projects, you can checkout her Github profile [here](https://github.com/lalibermudez).


