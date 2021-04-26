module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "usage",
        corejs: 2,
      },
    ],
  ];
  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 2,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ];
  return {
    presets,
    plugins,
  };
};
