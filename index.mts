import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import pluginImportX from "eslint-plugin-import-x"
import pluginJest from "eslint-plugin-jest"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginPrettierConfig from "eslint-plugin-prettier/recommended"

export default tseslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
    },
    extends: [js.configs.recommended],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginJsxA11y.flatConfigs.recommended,
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.errors,
  pluginImportX.flatConfigs.typescript,
  pluginImportX.flatConfigs.react,
  pluginReactHooks.configs["recommended-latest"],
  pluginPrettierConfig,
  {
    rules: {
      "array-callback-return": "error",
      "default-case": "error",
      "dot-location": "off",
      eqeqeq: ["error", "always"],
      "new-parens": "error",
      "no-array-constructor": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-control-regex": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-eval": "error",
      "no-ex-assign": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-label": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-implied-eval": "error",
      "no-invalid-regexp": "error",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": ["error", { allowLoop: true, allowSwitch: false }],
      "no-lone-blocks": "error",
      "no-loop-func": "error",
      "no-mixed-operators": [
        "error",
        {
          groups: [
            ["&", "|", "^", "~", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"],
          ],
          allowSamePrecedence: false,
        },
      ],
      "no-multi-str": "error",
      "no-global-assign": "error",
      "no-unsafe-negation": "error",
      "no-new-func": "error",
      "no-new-object": "error",
      "no-new-symbol": "error",
      "no-new-wrappers": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-script-url": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-throw-literal": "error",
      "no-undef": "off",
      "no-unreachable": "error",
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "no-unused-labels": "error",
      "no-unused-vars": [
        "error",
        {
          args: "none",
          ignoreRestSiblings: true,
        },
      ],
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: false,
          variables: true,
          typedefs: false,
        },
      ],
      "no-useless-computed-key": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      "no-with": "error",
      "no-whitespace-before-property": "error",
      "react-hooks/exhaustive-deps": "error",
      "require-yield": "error",
      "rest-spread-spacing": ["error", "never"],
      strict: ["error", "never"],
      "unicode-bom": ["error", "never"],
      "use-isnan": "error",
      "valid-typeof": "error",
      "no-restricted-properties": [
        "error",
        {
          object: "require",
          property: "ensure",
          message:
            "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
        },
        {
          object: "System",
          property: "import",
          message:
            "Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting",
        },
      ],
      "getter-return": "error",

      "import-x/first": "error",
      "import-x/no-amd": "error",
      "import-x/no-anonymous-default-export": "error",
      "import-x/no-webpack-loader-syntax": "error",

      "react/forbid-foreign-prop-types": ["error", { allowInPropTypes: true }],
      "react/jsx-no-comment-textnodes": "error",
      "react/jsx-no-duplicate-props": "error",
      "react/jsx-no-target-blank": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-pascal-case": [
        "error",
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],
      "react/no-danger-with-children": "error",
      "react/no-direct-mutation-state": "error",
      "react/no-is-mounted": "error",
      "react/no-typos": "error",
      "react/require-render-return": "error",
      "react/style-prop-object": "error",

      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          aspects: ["noHref", "invalidHref"],
        },
      ],
      "jsx-a11y/aria-activedescendant-has-tabindex": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": ["error", { ignoreNonDOM: true }],
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",

      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": "off",
      "react/prefer-read-only-props": "off",
      "react/jsx-indent": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-no-literals": "off",
      "react/no-array-index-key": "off",
      "react/jsx-no-bind": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
        },
      ],
      "@typescript-eslint/no-var-requires": "off",
      "import-x/no-cycle": [
        "error",
        {
          maxDepth: 5,
        },
      ],
      "import-x/no-default-export": "error",
      "import-x/no-self-import": "error",
      "import-x/no-unresolved": "off",
      "no-console": "error",
      "no-warning-comments": [
        "error",
        { terms: ["todo", "fixme", "TODO", "FIXME"], location: "anywhere" },
      ],
      "prettier/prettier": "error",
      "react/display-name": "error",
      semi: ["error", "always"],
      "no-useless-concat": "off",
      "prefer-arrow-callback": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionDeclaration",
          message:
            "Function declarations are not allowed. Use arrow functions instead.",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: false,
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    rules: {
      "default-case": "off",
      "no-dupe-class-members": "off",
      "no-undef": "off",

      "@typescript-eslint/consistent-type-assertions": "warn",
      "no-array-constructor": "off",
      "@typescript-eslint/no-array-constructor": "warn",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "warn",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": [
        "warn",
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "warn",
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx", "**/*.test.mts", "**/*.test.cts"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: pluginJest.configs["flat/all"].rules,
  }
)
