function initMap() {
    
    var directionsService = new google.maps.DirectionsService;//pide estas 2 cosas
    var directionsRenderer = new google.maps.DirectionsRenderer;
    var geocoder = new google.maps.Geocoder();
    
    var mapOptions = {
      zoom:8,
      center: {lat: 4.6486259, lng: -74.2478956}
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);//genera un mapa
    directionsRenderer.setMap(map);//renderizalo!

    document.getElementById('letsGo').addEventListener('click', () => {//cuando le des click pinta el nuevo mapa
        paintRoute(directionsService, directionsRenderer,geocoder,map)
        console.log('ok?')
    })
  }
  
