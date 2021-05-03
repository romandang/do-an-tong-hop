// #!if ENV === 'development'
import $ from "jquery";
// #!endif
import "./index.scss";
require("jsrender")($);

export class FaqModule {
  generateHtml(faqData) {
    $(".faq_content > h3").text(faqData.heading);
    var template = $.templates("#faqTemplate");
    var htmlOutput = template.render(faqData.content);
    $(".faq_content").append(htmlOutput);
    this.toggleFaq();
  }

  toggleFaq() {
    var faqContent = $(".faq_content");
    faqContent.find("dt").click(function () {
      faqContent.find("dd").not($(this).next("dd")).slideUp();
      faqContent.find("dt").not(this).removeClass("active");
      $(this).toggleClass("active");
      $(this).next("dd").slideToggle();
    });
  }
}

export default FaqModule;
