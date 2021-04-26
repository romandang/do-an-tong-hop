/* eslint-disable no-console */
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const cheerio = require("cheerio");

const pagesDir = "./src/app/pages/";

const defaultParams = {
  tmpOutput: `./build-fe`,
  beforeTasks: [
    /**
     *
     */
    (context) => {
      console.log(context);
    },
  ],
};
console.log(defaultParams);

const replaceData = (data, item) => {
  // data = data.replace(/&apos;/g, '"');
  data = data.replace(/\.\.\/\.\.\/\.\.\/\.\.\/assets\/images\//g, `/images/`);
  data = data.replace(/\.\.\/\.\.\/\.\.\/assets\/images\//g, `/images/`);
  data = data.replace(
    `<link href="./css/${item}.css" rel="stylesheet">`,
    `<link href="/css/${item}.css" type="text/css" rel="stylesheet">`
  );
  data = data.replace(
    `<script type="text/javascript" src="./js/${item}.js">`,
    `<script type="text/javascript" src="/js/${item}.js">`
  );
  return data;
};
const deleteFolderRecursive = function (dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
};

/**
 *
 * @param {defaultParams} data
 */
function subProcess(data) {
  const { tmpOutput, renderOutput } = data;

  const listItems = fs.readdirSync(path.resolve(__dirname, pagesDir));

  deleteFolderRecursive(tmpOutput);
  if (!fs.existsSync(path.resolve(__dirname, `${tmpOutput}`))) {
    fs.mkdir(path.resolve(__dirname, `${tmpOutput}`), function (err) {
      if (err) throw err;
    });
  }

  listItems.forEach((item) => {
    if (fs.lstatSync(path.resolve(__dirname, pagesDir, item)).isDirectory()) {
      let file = path.join(__dirname, `./build/${item}.html`);
      let tmpPath = path.join(
        __dirname,
        `${tmpOutput}/html/${item}/index.html`
      );
      let bodyCopy = path.join(
        __dirname,
        `${tmpOutput}/html/${item}/bodyCopy.html`
      );
      let headCopy = path.join(
        __dirname,
        `${tmpOutput}/html/${item}/headCopy.html`
      );
      // deleteFolderRecursive(`${output.html}/${item}`);

      if (!fs.existsSync(path.resolve(__dirname, `${tmpOutput}/html`))) {
        fs.mkdir(path.resolve(__dirname, `${tmpOutput}/html`), function (err) {
          if (err) throw err;
        });
      }

      if (
        !fs.existsSync(path.resolve(__dirname, `${tmpOutput}/html/${item}`))
      ) {
        fs.mkdir(
          path.resolve(__dirname, `${tmpOutput}/html/${item}`),
          function (err) {
            if (err) throw err;
          }
        );
      }

      let data = fs.readFileSync(file, "utf-8");

      const $ = cheerio.load(data);
      data = replaceData(data, item);
      const bodyData = replaceData($("body").html(), item);
      fs.writeFileSync(file, data, "utf-8");

      // * async
      fs.writeFileSync(bodyCopy, bodyData, "utf-8");
      fse.moveSync(file, tmpPath, { overwrite: true });

      const headData = replaceData($("head").html(), item);
      fs.writeFileSync(headCopy, headData, "utf-8");
    }
  });
  fse.copy(
    path.resolve(__dirname, `./build/fonts`),
    path.resolve(__dirname, `${tmpOutput}/fonts`),
    { overwrite: true },
    (err) => {
      if (err) return console.error(err);
      console.log("copy fonts to tmp folder. !");
    }
  );
  fse.copy(
    path.resolve(__dirname, `./build/css`),
    path.resolve(__dirname, `${tmpOutput}/css`),
    { overwrite: true },
    (err) => {
      if (err) return console.error(err);
      console.log("copy css to tmp folder. !");
    }
  );
  fse.copy(
    path.resolve(__dirname, `./build/js`),
    path.resolve(__dirname, `${tmpOutput}/js`),
    { overwrite: true },
    (err) => {
      if (err) return console.error(err);
      console.log("copy js to tmp folder. !");
    }
  );
  fse.copy(
    path.resolve(__dirname, `./build/images`),
    path.resolve(__dirname, `${tmpOutput}/images`),
    { overwrite: true },
    (err) => {
      if (err) return console.error(err);
      console.log("copy images to tmp folder. !");
    }
  );

  if (renderOutput) {
    fse.copy(
      path.resolve(__dirname, `./${tmpOutput}/html`),
      path.resolve(__dirname, `${renderOutput}/html`),
      { overwrite: true },
      (err) => {
        if (err) return console.error(err);
        console.log(`move html from build to wwwroot success!`);
      }
    );
    fse.copy(
      path.resolve(__dirname, `./build/js`),
      path.resolve(__dirname, `${renderOutput}/js`),
      { overwrite: true },
      (err) => {
        if (err) return console.error(err);
        console.log(`move js from build to wwwroot success!`);
      }
    );
    fse.copy(
      path.resolve(__dirname, `./build/fonts`),
      path.resolve(__dirname, `${renderOutput}/fonts`),
      { overwrite: true },
      (err) => {
        if (err) return console.error(err);
        console.log(`move css from build to wwwroot success!`);
      }
    );
    fse.copy(
      path.resolve(__dirname, `./build/css`),
      path.resolve(__dirname, `${renderOutput}/css`),
      { overwrite: true },
      (err) => {
        if (err) return console.error(err);
        console.log(`move css from build to wwwroot success!`);
      }
    );
    fse.copy(
      path.resolve(__dirname, `./build/images`),
      path.resolve(__dirname, `${renderOutput}/images`),
      { overwrite: true },
      (err) => {
        if (err) return console.error(err);
        console.log(`move images from build to wwwroot success!`);
      }
    );
  }
}

module.exports = {
  subProcess,
};
