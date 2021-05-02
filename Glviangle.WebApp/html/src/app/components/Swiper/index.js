import "./index.scss";
import "../Button";
import Swiper from 'swiper';
export class SwiperSlide{
  data = {
    container: String,
    init: Boolean,
    loop: Boolean,
    autoplay: Boolean,
    pagination: Boolean
  };
  /**
   * 
   * @param { data } options 
   */
  constructor(options){
    this.data = {
      container: options.container,
      init: (!options.init) ? true : options.init,
      loop: (!options.loop) ? true : options.loop,
      autoplay: (!options.autoplay) ? true : options.autoplay,
      pagination: (!options.pagination) 
        ? {el: ".swiper-pagination", dynamicBullets: true} 
        : {el: `${options.pagination.el}`, dynamicBullets: `${options.pagination.dynamicBullets}`}
    };
  }

  init(){
    new Swiper(this.data.container, {
      options: {
        init: this.data.init, 
        loop: this.data.loop, 
        autoplay: this.data.autoplay, 
      },
      pagination: this.data.pagination
    });
  }
}