let map;

let favoritos = [
    ['Colombia', 4.6485882, -74.378445],
    ['España', 40.4381311, -3.8196233],
    ['Francia', 48.8589466, 2.2769948]
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 4.570868, lng: -83.2621768 },
    zoom: 2,
  });
    
    for (i = 0; i < favoritos.length; i++) {  
        marker = new google.maps.Marker({
            position: { lat: favoritos[i][1], lng: favoritos[i][2] },
            map: map,
            title: favoritos[i][0]
        });
    }        
}
