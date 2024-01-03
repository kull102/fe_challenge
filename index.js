import { input } from "./terminal.js";
import { getSelectSearchOption } from "./getSelectSearchOption.js";
import { checkDataExit } from "./checkDataExist.js";

import { files, selection } from "./constants.js";
import { getKeys } from "./getKeys.js";
let answer = "";

do {
  console.log("Type 'quit' to exit at any time. Press 'Enter' to continue");
  answer = await input("");
} while (answer.trim() !== "" && answer.trim() !== "quit");
if (answer === "quit") {
  process.exit();
}

answer = await getSelectSearchOption();

if (answer === "2") {
  answer = "";
  do {
    console.log("Select 1: Players or 2: Teams or 3: Nations");
    answer = await input("");
  } while (!selection.includes(+answer));
  checkDataExit(+answer);
  const keys = getKeys(files[+answer]);
  console.log("🚀 ~ file: index.js:29 ~ keys:", keys);
}
