export const isEmpty = (value) =>
  value === undefined || value === null || value === "";

export const isObject = (obj) =>
  obj !== undefined &&
  obj !== null &&
  Object.keys(obj).length > 0 &&
  obj.constructor === Object;
export const isEmptyObj = (obj) =>
  obj === undefined ||
  obj === null ||
  (Object.keys(obj).length === 0 && obj.constructor === Object);

/**
 *
 * @param {Array} arr
 */
export const isArray = (arr) => arr && arr.length && Array.isArray(arr);

export function noSpecialChars(value) {
  if (!isEmpty(value) && !/^[a-zA-Z0-9 ]*$/.test(value))
    return `Please don't use any special characters.`;
  return true;
}
export function noIntegerChars(value) {
  if (!isEmpty(value) && !/^[a-zA-Z ]*$/.test(value))
    return `Please don't use any number characters.`;
  return true;
}

export function required(value, fieldName) {
  if (typeof value === typeof true && !value) return `${fieldName} is required`;
  if (isEmpty(value)) return `${fieldName} is required`;
  return true;
}
/**
 *
 * @param {JQuery} input
 * @param {String} fieldName
 */
export function requiredChecked(input, fieldName) {
  if (!input.is(":checked")) return `${fieldName} is required`;
  return true;
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) return `Please fill in number`;
  return true;
}
export function fixLength(fix) {
  return (value) => {
    if (!isEmpty(value) && value.length !== fix)
      return `Must be fix ${fix} characters`;
    return true;
  };
}
export function hasPrefix(value) {
  if (!/\+65/.test(value)) return `+65${value}`;
  return value;
}
export function phone(value) {
  if (!/^[0-9]{8,8}$/.test(value)) return `The phone is invalid`;
  return true;
}

export function minLength(min) {
  return (value) => {
    if (!isEmpty(value) && value.length < min)
      return `Must be at least ${min} characters`;
    return true;
  };
}

export function maxLength(max) {
  return (value) => {
    if (!isEmpty(value) && value.length > max)
      return `Must be no more than ${max} characters`;
    return true;
  };
}

export function email(value) {
  // eslint-disable-next-line no-useless-escape
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!isEmpty(value) && !regexEmail.test(value))
    return `Please enter a valid Email adress`;
  return true;
}
