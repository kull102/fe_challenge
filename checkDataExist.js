import fs from "fs";

import { files } from "./constants.js";
export const checkDataExit = (selected) => {
  if (!fs.existsSync(`./data/${files[selected]}.json`)) {
    console.log("Data does not exist");
    process.exit();
  }
};
