import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { name } = require("./package.json");

export default {
  displayName: name,
  name,
};
