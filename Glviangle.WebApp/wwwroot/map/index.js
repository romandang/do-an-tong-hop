import { GoogleMap } from "./modules/googleMap.js";
$(document).ready(function(){
  const googleMap = new GoogleMap({
    container: "contact-page-google-map",
    from: "from",
    to: "to",
    info: "directorInfo"
  });
  googleMap._initMap();
});