import "./index.scss";
import $ from "jquery";

export class Radio {
  constructor() {
    this.data = {
      Radio_Wrapper: $(".ant-radio-wrapper"),
    };
  }

  init() {
    this.handleEvents();
  }

  handleEvents() {
    const seft = this;
    $(seft.data.Radio_Wrapper).on("click", function () {
      let that = $(this);

      $(seft.data.Radio_Wrapper)
        .removeClass("ant-radio-wrapper-checked")
        .find(".ant-radio")
        .removeClass("ant-radio-checked")
        .find(".ant-radio-input")
        .attr("checked", false);

      that
        .addClass("ant-radio-wrapper-checked")
        .find(".ant-radio")
        .addClass("ant-radio-checked")
        .find(".ant-radio-input")
        .attr("checked", true);
    });
  }
}

export const clearCheckedRadio = () => {
  $(".ant-radio-wrapper")
    .removeClass("ant-radio-wrapper-checked")
    .find(".ant-radio")
    .removeClass("ant-radio-checked")
    .find(".ant-radio-input")
    .attr("checked", false);
};

export default { Radio, clearCheckedRadio };
