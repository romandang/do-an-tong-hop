// - import style here ================================
// #!if ENV === 'development'
import $ from "jquery";
// #!endif

import "./index.scss";

export const loadingOption = {
  firstShow: Boolean,
};
export class loading {
  /**
   *
   * @param {loadingOption} option
   */
  constructor(option) {
    this.data = $.extend(true, { firstShow: false }, option);
    this.data.firstShow && this.show();
  }
  show() {
    $(".loading_container").fadeIn();
  }
  hide() {
    $(".loading_container").fadeOut();
  }
}

export default loading;
