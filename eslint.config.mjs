import globals from "globals";
import pluginJs from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginJest from "eslint-plugin-jest";
import packageJson from "eslint-plugin-package-json";
// import pluginJestExtended from "eslint-plugin-jest-extended";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    extends: [
      pluginJest.configs["flat/recommended"],
      pluginJest.configs["flat/style"],
      // pluginJestExtended.configs["flat/all"],
    ],
    files: ["**/*.spec.js", "**/*.test.js"],
    plugins: {
      jest: pluginJest,
      // jestExtended: pluginJestExtended,
    },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      "jest/padding-around-all": "error",
    },
  },
  {
    extends: [packageJson.configs.stylistic],
    files: ["package.json"],
  },
  eslintConfigPrettier,
]);
