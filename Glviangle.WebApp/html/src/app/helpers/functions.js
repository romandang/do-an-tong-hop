import $ from "jquery";
import logger from "./logger";

// Full Frame
var setupFullHeightSection = function () {
  let _wh = window.innerHeight;
  let _height = _wh - 64;
  $.each($(".full-vh"), function (i, e) {
    if (window.innerWidth < 992) {
      $(e).attr("style", "");
    } else {
      $(e).css("height", _height);
    }
  });
};
/**
 *
 * @param {JQuery} header
 */
function btnScroll(header) {
  $(document).on("click", "[data-scroll]", function (e) {
    var $target = $($(this).attr("data-scroll"));
    logger.log($target);
    e.preventDefault();
    let top;
    if (header) {
      var $header = $(header);
      top = $target.offset().top - $header.height();
      if (!$header.hasClass("fixed")) {
        top = top - $header.height();
      }
    } else {
      top = $target.offset().top;
    }
    $("html, body").animate(
      {
        scrollTop: top,
      },
      500
    );
  });
}

// menu scroll
function scrollMenu() {
  $(window).bind("scroll", () => {
    var $header = $(".ss-header");
    var $headerCms = $("#header");
    $(window).scrollTop() > $headerCms.offset().top
      ? $header.addClass("fixed")
      : $header.removeClass("fixed");
  });
}

const changeImgSrcOnEventRezie = () => {
  $(window).on("resize", function () {
    $("img[data-src-dk],img[data-src-mb]").removeAttr("src");
    let ON_DISTANCE = $(this).width() < 992;
    $("img,video,source").each(function (i, el) {
      let src = $(el).attr(`data-src-${ON_DISTANCE ? "mb" : "dk"}`);
      if (!$(el).attr("src")) {
        try {
          if (
            src &&
            src.indexOf(".webp") &&
            $("#samsung.browser-safari").length
          ) {
            src = src.replace(".webp", ".jpg");
          }
        } catch (error) {
          logger.log(error);
        }
        $(el).attr("src", src);
      }
    });
  });
};

const showItemMb = (filterSelector) => {
  return new Promise(function (resolve) {
    let arrayImgLazy = [];
    let DISTANCE = $(window).width() < 992;
    if (DISTANCE) {
      $(".hide-sm").remove();
    } else {
      $(".hide-md").remove();
    }
    let selector = "img";
    if (filterSelector) {
      selector = "img" + filterSelector;
    }
    if ($(selector).length === 0) {
      resolve();
    }
    $(selector).each(function (i, el) {
      let src = $(el).attr(`data-src-${DISTANCE ? "mb" : "dk"}`);
      let src_allDevices = $(el).attr("data-src");
      if (
        !$(el).attr("src") ||
        $(el).attr("src") === "" ||
        $(el).attr("src") ===
          "https://www.samsung.com/etc/designs/smg/global/imgs/support-new/loading.gif"
      ) {
        let _src = src_allDevices ? src_allDevices : src;
        if (_src) {
          try {
            if (_src.indexOf(".webp") && $("#samsung.browser-safari").length) {
              _src = _src.replace(".webp", ".jpg");
            }
          } catch (error) {
            logger.log(error);
          }
          $(el).attr("src", _src);
          arrayImgLazy.push(_src);
        }
      }

      el.onload = function () {
        arrayImgLazy.pop();
        if (arrayImgLazy.length === 0) {
          resolve();
        }
      };
      el.onerror = function () {
        arrayImgLazy.pop();
        if (arrayImgLazy.length === 0) {
          resolve();
        }
      };
    });
  });
};

const showItemUseCss = (filterSelector) => {
  return new Promise(function (resolve) {
    let selector = "[data-lazy-bg]";
    if (filterSelector) {
      selector = "[data-lazy-bg]" + filterSelector;
    }
    if ($(selector).length === 0) {
      resolve();
    } else {
      $(selector).each(function (i, el) {
        $(el).attr("data-has-bgimage", true);
      });
      resolve();
    }
  });
};

const loadFirstContent = async (options) => {
  let defaultOpts = $.extend(
    true,
    {
      onLoadAll: () => {},
    },
    options
  );
  let win = $(window);
  let isFirst = 0;
  if (win.scrollTop() < 100) {
    await showItemUseCss("[data-is-firstload]");
    await showItemMb("[data-is-firstload]");
    win.scroll(function () {
      if (isFirst === 0) {
        showItemMb().then(function () {
          if (defaultOpts.onLoadAll) {
            defaultOpts.onLoadAll();
          }
        });
        showItemUseCss();
      }
      isFirst = 1;
    });
  } else {
    await showItemUseCss();
    await showItemMb();
    if (defaultOpts.onLoadAll) {
      defaultOpts.onLoadAll();
    }
  }
  changeImgSrcOnEventRezie();
};

function lazyLoadImage() {
  // duyệt tất cả tấm ảnh cần lazy-load
  const lazyImages = document.querySelectorAll("[lazy]");
  logger.log(lazyImages);
  // chờ các tấm ảnh này xuất hiện trên màn hình
  const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // tấm ảnh này đã xuất hiện trên màn hình
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        const src = lazyImage.dataset.src;

        lazyImage.tagName.toLowerCase() === "img"
          ? (lazyImage.src = src)
          : (lazyImage.style.backgroundImage = "url('" + src + "')");

        // copy xong rồi thì bỏ attribute lazy đi
        lazyImage.removeAttribute("lazy");

        // job done, không cần observe nó nữa
        observer.unobserve(lazyImage);
      }
    });
  });

  // Observe từng tấm ảnh và chờ nó xuất hiện trên màn hình
  lazyImages.forEach((lazyImage) => {
    lazyImageObserver.observe(lazyImage);
  });
}

function stickyInfo() {
  var stickEl = $(".sticky_more_info");
  stickEl.click(function () {
    var stickyContent = $(this)
      .parents("div.js-sticky")
      .find(".sticky_content");
    if (!stickyContent.length) {
      var _top = $(this).position().top;
      var _left = $(this).position().left;
      var stickyText = $(this).data("sticky");
      var toggleStick = $(
        '<div class="sticky_content"><span></span>' + stickyText + "</div>"
      );
      toggleStick.css({
        top: _top + 24 + "px",
      });
      toggleStick.find("span").css({
        left: _left,
        position: "absolute",
        top: "-5px",
        background: "#fff",
        "box-shadow": "-1px -1px 2px -1px #888",
        height: "10px",
        width: "11px",
        transform: "rotate(60deg) skewX(30deg)",
      });
      $(this).parents("div.js-sticky").append(toggleStick);
    } else {
      stickyContent.remove();
    }
  });
}

function copying(_textCoppy, cb) {
  try {
    const inputText = document.createElement("input");
    inputText.value = _textCoppy;
    document.body.appendChild(inputText);
    inputText.select();
    inputText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    inputText.remove();
    cb(_textCoppy);
  } catch (error) {
    logger.error(error);
  }
}
/**
 *
 * @param {Number} delay number seconds
 * @param {VoidFunction} cb
 */
function textCoppied(delay = 0, cb = (_textCoppy) => _textCoppy) {
  const coppyEl = $(".js-coppy_clipboard");
  let timeoutId = 0;

  coppyEl
    .find(".icon-copy")
    .on("click", function () {
      const _textCoppy = $(this)
        .parents(".js-coppy_clipboard")
        .find(".js-coppy-selected")
        .text()
        .trim();

      timeoutId = setTimeout(() => copying(_textCoppy, cb), delay);
    })
    .on("mouseup mouseleave touchend touchcancel", function () {
      clearTimeout(timeoutId);
    });
}

export {
  setupFullHeightSection,
  btnScroll,
  lazyLoadImage,
  scrollMenu,
  loadFirstContent,
  stickyInfo,
  textCoppied,
};
