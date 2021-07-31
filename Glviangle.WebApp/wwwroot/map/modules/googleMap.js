import { Clinic } from "./getDataClinic.js";

const MapModel = {
  from: String,
  to: String,
  container: String,
  info: String,
};

export class GoogleMap {
  data = {
    from: "",
    to: "",
    container: "",
    info: "",
    myLatLng: {
      lat: Number,
      lng: Number,
    },
  };

  /**
   * @param { MapModel } options
   */
  constructor(options) {
    (this.data.from = options.from),
      (this.data.to = options.to),
      (this.data.container = options.container),
      (this.data.info = options.info);
    this.data.myLatLng = {
      lat: 10.7939148,
      lng: 106.7203324,
    };
  }

  _initMap() {
    const self = this;
    self._handleEvents();
    self._initRouteMap();
    self._getLocation();
  }

  _getLocation() {
    const self = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        $("#btnLocation").on("click", function (e) {
          e.preventDefault();
          $("#from").val(
            `${position.coords.latitude}, ${position.coords.longitude}`
          );
          self.data.myLatLng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          self._getDataClinic(self.data.myLatLng);
          const map = self._initRouteMap().map;
          const marker = new google.maps.Marker({
            position: self.data.myLatLng,
            map: map,
          });
        });
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  _getDataClinic(myLatLng) {
    const clinic = new Clinic();
    clinic._init(myLatLng);
  }

  _initRouteMap() {
    const self = this;
    const myLatLng = self.data.myLatLng;
    var mapOptions = {
      center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    //create map
    var map = new google.maps.Map(
      document.getElementById(self.data.container),
      mapOptions
    );

    self._inputRouteMap(myLatLng, map);
    return {
      map: map,
      myLatLng: myLatLng,
    };
  }

  _inputRouteMap(myLatLng, map) {
    const self = this;

    var options = {
      componentRestrictions: { country: "vn" },
      fields: ["formatted_address", "geometry", "name"],
      strictBounds: false,
      types: ["establishment"],
    };

    var inputFrom = document.getElementById(self.data.from);
    var autoCompleteFrom = new google.maps.places.Autocomplete(
      inputFrom,
      options
    );

    autoCompleteFrom.addListener("place_changed", () => {
      // infowindow.close();
      // marker.setVisible(false);
      const place = autoCompleteFrom.getPlace();
      const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
      });
      self._getDataClinic(myLatLng);
      if (!place.geometry || !place.geometry.location) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
    });
  }

  _calcRoute(destination) {
    const self = this;
    const data = self._initRouteMap();
    const from = document.getElementById(self.data.from).value;
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(data.map);
    var request = {
      origin: from,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    };

    directionsService.route(request, function (result, status) {
      const output = document.querySelector(`#${self.data.info}`);
      if (status == google.maps.DirectionsStatus.OK) {
        output.innerHTML =
          "<div class='alert-info'>Từ: " +
          from +
          ".<br />Đến: " +
          destination +
          ".<br /> Khoảng cách: " +
          result.routes[0].legs[0].distance.text +
          ".<br />Ước tính: " +
          result.routes[0].legs[0].duration.text +
          ".</div>";
        directionsDisplay.setDirections(result);
      } else {
        directionsDisplay.setDirections({ routes: [] });
        data.map.setCenter(data.myLatLng);
        // output.innerHTML =
        //   "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
      }
    });
  }

  _handleEvents() {
    const self = this;
    $("#btnFindRoute").on("click", function (e) {
      e.preventDefault();
      const destination = $(".select-input").val();
      self._calcRoute(destination);
    });
  }
}
