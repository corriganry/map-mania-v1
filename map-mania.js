var gMap

function initMap() {
  gMap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  var newLocation = new google.maps.LatLng(-34.397, 142.644)
  var marker = new google.maps.Marker({position:{lat:-34.397, lng:142.644}, map:gMap});

  google.maps.event.addListener(gMap, 'idle', function() {
    checkLocation()
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Middle of nowhere Australia</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(gMap, marker);
  });

}


function checkLocation() {
    console.log('function checkLocation()');
    var zoomLevel = gMap.getZoom();
    var inBounds = false;
    if (gMap.getBounds().contains({lat:-34.397,lng:142.644})){
      inBounds = true;
    }

    console.log("Is it in bounds or not? " + inBounds);
}

function initApplication() {
  console.log('This is my map mania!');
}

