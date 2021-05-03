import "./index.scss";
import $ from "jquery";

export function toggleMenu() {
  var buttonTgl = $(".btn_toggle");
  var menuTgl = $(".main_menu");
  buttonTgl.click(function () {
    menuTgl.addClass("on_process");
    $(this).toggleClass("active");
    menuTgl.toggleClass("active");
    $("html, body").toggleClass("open_menu").animate({ scrollTop: 0 }, "300");
  });
}
