import { input } from "./terminal.js";
import { getSelectSearchOption } from "./getSelectSearchOption.js";
import { checkDataExit } from "./checkDataExist.js";

import { files, selection } from "./constants.js";
import { getData } from "./getData.js";

const players = getData(files[1]);
const teams = getData(files[2]);
const nations = getData(files[3]);
let answer = "";

do {
  console.log("Type 'quit' to exit at any time. Press 'Enter' to continue");
  answer = await input("");
} while (answer.trim() !== "" && answer.trim() !== "quit");
if (answer === "quit") {
  process.exit();
}

answer = await getSelectSearchOption();

if (answer === "1") {
  do {
    console.log("Select 1: Players or 2: Teams or 3: Nations");
    answer = await input("");
  } while (!selection.includes(+answer));

  let keys = Object.keys(
    answer === "1" ? players[0] : answer === "2" ? teams[0] : nations[0]
  );
  do {
    console.log("Enter search term:");
    answer = await input("");
  } while (!keys.includes(answer));
}

if (answer === "2") {
  answer = "";
  do {
    console.log("Select 1: Players or 2: Teams or 3: Nations");
    answer = await input("");
  } while (!selection.includes(+answer));
  checkDataExit(+answer);
  const keys = Object.keys(
    answer === "1" ? players[0] : answer === "2" ? teams[0] : nations[0]
  );
  console.log("=> Result:");
  console.log(
    `Search ${
      answer === "1" ? "Players" : answer === "2" ? "Teams" : "Nations"
    } with`
  );
  keys.forEach((key) => console.log(key));
}
