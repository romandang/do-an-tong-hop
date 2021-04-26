import "./index.scss";

export class PopupModal {
  constructor() {
    this.data = {
      body: document.querySelector("body"),
      modal: document.querySelector(".popup-msg__modal"),
      closeButton: document.querySelector(
        ".popup-msg__modal .icon-button.close-button"
      ),
      isOpened: false,
      openModal: () => {},
      closeModal: () => {},
    };
  }

  init() {
    this.handleEvents();
  }

  handleEvents() {
    const self = this;
    self.data.openModal = () => {
      self.data.modal.classList.add("is-open"),
      (self.data.body.style.overflow = "hidden"),
      (self.data.body.style.overflowY = "hidden"),
      (self.data.isOpened = true);
    };

    self.data.closeModal = () => {
      self.data.modal.classList.remove("is-open"),
      (self.data.body.style.overflowY = "auto"),
      (self.data.isOpened = false);
    };

    self.data.closeButton.addEventListener("click", () => {
      self.data.closeModal();
    });

    document.onkeydown = (evt) => {
      evt = evt || window.event;
      evt.keyCode === 27 ? self.data.closeModal() : false;
    };
  }
}

export default PopupModal;
