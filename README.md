# [CurioFinder](https://xasthar.github.io/secondProject-CI/)

Did you ever wonder how many unusual places are there around the globe?\
Like the famous Paris Catacombs or the Easter Island.\
I've made this little website to show couple of example places from Poland.
 
## UX
 
This website was made to encourage people into travelling to mostly remote areas and see the places I have shown them for themselves.\
The demographic of this website would consist of either:

* People already used to travelling that would know how to get by in more rural areas.
* Wannabe explorers that after checking the site would hopefully want to check them for themselves.

I purposefully try to tap into their inner curiosity about places with either:

* Buildings created with architectural prowess most often made in times where it should be hard to achieve.
* Legends deeply rooted in folklore.
* Nature-made wonders.

The implemented map should be useful in this endeavour by showing aforementioned places and providing address and links to the wiki.
Also the search box in the map will provide them with necessary information about lodging or food joints around Poland.

User stories:
1. As a  seasoned traveller I'm searching for new and "off the path" places to see.
So a website showing me on the map where those places are directly without advertisements and tons of cluttering text are appreciated.

1. As a holiday traveller I'll get curious about some places on the map that are closer to the bigger cities and visit them to "kill two birds with one stone"
Also searchbar for necessary buildings like lodging, restaurants and even other places to visit helps.

1. As a user I'll stumble onto this website and get interested in the different places in the listing and their short descriptions.
It might drive me to click on the links to wiki and hopefully plan to travel to some of this places.

1. As a user I'll find the website, click the different listings, check the wiki and the map and be done with the website without any need to see those places.

## Features

The website is comprised of two columns: one for the listing and the second for the map.\
The listing has information about different places around Poland.\
The map has markers all over Poland representing interesting and unusual places to see.
 
### Existing Features

##### Listing 
Every item in the list has a:
* Clickable name that moves the map to the corresponding marker
* An address to the aforementioned place
* A short description intending to interest the reader

##### Map
The Map is comprised of:
* Markers with popups showing address and also clickable title refering the user to wikipedia page about the topic.
* Map controls as in zoom altough you could also zoom with mousescroll, compass showing the cardinal directions and fullscreen mode.
* Searchbar filtered to only show points of interest in Poland.

The listing items and the markers are interconnected.
Selecting a list item will highlight it and make the map fly to the corresponding marker and vice versa.

### Features Left to Implement

- Expanding the project to different countries maybe through multiple maps.
- Sorting utility for the listing in case the number of items gets bigger.
- Detaching geojson file from main js file.

## Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5) Overall structure
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) Stylizing elements
* [JAVASCRIPT](https://en.wikipedia.org/wiki/JavaScript) Background logic
* [MAPBOX](https://en.wikipedia.org/wiki/Mapbox) Map tiles & [MAPGLJS](https://docs.mapbox.com/mapbox-gl-js/api/)
* [OpenStreetMap](https://en.wikipedia.org/wiki/OpenStreetMap) Map data
* [Bootstrap 4.5](https://getbootstrap.com/) For structuring
* [FontAwesome](https://fontawesome.com/) Icons
* [Google Fonts](https://fonts.google.com/) Fonts

## Testing

W3C Markup Validation Service and W3C CSS Validation Service returned no errors.
The Chrome DOM inspector returned two irrelevant errors.

Every user described above succesfully retrieved information without technical problems:
1. Entered website.
1. Played around with the map.
1. Clicked on listing item titles to highlight them for the map to fly to the corresponding marker.
1. Every marker responded with showing a popup when clicked and the popup closed when the user clicked somwhere else.
1. Every Popup title had a reference link to wikipedia working.
1. Multiple clicking didn't mess with the moving process of the map

One user complained about the lack of sorting in the list which was already added to the "To do list"\
Using the website on smaller resolutions albeit unwieldy in places because the searchbox and popups dont scale well enough is working without problems.\
Only bug or inconvenience was that the searchbox isn't precise enough with it's search beacuse many of the places are in really rural areas without clear lodging or restaurants in the system.
Mapbox has a proximity Bias system but adding it to many places at once would be messy in the js file so a workaround is added to a "To do list"

## Deployment

The website was made in Gitpod and deployed to [this](https://github.com/Xasthar/secondProject-CI) page.\
It has several more files used for configuration which are adeed to the gitignore file as to not clutter the repo.\
If you missed the demo you can also find it here: [https://xasthar.github.io/secondProject-CI/]

## Credits

### Content

- Place Marker icon icon by Icons8
- Map tileset provided by [Mapbox](https://www.mapbox.com/about/maps/)
- Map data provided by [Openstreetmaps](https://www.openstreetmap.org/about/)

### Acknowledgements

- Thanks to the many tutorials and documentations provided by mapbox i could make this project happen.
