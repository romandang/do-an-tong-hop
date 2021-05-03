import $ from "jquery";
import "./index.scss";
import config from "./../../../config";

const shuffleRetailers = () => {
  function shuffle(input) {
    for (var i = input.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var itemAtIndex = input[randomIndex];

      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }

  var retailerList = [
    {
      data: "",
      url: "",
      img: "nguyen-kim.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "viettel-store.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "hoang-ha-mobile.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "dien-may-cho-lon.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "the-gioi-di-dong.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "fpt-shop.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "cellphone-s.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "mainguyen.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "phuong-tung.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "didongviet.png?$ORIGIN_PNG$",
    },
    {
      data: "",
      url: "",
      img: "hnam-mobile.png?$ORIGIN_PNG$",
    },
  ];

  var ssStore = [
    {
      data: "buy online:SShop|;SM-G885F/DS",
      url: "https://shop.samsung.com/vn/dien-thoai",
      img: "samsung-blue.png?$ORIGIN_PNG$",
    },
    {
      data: "buy online:SShop|;SM-G885F/DS",
      url: "https://shop.samsung.com/vn/dien-thoai",
      img: "samsung-white.png?$ORIGIN_PNG$",
    },
  ];

  var shuffledArr = shuffle(retailerList);
  shuffledArr = ssStore.concat(shuffledArr);
  $(".retailers-list").empty();

  var BASE_URL = config.IMAGE_PATH_RETAILER;

  shuffledArr.forEach(function (e) {
    var $tmpRetailer = $($("#tmpRetailer").html().trim());
    $tmpRetailer.find("a").attr("href", e.url);
    $tmpRetailer.find("a").attr("data-omni", e.data);
    $tmpRetailer.find("a").attr("onclick", e.func);
    $tmpRetailer.find("img").attr("src", BASE_URL + e.img);
    $(".retailers-list").append($tmpRetailer);
  });
};

export { shuffleRetailers };
