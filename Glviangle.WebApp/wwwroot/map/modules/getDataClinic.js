import { hospitalData } from "./data.js";

export class Clinic {
  data = {
    hospital: String,
    
  };

  constructor() {
    this.data.hospital = hospitalData;
  }

  _init(myLatLng) {
    const self = this;
    // var data = self._separateAddress(self.data.hospital);
    self._getLocation(myLatLng);
  }

  round(value, precision) {
    if (precision == 0) return Math.round(value);
    let exp = 1;
    for (var i = 0; i < precision; i++) exp *= 10;

    return Math.round(value * exp) / exp;
  }

  _getLocation(myLatLng) {
    const self = this;
    $.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json",
      {
        location: `${myLatLng.lat}, ${myLatLng.lng}`,
        radius: "5000",
        type: "hospital",
        key: "AIzaSyAk_T9lzF_FhLQ8E9j9AGDz1xN9IJD-vuQ",
      },
      function (data, status, xhr) {
        console.log(data);
        const arrayData = [];
        const arrayDistance = [];
        /**
         *
         */
        $(data.results).each((index, item) => {
          const data = {
            name: item.name,
            address: item.formatted_address,
            location: {
              lat: item.geometry.location.lat,
              lng: item.geometry.location.lng,
            },
          };
          arrayData.push(data);
        });

        /**
         * Tính khoảng cách các điểm
         */

        $(arrayData).each((index, data) => {
          const item = {
            name: data.name,
            location: {
              lat: data.location.lat,
              lng: data.location.lng,
            },
            address: data.address,
            distance: self.round(
              self._getDistanceFromLatLonInKm(
                myLatLng.lat,
                myLatLng.lng,
                data.location.lat,
                data.location.lng
              ), 2
            ),
          };
          arrayDistance.push(item);
        });

        /**
         * Sắp xếp khoảng cách
         */
        arrayDistance.sort(function (a, b) {
          return a.distance - b.distance;
        });
        /**
         * Gán khoảng cách vào select
         */
        $(arrayDistance).each((index, data) => {
          $(".select-input").append(`
            <option value="${data.address}">${data.name} | ${data.distance}KM</option>
          `);
        });
        console.log(arrayDistance);
      },
      "json"
    );
  }

  _getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const self = this;
    var R = 6371; // Radius of the earth in km
    var dLat = self._deg2rad(lat2 - lat1); // _deg2rad below
    var dLon = self._deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(self._deg2rad(lat1)) *
        Math.cos(self._deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  _deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
}
