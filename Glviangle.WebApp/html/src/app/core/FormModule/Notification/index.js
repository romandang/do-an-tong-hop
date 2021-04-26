/* eslint-disable indent */
/* global $ */
import logger from "../../../helpers/logger";
import "./index.scss";

// eslint-disable-next-line no-unused-vars
export const optionsType = {
  container: String,
  init: Boolean,
  setup: {
    X: "left",
    Y: "left",
  },
};

// eslint-disable-next-line no-unused-vars
const pushNotificationType = {
  /**
   * success | warning | error | loading
   */
  status: String,
  message: String,
  timeOut: Number,
  action: Function,
};
// eslint-disable-next-line no-unused-vars
const notificationDoneType = {
  id: Number,
  ...pushNotificationType,
};
export class Notification {
  /**
   *
   * @param {optionsType} options
   */
  constructor(options) {
    this.data = {
      container: $(options.container),
      config: { X: "center", Y: "top", ...options.setup },
      init: options.init || true,
    };
    this.status = {
      success: "success",
      warning: "warning",
      error: "error",
      loading: "loading",
    };
    this.iconStatus = {
      success: `<i class="far fa-check-circle success"></i>`,
      warning: `<i class="far fa-exclamation-circle warning"></i>`,
      error: `<i class="far fa-times error"></i>`,
      loading: `<i class="far fa-spinner-third loading"></i>`,
    };

    $.extend(true, this.data, options);

    this.currentNotice = {
      id: String,
      /**
       *
       * @param {{status: String, message: String, action: Function}} param0
       */
      done: (action = () => {}, status, message) => {
        logger.log(`action`, action, `- status`, status, `- message`, message);
      },
    };

    this.data.init && this.init();
  }
  init() {
    this.setup();
    this.handelEvent();
  }

  setup() {
    const { config, container } = this.data;
    if (!$(container).find("#notification").length) {
      $('<div id="notification"></div>').appendTo(container);
    }
    // TODO update setting config
    let x = "90%";
    let y = "8px";

    if (config.X.toLocaleLowerCase() === "center") {
      x = "50%";
      $("#notification").css("transform", "translateX(-50%)");
    }
    if (config.X.toLocaleLowerCase() === "left") x = "0%";
    if (config.X.toLocaleLowerCase() === "right") x = "90%";

    if (config.Y.toLocaleLowerCase() === "top") y = "8px";
    if (config.Y.toLocaleLowerCase() === "bottom") y = "90%";

    $("#notification").css({ top: y, left: x });
  }

  /**
   *
   * @param {{status: String, message: String, id: Number}} param0
   * @returns {String}
   */
  template({ status = "success", message, id = 1 }) {
    return `<div class="message" data-items="${id}">
      <div class="message-notice">
        <div class="message-notice-content">
          <div class="message-custom-content">
            <span role="img" class="icon">
            ${
              Object.values(this.status).includes(status) &&
              this.iconStatus[status]
            }
            </span>
            <span class="msg">${message}</span>
          </div>
        </div>
      </div>
  </div>
  `;
  }

  /**
   *
   * @param {pushNotificationType} param0
   */
  push({ status, message, timeOut }) {
    const self = this;
    const _status = status.toLowerCase();
    const id = $("#notification .message").length + 1;
    const $template = $(self.template({ status: _status, message, id }));

    try {
      $("#notification")
        .addClass("active")
        .append($template)
        .find(`.message[data-items="${id}"]`)
        .wait(100, function () {
          $(this).find(".icon").addClass(_status);
        });
      if (timeOut && typeof timeOut === "number") {
        setTimeout(() => self.removeNotice({ id }), timeOut);
      }
    } catch (error) {
      logger.log(error);
    }

    return {
      id,
      /**
       *
       * @param {pushNotificationType} param0
       */
      done({ action = () => {}, status, message }) {
        const _status = status.toLowerCase();
        try {
          if (timeOut && typeof timeOut === "number") {
            setTimeout(() => self.done({ id, action }), timeOut);
          } else {
            self.done({ id, action, status: _status, message });
          }
        } catch (error) {
          logger.error(error);
        }
      },
    };
  }

  removeNotice({ id }) {
    $(`#notification [data-items="${id}"]`).fadeOut("slow", function () {
      $(this).remove();
    });

    if (!$("#notification").children().length) {
      $("#notification").removeClass("active");
    }
  }

  /**
   *
   * @param {notificationDoneType} param0
   */
  done({ id, status, message, action = () => {} }) {
    const self = this;
    if (status && Object.values(self.status).includes(status)) {
      $(`#notification [data-items="${id}"]`)
        .find(".icon")
        .removeClass(Object.values(self.status))
        .empty()
        .append(self.iconStatus[status])
        .wait(100, function () {
          $(this).addClass(status);
        })
        .next(".msg")
        .html(message)
        .wait(2000, function () {
          self.removeNotice({ id });
        });
    } else {
      self.removeNotice({ id });
    }

    if (typeof action === "function") action();
  }

  handelEvent() {
    const self = this;
    $("[data-push-notification]").on("click", function () {
      const that = $(this);
      const status = that.data("status");
      const message = that.data("message");
      const timeOut = that.data("time-out") || 1000;
      self.push({ status, message, timeOut });
    });
  }
}
