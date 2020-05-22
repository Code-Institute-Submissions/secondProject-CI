mapboxgl.accessToken = 'pk.eyJ1IjoiZGl0a28iLCJhIjoiY2thMWhidHUwMDBoNzNtbWxrNXpyNXZ0YSJ9.eSoYXrssVsLiOkLLoZNl1w';
var map = new mapboxgl.Map({
    container: 'map',
    center: [19.627, 52.030],
    zoom: '5.90',
    pitchWithRotate: false,
    dragRotate: false,
    style: 'mapbox://styles/mapbox/streets-v11'
});

//   ---Geocoder---

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  placeholder: 'Lodging, restaurants, etc.',
  countries: 'pl',
  limit: 10,
  types: 'poi',
  mapboxgl: mapboxgl,
  marker: {
color: 'lightgreen'
},
});

//   ---Add map controls---

map.addControl(geocoder, 'top-left');
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());

//   ---Geojson---

var spots = {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                16.241986,
                50.451568
              ]
            },
            "properties": {
              "name": "Skull Chapel",
              "address": "Stanisława Moniuszki 8a",
              "city": "Czermna",
              "country": "Poland",
              "postalCode": "57-350",
              "wikilink": "https://en.wikipedia.org/wiki/Skull_Chapel",
              "shortDescription": "Beautiful and morbid chapel decorated with bones and skulls in a quiet region near Czech Republic"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                16.930804,
                52.234607
              ]
            },
            "properties": {
              "name": "Oak Park",
              "address": "Arciszewskiego 1/3",
              "city": "Rogalin",
              "country": "Poland",
              "postalCode": "62-022",
              "wikilink": "https://en.wikipedia.org/wiki/Rogalin_Landscape_Park",
              "shortDescription": "A Landscape Park full of ancient oaks reaching up to 9.15m in circumference"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                14.476080,
                53.214134
              ]
            },
            "properties": {
              "name": "Crooked Forest",
              "address": "Przemysłowa 25",
              "city": "Nowe Czarnowo",
              "country": "Poland",
              "postalCode": "74-105",
              "wikilink": "https://en.wikipedia.org/wiki/Crooked_Forest",
              "shortDescription": "Curious grove of crooked pine trees which purpose and creation is a mystery to this day"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                14.992879,
                54.077884
              ]
            },
            "properties": {
              "name": "Church taken by the Sea",
              "address": "Rewalska 1",
              "city": "Trzęsacz",
              "country": "Poland",
              "postalCode": "72-344",
              "wikilink": "https://en.wikipedia.org/wiki/Ruins_of_the_church_in_Trz%C4%99sacz",
              "shortDescription": "Ruins of a church that was being slowly chipped and taken away by the sea"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.021652,
                54.309901
              ]
            },
            "properties": {
              "name": "Pyramid Tomb",
              "address": "Banie Mazurskie",
              "city": "Rapa",
              "country": "Poland",
              "postalCode": "19-520",
              "wikilink": "https://en.wikipedia.org/wiki/Rapa,_Poland",
              "shortDescription": "Mausoleum of the Fahrenheid family built in resemblance to the ancient pyramids"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                19.529540,
                50.340453
              ]
            },
            "properties": {
              "name": "Desert in the Highlands",
              "address": "Sosnowa",
              "city": "Klucze",
              "country": "Poland",
              "postalCode": "32-310",
              "wikilink": "https://en.wikipedia.org/wiki/B%C5%82%C4%99d%C3%B3w_Desert",
              "shortDescription": "Desert amidst the verdant woodlands told by legends to be brought by devil himself"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                19.000559,
                53.999949
              ]
            },
            "properties": {
              "name": "Castle of the Teutonic Order",
              "address": "Starościńska 1",
              "city": "Malbork",
              "country": "Poland",
              "postalCode": "82-200",
              "wikilink": "https://en.wikipedia.org/wiki/Malbork_Castle",
              "shortDescription": "A classic medieval fortress built by the Teutonic Order in 1406"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                15.303512,
                51.030477
              ]
            },
            "properties": {
              "name": "Czocha Castle",
              "address": "Sucha",
              "city": "Leśna",
              "country": "Poland",
              "postalCode": "59-820",
              "wikilink": "https://en.wikipedia.org/wiki/Czocha_Castle",
              "shortDescription": "A castle surrounded by many legends"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.710913,
                49.616520
              ]
            },
            "properties": {
              "name": "The Roots of World Oil Industry",
              "address": "Kopalniana 35",
              "city": "Bóbrka",
              "country": "Poland",
              "postalCode": "38-458",
              "wikilink": "https://en.wikipedia.org/wiki/B%C3%B3brka,_Krosno_County",
              "shortDescription": "Museum dedicated to the forgotten piece of oil industry history"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.494306,
                54.080648
              ]
            },
            "properties": {
              "name": "Wolf's Lair",
              "address": "Gierłoż 5",
              "city": "Gierłoż",
              "country": "Poland",
              "postalCode": "11-400",
              "wikilink": "https://en.wikipedia.org/wiki/Wolf%27s_Lair",
              "shortDescription": "The den of a german wolf almost killed by his own kind"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                17.767940,
                50.440759
              ]
            },
            "properties": {
              "name": "Moszna Castle",
              "address": "Zamkowa 1",
              "city": "Moszna",
              "country": "Poland",
              "postalCode": "47-370",
              "wikilink": "https://en.wikipedia.org/wiki/Moszna_Castle",
              "shortDescription": "One of the most beautiful castles in the world"
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                15.723962,
                50.777690
              ]
            },
            "properties": {
              "name": "Wandering Stave Church",
              "address": "Na Śnieżkę 8",
              "city": "Karpacz",
              "country": "Poland",
              "postalCode": "58-540",
              "wikilink": "https://en.wikipedia.org/wiki/Vang_Stave_Church",
              "shortDescription": "A four-post single-nave stave church originally built around 1200 in the parish of Vang in the Valdres region of Norway"
            }
          }
        ]
      };
      
    //   ---Spot id---

      spots.features.forEach(function(spot, i){
        spot.properties.id = i;
      });

    //   ---Onload Add---

      map.on('load', function (e) {
        map.addSource("places", {
          "type": "geojson",
          "data": spots
        });
        buildLocationList(spots);
        addMarkers();
      });

    //   ---Markers---

      function addMarkers() {
        spots.features.forEach(function(marker) {
          var el = document.createElement('div');
          el.id = "marker-" + marker.properties.id;
          el.className = 'marker';

    //   ---Marker div---

          new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

         //   ---flyTo event--- 

          el.addEventListener('click', function(e){
            flyToSpot(marker);
            createPopUp(marker);

        //   ---Reset other---

            var activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById('listing-' + marker.properties.id);
            listing.classList.add('active');
          });
        });
      }


      //   ---Spot listing---

      function buildLocationList(data) {
        data.features.forEach(function(spot, i){
          var prop = spot.properties;

        //   ---Add listing---

          var listings = document.getElementById('listings');
          var listing = listings.appendChild(document.createElement('div'));

        //   ---Add listing tags---

          listing.id = "listing-" + prop.id;
          listing.className = 'item';

        //   ---Add listing links---

          var link = listing.appendChild(document.createElement('a'));
          link.href = '#';
          link.className = 'title';
          link.id = "link-" + prop.id;
          link.innerHTML = '<h4>' + prop.name + '</h4>';

        //   ---Add listing details---

          var details = listing.appendChild(document.createElement('div'));
          details.innerHTML = prop.address + ' · ' + prop.city + ' · ' + prop.postalCode + '<br>';
          if (prop.shortDescription) {
            details.innerHTML += prop.shortDescription;
          }

          //   ---Display current popup---

          link.addEventListener('click', function(e){
            for (var i=0; i < data.features.length; i++) {
              if (this.id === "link-" + data.features[i].properties.id) {
                var clickedListing = data.features[i];
                flyToSpot(clickedListing);
                createPopUp(clickedListing);
              }
            }
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
          });
        });
      }

      //   ---flyto camera---

      function flyToSpot(currentFeature) {
        map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 15
        });
      }

      //   ---Popup content---

      function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        var popup = new mapboxgl.Popup({closeOnClick: true})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h4><a target="_blank" href="' + currentFeature.properties.wikilink + '">' + currentFeature.properties.name +  '</a></h4>' + '<hr class="my-0">' + 
            '<p><b>' + 'Address: ' + '</b>' + currentFeature.properties.address + '</p>' +
            '<p><b>' + 'City: ' + '</b>' + currentFeature.properties.city + '</p>' +
            '<p><b>' + 'Postalcode: ' + '</b>' + currentFeature.properties.postalCode + '</p>')
          .addTo(map);
      }