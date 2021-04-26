import Axios from "axios";
import config from "./../../../../config";
import NProgress from "nprogress";
import $ from "jquery";
import cookieAccess from "./../../../helpers/cookie";
import logger from "../../../helpers/logger";

NProgress.configure({
  easing: "ease",
  showSpinner: false,
  minimum: 0.86,
});

const _http = Axios.create({
  baseURL: config.SUBMIT_API,
  headers: {
    "Content-type": "application/json",
  },
});

_http.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

_http.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    if (error.response) {
      const { data, status, headers } = error.response;
      logger.log({ data, status, headers });
      return Promise.reject(error.response);
    } else if (error.request) {
      logger.log(error.request);
    } else {
      logger.log("Error", error.message);
    }
    return Promise.reject(error);
  }
);

const _ajaxJson = (settings = {}, tokenCookieName = "Abp.AuthToken") => {
  const token = cookieAccess.getCookie(tokenCookieName);
  NProgress.start();
  return new Promise(function (resolve) {
    const _settings = $.extend(
      true,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        success(response) {
          NProgress.done();
          resolve(response);
        },
        error(response) {
          NProgress.done();
          let redirect =
            config.NODE_ENV === "development" ? "/login.html" : "/login";
          if (response.status === 401) window.location.href = redirect;
          resolve(response.responseJSON);
        },
      },
      settings
    );

    $.ajax(_settings).done(function () {
      NProgress.done();
    });
  });
};

export const ajaxJson = async (settings = {}) => await _ajaxJson(settings);
export const http = _http;
