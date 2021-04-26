import "./index.scss";

import Swiper from "swiper";
import $ from "jquery";

export const options = {
  element: String,
  dataSlide: Array,
};

export class SwiperSlide {
  /**
   *
   * @param {options} options
   */
  constructor(options) {
    this.data = $.extend(
      true,
      {
        /** *
         * @type {swiper}
         */
        control: null,
        element: options.element,
      },
      options
    );
  }

  init() {
    const self = this;
    self.render();
    self.handleEvent();
    self.data.control.init();
  }

  render() {
    const self = this;
    const {
      data: { dataSlide, element },
    } = self;

    if (dataSlide && dataSlide.length) {
      $(element).find(".swiper-wrapper").empty();
      $.each(dataSlide, function (i, value) {
        const slideText = $("<div/>", {
          html: value.content,
          class: "swiper-content-text",
        });

        const slideImage = $("<img/>", {
          src: value.src,
          alt: value.alt || value.src,
          class: "swiper-content-image",
        });

        const contentSlide = $("<div/>", {
          class: "swiper-content",
        })
          .append(slideImage)
          .append(slideText);

        $("<div/>", {
          id: `swiper-slide-${i}`,
          class: "swiper-slide",
          append: contentSlide,
          appendTo: `${element} .swiper-wrapper`,
        });
      });
    }

    self.data.control = new Swiper(element, {
      autoplay: {
        delay: 6000,
      },
      init: false,
      spaceBetween: 10,
      // effect: "fade",
      pagination: {
        el: `${element} .swiper-pagination`,
        clickable: true,
      },
      navigation: {
        nextEl: `${element} .swiper-button-next`,
        prevEl: `${element} .swiper-button-prev`,
      },
    });
  }

  handleEvent() {}
}

export default SwiperSlide;
