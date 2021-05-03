export const isEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /^[a-zA-Z0-9]+(?:(\.|\_|\-)[a-zA-Z0-9]+){0,3}@[A-Z0-9.-]+\.[A-Z]{2,7}$/gi;
  return regex.test(email);
};

export function email(value) {
  if (!isEmpty(value) && !isEmail(value)) {
    return "_error.email";
  }
  return true;
}

export const isEmpty = (value) => {
  return value === undefined || value === null || value === "";
};

export function noSpecialChars(value) {
  if (!isEmpty(value) && !/^[a-zA-Z0-9 ]*$/.test(value))
    return `_error.noSpecialChars`;
  return true;
}

export function noVnChars(value) {
  // eslint-disable-next-line no-control-regex
  if (!isEmpty(value) && !/^[\u0000-\u007F ]*$/.test(value))
    return `_error.noVnChars`;
  return true;
}

export function noIntegerChars(value) {
  if (!isEmpty(value) && !/^[a-zA-Z ]*$/.test(value))
    return `_error.noIntegerChars`;
  return true;
}

export function required(value) {
  if (
    (typeof value === typeof true && !value) ||
    isEmpty(value) ||
    value === "&nbsp;"
  )
    return `_error.required`;
  return true;
}

export function integer(value) {
  if (!Number.isInteger(Number(value))) return `_error.integer`;
  return true;
}

export function fixLength(fix) {
  return (value) => {
    if (!isEmpty(value) && value.length !== fix) return `_error.fixLength`;
    return true;
  };
}

export function phone(value) {
  if (!/[0-9]{8}/.test(value)) return `_error.phone`;
  return true;
}

/**
 *
 * @param {Number} min
 */
export function minLength(min) {
  return (value) => {
    if (!isEmpty(value) && value.length < min) return `_error.minLength`;
    return true;
  };
}

/**
 *
 * @param {Number} max
 */
export function maxLength(max) {
  return (value) => {
    if (!isEmpty(value) && value.length > max) return `_error.maxLength`;
    return true;
  };
}

export function match(field) {
  return (value, currentField, data) => {
    if (data) {
      if (value !== data[field]) return `_error.match`;
    }
    return true;
  };
}

export function password(value) {
  if (
    !isEmpty(value) &&
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/.test(value)
  ) {
    return `_error.password`;
  }
  return true;
}

export function isValidBirthDate(dateString) {
  let parts = dateString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (day === 0 && month === 0 && year === 0) return null;
  else if (!(day === 0) && !(month === 0) && !(year === 0)) {
    const currentDate = new Date();
    if (year > currentDate.getFullYear()) return "_error.birthDate";

    if (
      year === currentDate.getFullYear() &&
      month > currentDate.getMonth() + 1
    ) {
      return "_error.birthDate";
    }
    if (
      year === currentDate.getFullYear() &&
      month >= currentDate.getMonth() + 1 &&
      day > currentDate.getDate()
    ) {
      return "_error.birthDate";
    }
  } else {
    return "_error.birthDate";
  }
  return true;
}
/**
 *
 * @param {Array<String>} fileExtensions
 */
export function allowedFileExtensions(fileExtensions) {
  return (files) => {
    if (!isValidFileExtension(files, fileExtensions)) {
      return "_error.allowFileExtensions";
    }
    return true;
  };
}

/**
 *
 * @param {Array} files
 * @param {Array<String>} allowedFileExtensions
 */
export function isValidFileExtension(files, allowedFileExtensions) {
  if (!files || !files.length) return true;

  const isFilesValidate = files.every(function (file) {
    const fileExt = file.name.split(".").pop().toLowerCase();
    return !allowedFileExtensions.includes(fileExt) ? false : true;
  });

  return isFilesValidate;
}

/**
 *
 * @param {Number} sizeInMB
 */
export function maxFileSize(sizeInMB) {
  return (files) => {
    if (isMaxFileSize(files, sizeInMB)) return "_error.moreThanMaxFileSize";
    return true;
  };
}

export function isMaxFileSize(files, sizeInMB) {
  if (!files || !files.length) return true;

  const isFilesValidate = files.every(function (file) {
    const maxSizeInBytes = sizeInMB * 1000000;
    return file.size > maxSizeInBytes ? true : false;
  });

  return isFilesValidate;
}
