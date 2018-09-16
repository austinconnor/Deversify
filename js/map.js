var asiaCoords = {lat:34.0479 , lng:100.6197 };
var northAMCoords = {lat:54.5260 , lng:-105.2551 };
var southAMCoords = {lat:-8.7832 , lng:-55.4915 };
var europeCoords = {lat:54.5260 , lng:15.2551 };
var australiaCoords = {lat:-25.2744 , lng:133.7751 };
var africaCoords = {lat:-8.7832 , lng:34.5085 };
var mult = 5000;
var geocoder;

var url1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" ;
var url2 = "&key=AIzaSyAhFAIpFI3FEO0Kvbs3WLjLLEWJUWROr00";
const http = new XMLHttpRequest();


      var citymap = {
        northAM: {
            center: northAMCoords,
            population: 25016 * mult
        },
        southAM: {
          center: southAMCoords,
          population: 4162 * mult
        },
        europe: {
          center: europeCoords,
          population: 39001 * mult
        },
        asia: {
          center: asiaCoords,
          population: 24700 * mult
        },
        africa: {
          center: africaCoords,
          population: 2869 * mult
        },
        australia: {
            center: australiaCoords,
            population: 2591 * mult
          }
      };

      function initMap() {
        // Create the map.
        geocoder = new google.maps.Geocoder();
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2.5,
          center: {lat: 30, lng: 0},
          styles: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "gamma": "1.42"
                    },
                    {
                        "lightness": "11"
                    },
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "lightness": -5
                    },
                    {
                        "weight": 1.7
                    },
                    {
                        "color": "#ff0060"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#fff1f6"
                    },
                    {
                        "weight": "0.65"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#fff1f1"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": "0.75"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": "3.00"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "weight": "3.00"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#cc7696"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "0"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "color": "#99badd"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eac2d1"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": "0.50"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": "0.50"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "weight": "2.55"
                    },
                    {
                        "color": "#fad2e1"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": "0.50"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "0"
                    },
                    {
                        "weight": "0.50"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#fad2e1"
                    },
                    {
                        "weight": "3.00"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbf4f4"
                    },
                    {
                        "lightness": "3"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
        });

        // Construct the circle for each value in citymap.
        // Note: We scale the area of the circle based on the population.
        for (var city in citymap) {
          // Add the circle for this city to the map.
          var cityCircle = new google.maps.Circle({
            strokeColor: '#005ce6',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#P8E9EE',
            fillOpacity: 0.35,
            map: map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].population) * 100
          });
        }
      }

function toggleTable(){
    var x = document.getElementById('infoTable');
    if(x.style.display === "none"){
      x.style.display = "block";
    }
    else{
      x.style.display = "none";
    }
}