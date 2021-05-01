import "./index.scss";
import Swiper from 'swiper';
export class SwiperSlide{
  data = {
    container: String,
    init: Boolean,
    loop: Boolean,
    autoplay: Boolean
  };
  /**
   * 
   * @param { data } options 
   */
  constructor(options){
    this.data = {
      container: options.container,
      init: true,
      loop: true,
      autoplay: true,
    };
  }

  init(){
    new Swiper({options: {container: this.data.container, init: this.data.init, loop: this.data.loop, autoplay: this.data.autoplay} });
  }
}