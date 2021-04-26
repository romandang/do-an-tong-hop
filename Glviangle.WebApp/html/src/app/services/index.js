import config from "../../config";
import { Notification } from "../core/FormModule";
import { ajaxJson } from "../core/FormModule/HttpRequest";
import logger from "../helpers/logger";

const notice = new Notification({ container: "#samsung" });

const noticeServerError = (errorMsg = "Server Error") => {
  notice.push({
    message: errorMsg,
    status: notice.status.error,
    timeOut: 3000,
  });
};

/**
 *
 * @param {String} param
 * @returns {Promise<any>}
 */
export const HandelGetContentData = async (param) => {
  const setting = { url: config.SUBMIT_API + param };
  let result = [];
  try {
    const res = await ajaxJson(setting);
    if (res.success && res.result) result = res.result;
    else noticeServerError();
  } catch (error) {
    logger.log(error);
    noticeServerError();
  }
  return result;
};
