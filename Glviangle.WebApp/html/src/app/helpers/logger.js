import config from "../../config";
let logger = {
  log: function () {},
  error: function () {},
};
if (config.IS_DEBUG) {
  logger = console;
}
window.logger = logger;
export default logger;
