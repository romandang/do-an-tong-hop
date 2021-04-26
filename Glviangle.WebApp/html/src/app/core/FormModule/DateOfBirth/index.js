/* global $ */
import moment from "moment";
import { isValidBirthDate } from "../Validation";
import { languages } from "../Validation/msg";
import { Select } from "./../Select";

// eslint-disable-next-line no-unused-vars
const optionType = {
  container: String,
  formatDate: String,
};
export class DateOfBirth {
  /**
   *
   * @param {optionType} op
   */
  constructor(op) {
    this.data = {
      container: $(op.container),
      formatDate: op.formatDate || "DD/MM/YYYY",
      day: $(op.container).find(".js-day"),
      month: $(op.container).find(".js-month"),
      year: $(op.container).find(".js-year"),
    };
  }

  init() {
    this.render();
    this.handerEvent();
  }
  render() {
    new Select({ container: "div.day" });
    new Select({ container: "div.month" });
    new Select({ container: "div.year" });
  }
  /**
   *
   * @param {Object} data
   * @returns {Object}
   */
  binData(data) {
    const self = this;
    const field = self.data.container.attr("data-field-name");
    const dateOfBirth = moment(data[field], self.data.formatDate);
    if (!dateOfBirth.isValid()) return data;
    const _binData = Object.assign(
      {
        [`${field}_day`]: dateOfBirth.date(),
        [`${field}_month`]: dateOfBirth.month() + 1,
        [`${field}_year`]: dateOfBirth.year(),
      },
      data
    );
    return _binData;
  }

  mapDate(data) {
    const self = this;
    const field = self.data.container.attr("data-field-name");

    const day = data[`${field}_day`];
    const month = data[`${field}_month`];
    const year = data[`${field}_year`];

    data[field] = moment(`${day}/${month}/${year}`, "D/M/YYYY").format(
      self.data.formatDate
    );
    return data;
  }

  handerEvent() {
    const self = this;
    $(".select-date select").on("change", function () {
      self.validateDateTime();
      let _day = "0" + self.data.day.val();
      let _month = "0" + self.data.month.val();
      let _year = self.data.year.val();

      _day = _day.slice(_day.length - 2);
      _month = _month.slice(_month.length - 2);

      const date = `${_day}/${_month}/${_year}`;
      let isValidate = isValidBirthDate(date);

      const parent = $(this).parents(".form-submit__group");
      if (isValidate !== true) {
        const _error = isValidate.split("_error.");
        const attr = parent.attr();
        const msg = languages._error[_error[_error.length - 1]](attr);
        parent.addClass("has-error").find(".form-submit__error span").text(msg);
      } else {
        parent
          .removeClass("has-error")
          .find(".form-submit__error span")
          .text("");
      }
      parent.find("#_DateOfBirth").val(date);
    });
  }

  daysInMonth(month, year) {
    if (month === "" || year === "") return 31;
    return new Date(year, month, 0).getDate();
  }
  validateDateTime() {
    const self = this;
    const _day = self.data.day;
    const _month = self.data.month;
    const _year = self.data.year;
    const _daysInMonth = this.daysInMonth(_month.val(), _year.val());

    if (parseInt(_day.val()) > parseInt(_daysInMonth)) {
      _day.val("");
      _day.next(".select-styled").text("Day");
    }
    _day
      .parent()
      .find("ul.select-list li")
      .each(function (ind, el) {
        if (parseInt($(el).text()) > parseInt(_daysInMonth)) {
          $(el).addClass("over-days");
        } else {
          $(el).removeClass("over-days");
        }
      });
  }
}
