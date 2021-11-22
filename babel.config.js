module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
            targets: { node: "current" },
          },
        ],
      ],
    },
  },
  plugins: [],
  presets: [
    ["@babel/preset-env", { modules: false, targets: { node: "current" } }],
    [
      "@babel/preset-typescript",
      {
        onlyRemoveTypeImports: true,
      },
    ],
  ],
};
