module.exports = {
  env: {
    browser: false, 
    node: true,     
    es2021: true,   
    jest: true,    
  },
  extends: [
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest", 
    sourceType: "module", 
  },
  rules: {
    "no-console": "off",          
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "prefer-const": "warn",
    "eqeqeq": ["error", "always"],
    "curly": ["error", "all"],
    "semi": ["error", "always"],
  },
};
 