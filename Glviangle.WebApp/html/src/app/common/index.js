// - import style here ================================
import "./index.scss";
// - import script here ================================
import $ from "jquery";
import "./../helpers/Plugin/jquery-plugin";
require("jsrender")($);

// -- components
import { toggleMenu } from "./../components/Navbar";
import "./../components/footer";
import { isMobile } from "./../helpers/browser_detect";
import config from "./../../config";
import logger from "./../helpers/logger";
import { stickyInfo } from "./../helpers/functions";
import { getUserInfo } from "../services/getUserInfo";
window.$ = $;

logger.log("User info", getUserInfo);

function bindDataGlobal({
  name = "Celial",
  activeReferral = "0/10",
  closestExpireDate = "28 Jul 2020",
  tokenCount = 8,
}) {
  $("[data-user-name]").text(`Hi, ${name}!`);
  $("[data-active-refer]").text(`${activeReferral}`);
  $("[data-closest-expire-date]").text(`${closestExpireDate}`);
  $("[data-token-count]").text(`${tokenCount}`);
}

$(document).ready(function () {
  toggleMenu();
  stickyInfo();
  bindDataGlobal(getUserInfo);

  logger.log(`config`, config);
  const isDebug = Boolean(config.IS_DEBUG);
  if (config.NODE_ENV === "production" && !isDebug) {
    if (!isMobile.Android()) {
      $(".container-body")
        .html(`<h4>Only device Android</h4>`)
        .css("color", "#000");
      $("script").removeAttr("src");
    }
  }
});

$(document).on("click", function (event) {
  if (!$(event.target).is(".sticky_content, .sticky_more_info")) {
    $(".sticky_content").remove();
  }
});
