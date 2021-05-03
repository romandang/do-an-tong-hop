import "./index.scss";
import { Loader } from 'google-maps';




export class GoogleMap {

  constructor(options) {
    this.data = {
      zoom: options.zoom,
      map: null,
      uluru: { lat: -34.397, lng: 150.644 },
      maker: null,
      container: options.container
    };
  }

  async _init() {
    const self = this;
    const loader = new Loader('AIzaSyDMsuz0GuMw1xg3IcpUJIvjs_jVBE0VSPs');
    const google = await loader.load();
    console.log(google);
    this.data.map = new google.maps.Map(document.querySelector(".map-item"), {
      zoom: self.data.zoom,
      center: self.data.uluru,
    });

    this.data.maker = new google.maps.Marker({
      position: self.data.uluru,
      map: self.data.map
    });

  }

  handleEvents() {

  }


}