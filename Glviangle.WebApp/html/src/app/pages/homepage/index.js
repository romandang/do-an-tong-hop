import './index.scss';
import "../../common";
import $ from "jquery";
import { Header } from "../header";
import { Footer } from "../footer";
import { SwiperSlide } from "../../components/Swiper";

$(document).ready(function(){

  const header = new Header();
  const footer = new Footer();
  const swiper = new SwiperSlide({container: ".homepage-swiper"});
  swiper.init();
  header._init();
  footer._init();
});