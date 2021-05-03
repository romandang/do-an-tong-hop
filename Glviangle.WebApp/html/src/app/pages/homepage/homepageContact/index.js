import "./index.scss";
import { GoogleMap } from "../../../components/Map";

export class HomepageContact{
  constructor(){
    this.data = {
      map: new GoogleMap({
        options: {
          zoom: 8,
          container: '.contact-map'
        }
      })
    }; 
   
  }

  async _init(){
    await this.data.map._init();
  }

  handleEvents(){

  }
}