import "./index.scss";
import $ from "jquery";
import logger from "../../../helpers/logger";

// eslint-disable-next-line no-unused-vars
const optionType = {
  container: String,
};
export class PopupModule {
  /**
   *
   * @param {optionType} op
   */
  constructor(op) {
    this.data = {
      body: $("body"),
      container: $(op.container),
      /**
       * @type {JQuery}
       */
      modal: null,
      isOpened: false,
      init: true,
    };
    this.onClose = () => {};
    this.data.init && this.init();
  }

  init() {
    this.setup();
    this.handleEvents();
  }

  setup() {
    const { container } = this.data;
    if (!$(container).find("#popup-modal").length) {
      this.data.modal = $(
        `<div class="popup-form__modal" id="popup-modal">
          <div class="popup-form__modal-container">
            <div class="popup-form__modal-content"></div>
            <div class="popup-form__modal-action"></div>
            <button data-close-popup class="icon-button close-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 50 50">
                <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"></path>
              </svg>
            </button>
          </div>
        </div>`
      ).appendTo(container);
    }
  }
  /**
   *
   * @param {{ desc: String, title: String, html: String, btnConfirm: {name: String, action: void} }} param0
   */
  template({ desc = "", title = "", html, btnConfirm }) {
    const self = this;
    let _template =
      html && html.length
        ? html
        : `<h2 class="popup-form__modal-title">${title}</h2>
          <p class="popup-form__modal-desc">${desc}</p>`;

    const template = $(_template);

    if (btnConfirm) {
      $(
        `<button class="btn btn btn-spin" type="submit">
          <span class="btn-spin-text">${btnConfirm.name || "Confirm"}</span>
            <span class="btn-spin-icon">
              <span class="anticon">
                <svg class="anticon-spin" viewbox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
                </svg>
              </span>
            </span>
          </button>`
      )
        .on("click", function (e) {
          e.preventDefault();
          $(this)
            .addClass("loading")
            .wait(2000, function () {
              $(this).removeClass("loading");
            });

          if (typeof btnConfirm.action === "function") btnConfirm.action(self);
          else self.closeModal();
        })
        .appendTo(self.data.modal.find(".popup-form__modal-action"));
    }

    return template;
  }
  /**
   *
   * @param {{ timeOut: Number,desc: String, title: String, html: String,  onClose: void, btnConfirm: {name: String, action: void} }} param0
   */
  push({ title, desc, html, timeOut, btnConfirm, onClose }) {
    const self = this;
    const $template = self.template({ title, desc, html, btnConfirm });
    self.openModal($template);
    if (timeOut) setTimeout(() => self.closeModal(), timeOut);
    if (typeof onClose === "function") self.onClose = onClose;
  }

  openModal(template) {
    const self = this;
    self.data.modal
      .addClass("is-open")
      .find(".popup-form__modal-content")
      .append(template);
    self.data.body.addClass("overflow-hidden");
    self.data.isOpened = true;
  }

  closeModal() {
    const self = this;
    try {
      self.data.modal
        .removeClass("is-open")
        .find(".popup-form__modal-content, .popup-form__modal-action")
        .empty();
      self.data.body.removeClass("overflow-hidden");
      self.data.isOpened = false;
      self.onClose(self);
    } catch (error) {
      logger.error(error);
    }
  }

  handleEvents() {
    const self = this;
    $("#popup-modal [data-close-popup]").on("click", function () {
      self.closeModal();
    });

    document.onkeydown = (evt) => {
      evt = evt || window.event;
      evt.keyCode === 27 ? self.closeModal() : false;
    };
  }
}
