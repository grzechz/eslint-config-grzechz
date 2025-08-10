import tslint from "typescript-eslint";
import config from "./index.mjs";

export default tslint.config(config, {
  rules: {
    "import-x/no-default-export": "off",
  },
});
