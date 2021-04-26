import startCase from "lodash/startCase";

export const languages = {
  _error: {
    email: () => "Please help input valid Email Address",
    noSpecialChars: () => "Please don't use any special characters.",
    noVnChars: () => "Please don't use any vietnamese characters.",
    noIntegerChars: () => "Please don't use any number characters.",
    required: (attr) => `${startCase(attr["data-field-name"])} is required`,
    integer: () => "Please fill in number",
    fixLength: (attr) => `Must be fix ${startCase(attr.fix)} characters`,
    phone: () => "The phone is invalid",
    birthDate: () => "Please help input valid Birth Date",
    minLength: (attr) => `Must be at least ${startCase(attr.min)} characters`,
    maxLength: (attr) =>
      `Must be no more than ${startCase(attr.max)} characters`,
    match: (attr) => `Do not match ${startCase(attr["data-field-name"])}`,
    password: () =>
      "Password consisting of at least 1 upper case, 1 lower case, 1 numeric, and 1 special character",
    allowFileExtensions: () => "Please help allowed file extensions (png, jpg)",
    moreThanMaxFileSize: (attr) => `${startCase(attr["data-field-name"])} file size exceeds ${attr.max}MB.`,
  },
};
