import $ from "jquery";
import logger from "../../../helpers/logger";
import { ajaxJson } from "../HttpRequest";

export const OptionType = {
  container: String,
  isLoading: Boolean,
};
export class Select {
  /**
   *
   * @param {OptionType} op
   */
  constructor(op) {
    this.data = $.extend(true, op, {
      init: true,
      container: $(op.container),
      isLoading: op.isLoading || false,
    });
    this.data.init && this.init();
    this.onChange = (value, select) => {
      logger.log(select, value);
    };
  }
  init() {
    this.render();
  }
  handelEvent() {}
  update() {
    this.data.isLoading = false;
    this.render();
  }
  render() {
    const self = this;
    const select = self.data.container.find("select");
    const option = select.find("option");
    select.hide().off("change").nextAll().remove();

    const Selected = $(`<div />`, {
      class: `select-styled ${self.data.isLoading ? "loading" : ""}`,
      text: option.eq(0).text(),
    }).insertAfter(select);

    const SelectItems = $("<ul/>", {
      class: `select-list`,
    })
      .insertAfter(Selected)
      .hide();

    option.each(function () {
      const that = $(this);
      $(`<li />`, {
        value: that.val(),
        text: that.text(),
        "data-code": that.attr("data-code") ? that.attr("data-code") : "",
      }).appendTo(SelectItems);
    });

    SelectItems.children().first().hide();

    Selected.on("click", function (e) {
      e.preventDefault();
      $(".select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-list").slideUp();
        });
      $(this).toggleClass("active").next("ul.select-list").slideToggle();
    });

    SelectItems.children("li").on("click", function (e) {
      const that = $(this);
      SelectItems.children("li").removeClass("same-as-selected");
      that.addClass("same-as-selected");
      e.preventDefault();
      select.val(that.attr("value")).trigger("change");
      SelectItems.slideUp();
    });

    select.on("change", function () {
      const that = $(this);
      const option = that.find(`option[value="${that.val()}"]`);

      SelectItems.children("li").removeClass("same-as-selected");

      SelectItems.find(`li[value="${that.val()}"]`).addClass(
        "same-as-selected"
      );
      Selected.text(option.text())
        .addClass("select-chosen")
        .removeClass("active");
      self.onChange(that.val(), select);
    });

    $(document).on("click", function (e) {
      $(".select-styled").not($(e.target)).removeClass("active");
      $(".select-list").not($(e.target).next(".select-list")).slideUp();
    });
  }
}

export const OptionSelectAsyncType = {
  ...OptionType,
  api: String,
  id: String,
};
export class SelectAsync extends Select {
  /**
   *
   * @param {OptionSelectAsyncType} props
   */
  constructor(props) {
    const options = $.extend(true, { isLoading: true }, props);
    super(options);
    /**
     *
     * @param {{id: String, options: [], control}} data
     * @returns { [{ code: String, name: String, value: String }] }
     */
    this.callBackData = (data) => {
      logger.log(data);
    };
    this.data.init && this.getData();
  }

  async getData() {
    const res = await ajaxJson({ url: this.data.api });
    const options = this.callBackData({
      id: this.data.id,
      options: res.result ? res.result : res,
      control: this,
    });
    this._renderOptions(options);
  }
  _renderOptions(options = []) {
    const self = this;
    options.forEach((o) => {
      const template = `<option data-code="${o.code}" value="${o.value}">${o.name}</option>`;
      self.data.container.find(`select${self.data.id}`).append(template);
    });
    this.update();
  }
}
