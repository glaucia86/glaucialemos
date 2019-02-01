module.exports = {
  extends: "airbnb-base",
  globals: {
    $: true,
    window: true,
    document: true
  },
  plugins: ["import", "html"],
  rules: {
    "no-console": "off",
    "import/newline-after-import": "off",
    "global-require": "off",
    "no-undef": "off",
    "import/no-unresolved": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "no-multi-assign": "off",
    "import/no-dynamic-require": "off",
    "prefer-destructuring": "off",
    "no-alert": "off",
    "func-names": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      }
    ],
    "eslint-disable-next-line": 0,
    "no-restricted-syntax": 0,
    "no-prototype-builtins": 0,
    "no-unused-vars": 0,
    "max-len": 0
  }
};
