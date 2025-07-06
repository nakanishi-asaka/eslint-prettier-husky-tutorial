// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
 rules: {
    // カスタムルール
       /*"no-console":["error"],
        "indent": ["error", 2],
        "quotes":["error","double"],
        "semi":["error","always"],
        "no-unused-vars":["warn"],
        "camelcase":["warn"],*/
        "linebreak-style":["off"]
          },
  extends:["airbnb-base"]
};
