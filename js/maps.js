const locations = [
  {lat: 49.87019825460083, lon: 24.001509478816125, label: 'Avalon Comfort'},
  {lat: 49.87418110985521, lon: 24.021765520971275, label: 'ЖК Авалон Флекс'},
  {lat: 49.8732960592954, lon: 24.02897529868751, label: 'Avalon Light'},
  {lat: 49.85824771800612, lon: 24.026915362197162, label: 'ЖК Avalon'},
  {lat: 49.86776412580256, lon: 24.033438494416618, label: 'Avalon Time'},
  {lat: 49.84408029073181, lon: 24.04476814511356, label: 'Авалон Дрім'},
  {lat: 49.83123747243869, lon: 23.986746600635254, label: 'Avalon Garden'},
  {lat: 49.82127086688408, lon: 24.011122515771113, label: 'Avalon Lux'},
  {lat: 49.80133149510608, lon: 24.017645647990566, label: 'ЖК Avalon 2Day'},
  {lat: 49.7935750764575, lon: 24.011122515771113, label: 'ЖК Avalon Holiday'},
  {lat: 49.79756424693885, lon: 24.05369453657176, label: 'ЖК Avalon Up'},
  {lat: 49.815289917871496, lon: 24.060217668791214, label: 'ЖК Avalon Zelena St.'}
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("google"), {
    zoom: 12,
    center: new google.maps.LatLng(49.83614773007384, 24.006735380875973),
    mapTypeId: "roadmap",
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });

  const iconPath = "../assets/img/marker.png";

  var image = new google.maps.MarkerImage(
    iconPath,
    new google.maps.Size(71, 71),
    new google.maps.Point(0, 0),
    new google.maps.Point(17, 34),
    new google.maps.Size(25, 25)
  );

  const features = locations.map(location => {
    return {
      position: new google.maps.LatLng(location.lat, location.lon),
      type: 'info',
      label: location.label
    }
  })

  // Create markers.
  features.forEach((feature)  => {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: image,
      map: map,
      label: { color: '#000', fontWeight: 'bold', fontSize: '14px', text: feature.label }
    });
  });
}
