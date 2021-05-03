import "./index.scss";
import $ from "jquery";
import logger from "../../helpers/logger";
import { Notification } from "../../core/FormModule/Notification";
import { HandelGetContentData } from "../../services";

export const optionType = {
  init: Boolean,
  api: String,
};

export const ContentObj = {
  contentBanner: String,
  desc: String,
  title: String,
};

export class SectionContent {
  /**
   *
   * @param {optionType} options
   */
  constructor(options) {
    this.data = {
      api: options.api,
      init: options.init || true,
      loader: $(".card"),
    };
    $.extend(true, this.data, options);
    this.notice = new Notification({ container: "#samsung" });
    this.data.init && this.init();
  }
  async init() {
    await this.getContent();
  }

  async getContent() {
    const self = this;
    const contentArr = await HandelGetContentData(self.data.api);
    logger.log(contentArr);
    if (contentArr.length) self.template(contentArr[0]);
    self.data.loader.removeClass("loading");
  }

  /**
   *
   * @param {ContentObj} contentObj
   */
  template(contentObj) {
    const sectionContent = $("#section-content");
    sectionContent.find(".card-meta-title h3").html(contentObj.title);
    sectionContent
      .find(".card-meta-description .content")
      .html(contentObj.desc);
    sectionContent.find(".banner").attr("src", contentObj.contentBanner);
    logger.log(`Template content: `, contentObj);
  }
}
