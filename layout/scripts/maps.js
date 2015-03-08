function initialize() {
  var myCenter = new google.maps.LatLng(-4.65334726, -37.46554345);
  var mapProp = {
    center: myCenter,
    zoom: 18,
    zoomControl: false,
    streetViewControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
