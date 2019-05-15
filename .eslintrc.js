module.exports = {
  env:{
    es6: true,
    node: true
  },
  "parserOptions": { "ecmaVersion": 6 },
  extends: ["eslint:recommended", "plugin:node/recommended", "plugin:prettier/recommended"],
  "rules": {
    "prettier/prettier": "error"
  }
}
