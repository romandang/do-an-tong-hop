const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const pagesDir = "./src/app/pages/";

const listItems = fs.readdirSync(path.resolve(__dirname, pagesDir));

const routers = {};
listItems.forEach((item) => {
  if (fs.lstatSync(path.resolve(__dirname, pagesDir, item)).isDirectory()) {
    let route;
    if (process.env.NODE_ENV === "development") route = `${item}.html`;
    else if (item.toLowerCase() === "index") route = "";
    else {
      route = item
        .split("__")
        .map((key) => _.kebabCase(key))
        .join("/");
    }
    routers[_.camelCase(item)] = "/" + route;
  }
});
try {
  const content = `export const routers = ${JSON.stringify(routers)}`;
  if (fs.existsSync("./src/router.js")) {
    fs.unlinkSync("./src/router.js", function (err) {
      if (err) throw err;
      console.log("File deleted!");
    });
  }
  fs.appendFile("./src/router.js", content, function (err) {
    if (err) throw err;
    console.log("Created router!");
  });
} catch (error) {
  console.log(error);
}
