import './index.scss';
import "../../common";
import $ from "jquery";
import { Header } from "../header";
import { Footer } from "../footer";

$(document).ready(function(){

  const header = new Header();
  const footer = new Footer();
  header._init();
  footer._init();
});