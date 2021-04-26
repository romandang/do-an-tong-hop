const _data = {
  email: "ke.chien@kyanon.digital",
  name: "ke.chien",
  activeReferral: "05/10",
  closestExpireDate: "27 Feb 2021",
  tokenCount: 10,
  deviceImei: "353418102346571",
  deviceModel: "SM-A750GZBVXSP",
  isFistLogin: true,
};

/**
 * @type {String}
 */
const data = window.__SSReferral || JSON.stringify(_data);
/**
 * @type {_data}
 */
export const getUserInfo = JSON.parse(data);
