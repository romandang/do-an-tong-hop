/* eslint-disable no-unused-vars */
/* global grecaptcha */

import "./index.scss";
import $ from "jquery";
import config from "../../../config";
import { Notification } from "./Notification";
import { languages } from "./Validation/msg";
import { Select, SelectAsync } from "./Select";
import { DateOfBirth } from "./DateOfBirth";
import { PopupModule } from "./Popup";
import logger from "../../helpers/logger";

const initFieldType = {
  field: {
    type: String,
    rules: [Function],
  },
};
const errorType = {
  result: false,
  field: "",
  message: "",
};

export const optionsType = {
  FormId: String,
  DataFields: Object,
  HasCaptcha: Boolean,
  EndPoint: String,
  ErrorMsg: Array,
  Popup: Boolean,
  SelectAsync: [
    {
      api: String,
      id: String,
    },
  ],
};
export class FormModule {
  /**
   *
   * @param {optionsType} options
   */
  constructor(options) {
    this.isProccesing = false;
    this._options = $.extend(true, { init: false }, options);
    this.form = $(options.FormId);
    this.button = this.form.find(
      "button[type='submit'], .form-submit__group--btn .btn"
    );
    this.loader = {
      show: () =>
        this.button.addClass(["loading", "disabled"]).attr("disabled", true),
      hide: () =>
        this.button
          .removeClass(["loading", "disabled"])
          .attr("disabled", false),
    };

    /**
     * @type {initFieldType}
     */
    this.fields = options.DataFields;
    /**
     * @type {languages['_error']}
     */
    this.errorMsg = options.ErrorMsg || languages._error;
    this.hasCaptcha = options.HasCaptcha || false;
    this.selectAsync = options.SelectAsync || [];
    this.endpoint = options.EndPoint;
    this.method = "POST";

    this.popup = options.Popup && new PopupModule({ container: "#samsung" });
    this.notice = new Notification({ container: "#samsung" });

    this.onSubmitSuccess = (res, data) => {};
    this.onSubmitFail = (res, data) => {};

    /**
     *
     * @param {Object} data
     * @returns {Object} Setting ajax
     */
    this.beforeSave = ({ data }) => ({ data });

    /**
     *
     * @param {[SelectAsync]} selects
     */
    this.binDataSelectAsync = (selects) => {};
    /**
     *
     * @param {[SelectAsync]} selects
     */
    this.handelEventSelectAsync = (selects) => {};
    this._options.init && this._init();
  }

  async _init() {
    if (this.selectAsync && this.selectAsync.length) {
      await this._SelectAsync();
    }
    this.handelEvent();
    this.form.on("submit", (e) => {
      e.preventDefault();
      this._form_submit();
    });
  }

  async _SelectAsync() {
    const self = this;
    await Promise.all(
      self.selectAsync.map((x) => {
        const select = new SelectAsync({
          container: `[data-field-name="${x.id.replace(/([#|.])/g, "")}"]`,
          ...x,
        });
        select.callBackData = function (data) {
          return self.binDataSelectAsync(data);
        };
        return select;
      })
    ).then(function (selects) {
      self.handelEventSelectAsync(selects);
    });
  }

  handelEvent() {
    const self = this;
    if (this.form.find(".select").length) {
      this.form.find(".select").each(function () {
        const that = $(this);
        const el = that.parents(".form-submit__group");
        new Select({
          container: `.form-submit__group[data-field-name="${el.attr(
            "data-field-name"
          )}"]`,
        });
      });
    }
    const { status } = self.notice;
    /*
     * Bind to capslockstate events and update display based on state
     */
    const password = self.form.find(`[data-field-name] input[type="password"]`);
    $(window).bind("capsOn", function () {
      if (password.length > 0) {
        self.notice.push({
          status: status.warning,
          message: "Caps lock on",
          timeOut: 10000,
        });
      }
    });
    $(window).bind("capsOff capsUnknown", function () {
      // TODO
    });
    password.bind("focusout", function () {
      // TODO
    });
    password.bind("focusin", function () {
      if ($(window).capslockstate("state") === true) {
        // TODO
      }
    });
    /*
     * Initialize the capslockstate plugin.
     * Monitoring is happening at the window level.
     */
    $(window).capslockstate();

    this.form
      .find(
        "[data-field-name] input, [data-field-name] select, [data-field-name] textarea"
      )
      .on("change", function () {
        const that = $(this);
        const _target = that.attr("id");
        if (that.attr("type") === "file") {
          if (this.files.length) {
            let fileNames = [];

            $.each(this.files, function () {
              fileNames.push(this.name);
            });
            $('label[for="' + _target + '"]')
              .find("span.placeholder")
              .addClass("has-file")
              .find(".placeholder-file")
              .text(fileNames.join(", "));
          } else {
            $('label[for="' + _target + '"]')
              .find("span.placeholder")
              .removeClass("has-file")
              .find(".placeholder-file")
              .empty();
          }
        }
        const groupInput = that.parents(".form-submit__group");
        const field = groupInput.attr("data-field-name");
        const data = self._getFormObject();
        const errors = self._validateField(field, data[field], data);

        if (errors.length) {
          errors.forEach((err) =>
            self._renderErrorField(err.field, err.message)
          );
        } else {
          groupInput.removeClass("has-error");
        }
      });
  }

  _grecaptcha() {
    const _captcha = { reset() {} };
    return this.hasCaptcha ? grecaptcha : _captcha;
  }

  _getFormData() {
    return $(this.form).serialize();
  }

  _getFormObject() {
    let data = $(this.form).serializeObject();
    Object.keys(this.fields).forEach((k) => {
      if (!(k in data)) data[k] = "";
    });
    return data;
  }

  /**
   * @returns {Boolean}
   */
  _runValidateClient() {
    const data = this._getFormObject();
    logger.log("FormObject", data);
    const errors = this._validateClient(data);
    this._showErrors(errors);
    const result = errors.length === 0;
    if (!result) this._grecaptcha().reset();
    return result;
  }

  /**
   *
   * @param {Object} data
   * @return {Array<errorType>}
   */
  _validateClient(data) {
    const self = this;
    let listErrors = [];
    Object.keys(data).forEach((field) => {
      const val = data[field];
      const errors = self._validateField(field, val, data);
      listErrors = [...listErrors, ...errors];
    });
    return listErrors;
  }

  /**
   *
   * @param {String} field
   * @param {String} val
   * @param {Object} data
   * @return {Array<errorType>}
   */
  _validateField(field, val, data) {
    let errors = [];
    if (this.fields[field] && this.fields[field].rules) {
      this.fields[field].rules.forEach((func) => {
        /**
         * @param {String} v
         * @param {String} f
         * @param {Object} data
         * @returns {Boolean || String}
         */
        const rule = (v, f, data) => func(v, f, data);
        const message = rule(val, field, data);

        if (message !== true) {
          const errorMsg = this.fields[field].customErrorMsg || message;
          errors.push({ result: false, field, message: errorMsg });
        }
      });
    }
    return errors;
  }

  /**
   * @param {Array<errorType>} responseErrors
   */
  _showErrors(responseErrors) {
    if (!responseErrors.length) return;
    let errors = {};
    responseErrors.forEach(function (error) {
      errors[error.field] = error.message;
    });
    this._renderErrors({ errors });
  }

  _renderErrors(response) {
    let self = this;

    $(self.form)
      .find(".form-submit__group.has-error")
      .removeClass("has-error")
      .find(".form-submit__error span")
      .text("");

    const showErrors = (errors) => {
      Object.keys(errors).map(function (field) {
        self._renderErrorField(field, errors[field]);
        return errors[field];
      });
    };

    showErrors(response.errors);

    const firstError = this.form.find(".has-error").first().offset().top;
    $("html, body").animate({ scrollTop: firstError }, 500, "swing");
  }

  /**
   *
   * @param {String} field
   * @param {String} message
   */
  _renderErrorField(field, message) {
    const self = this;
    let msg;

    if (message.startsWith("_error")) {
      const _error = message.split("_error.");
      const attr = self.form.find('[data-field-name="' + field + '"]').attr();
      const rule = self.errorMsg[_error[_error.length - 1]];
      if (!rule) {
        msg = `Missing error message with rule ${message}`;
      } else if (typeof rule !== "function") {
        msg = `Type of error message rule ${message} need is a function`;
      } else {
        msg = self.errorMsg[_error[_error.length - 1]](attr);
      }
    } else msg = message;

    $(self.form)
      .find('[data-field-name="' + field + '"]')
      .addClass("has-error")
      .find(".form-submit__error span")
      .text(msg);
  }

  _bindErrorsFormBE(response) {
    if (!response || !response.errors || !response.errors.length) {
      this.serverError();
    } else {
      let errors = {};
      response.errors.forEach((x) => (errors[x.members[0]] = x.message));
      this._renderErrors({ errors });
    }
  }

  serverError(msg = "") {
    const self = this;
    self.notice.push({
      message: msg || "Server error",
      status: self.notice.status.error,
      timeOut: 5000,
    });
    self.loader.hide();
    self.isProccesing = false;
    self._grecaptcha().reset();
  }

  _clearForm() {
    $("input[type='checkbox']").prop("checked", false);
    $("input[type='radio']").prop("checked", false);
    $(
      "input[type='text'], input[type='password'], input[type='email'], input[type='tel']"
    ).val("");
    $("select").each(function () {
      const that = $(this);
      that.val(that.children("option").eq(0).val()).trigger("change");
    });
  }

  _saveData(_config) {
    const self = this;
    return new Promise(function (resolve) {
      const setting = Object.assign(
        {
          url: config.SUBMIT_API + self.endpoint,
          method: self.method,
          headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${self.token}`,
          },
          data: _config.data,
          success(response) {
            resolve(response);
          },
          error(response) {
            if (response.status === 401) {
              window.location.href = "/login";
            } else if (response.status === 0) {
              self.serverError();
            } else {
              resolve(response.responseJSON);
            }
          },
        },
        _config
      );
      $.ajax(setting);
    });
  }

  async _form_submit() {
    const self = this;
    this.loader.show();
    self.isProccesing = true;
    const isValid = self._runValidateClient();
    if (isValid) {
      const _data = self._getFormObject();
      const data = await self.beforeSave({ data: _data });
      const response = await self._saveData(data);
      if (response && response.success === true) {
        self.onSubmitSuccess(response, _data);
      } else if (typeof self.onSubmitFail(response, data) === "undefined") {
        self._bindErrorsFormBE(response);
      }
    }
    self.loader.hide();
    self.isProccesing = false;
    self._grecaptcha().reset();
    return false;
  }
}

export { Select, DateOfBirth, SelectAsync, Notification, PopupModule };
