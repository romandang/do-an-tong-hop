import './index.scss';
import "../../common";
import $ from "jquery";
import { Header } from "../header";
import { Footer } from "../footer";
import { SwiperSlide } from "../../components/Swiper";
import { HomepagePromotion } from "./homepagePromotion";
// init component only
import { HomePageMS } from "./homepageMS";
import { HomepageContact } from "./homepageContact";
import "./homepageMAZ";


$(document).ready(function(){
  const header = new Header();
  const footer = new Footer();
  const swiper = new SwiperSlide({container: ".homepage-swiper"});
  const homepagePromotion = new HomepagePromotion();
  const homepageMS = new HomePageMS();
  const homepageContact = new HomepageContact();
  swiper.init();
  header._init();
  footer._init();
  homepageMS._init();
  homepagePromotion._init();
  homepageContact._init();
});