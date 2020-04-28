function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {
            lat: 52.259022,
            lng: 19.197412
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var locations = [
        { lat: 52.229881, lng: 21.011672 }, //Warszawa, lazienki
        { lat: 50.061982, lng: 19.938840 }, //Krakow, wieliczka, bochnia,
        { lat: 51.109729, lng: 17.033132 }, //Wroclaw, afrykarium
        { lat: 54.349964, lng: 18.647675 }, //Gdansk, zuraw
        { lat: 49.299479, lng: 19.951918 }, //Zakopane
        { lat: 50.773691, lng: 15.739439 }, //Karpacz, wang, sniezka
        { lat: 50.485349, lng: 16.338921 }, //Kaplica Czaszek, szczeliniec wielki
        { lat: 52.234607, lng: 16.930804 }, //Rogalin, deby
        { lat: 50.846631, lng: 16.491795 }, //Swidnica, kosciol pokoju
        { lat: 51.054532, lng: 16.189353 }, //Jawor, kosciol pokoju
        { lat: 54.077884, lng: 14.992879 }, //Trzesacz, kosciol zabierany przez morze
        { lat: 53.214134, lng: 14.476080 }, //Nowe Czarnowo, krzywy las
        { lat: 54.297564, lng: 22.654491 }, //Stańczyki, akwedukty
        { lat: 51.030847, lng: 15.303650 }, //Zamek czocha
        { lat: 53.999949, lng: 19.000559 }, //Zamek w malborku
        { lat: 50.343718, lng: 19.544533 }, //Pustynia bledowska
        { lat: 49.616520, lng: 21.710913 }, //Bobrka, kopalnia ropy
        { lat: 53.898610, lng: 17.994119 }, //Odry, kamienne kregi
        { lat: 54.217781, lng: 17.839997 }, //Wesiory, kamienne kregi
        { lat: 54.309901, lng: 22.021652 }, //Rapa, piramida
        { lat: 50.749493, lng: 19.274052 }, //Olsztyn, szlak
        { lat: 50.613399, lng: 19.493052 }, //Bobolice, szlak
        { lat: 50.614573, lng: 19.475248 }, //Mirow, szlak
        { lat: 50.076793, lng: 19.445155 }, //Babice, szlak
        { lat: 50.453140, lng: 19.552094 }, //Podzamcze, szlak
        { lat: 50.244206, lng: 19.779890 }, //Pieskowa skala, szlak
        { lat: 50.492883, lng: 19.655566 }, //jura krakowsko-czestochowska
        { lat: 50.811880, lng: 19.118211 }, //Czestochowa, jasna gora
        { lat: 50.842282, lng: 16.291878 }, //Walbrzych, zamek ksiaz
        { lat: 50.688145, lng: 16.401955 }, //Walbrzych, kompleks riese
        { lat: 54.080689, lng: 21.494289 }, //Gierloz, wilczy szaniec
        { lat: 50.440787, lng: 17.767822 }, //Moszna, zamek
        { lat: 50.237447, lng: 20.847821 }, //Zalipie, malowana wies

    ];

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}