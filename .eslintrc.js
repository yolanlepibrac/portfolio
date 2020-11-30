module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:sonarjs/recommended",
    "plugin:react/recommended",
  ],
  plugins: ["import", "react-hooks"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "react/prop-types": "off",
    "import/no-cycle": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "error",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "error",
    "eslint(react/display-name)": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "method",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "parameterProperty",
        modifiers: ["private"],
        format: ["camelCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: "enumMember",
        format: ["PascalCase", "UPPER_CASE"],
      },
    ],

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-function": "error",
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    curly: "error",
    "one-var": ["error", "never"],
    eqeqeq: "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "no-public",
          methods: "off",
          properties: "off",
          parameterProperties: "explicit",
        },
      },
    ],
    "sonarjs/no-duplicate-string": "error",
    "sonarjs/cognitive-complexity": "warn",
    "sonarjs/prefer-immediate-return": "error",
    "sonarjs/no-identical-expressions": "error",
    "sonarjs/no-collapsible-if": "error",
    "sonarjs/no-duplicated-branches": "error",
    "sonarjs/no-small-switch": "error",
    "sonarjs/no-identical-functions": "error",
    "sonarjs/no-redundant-jump": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
