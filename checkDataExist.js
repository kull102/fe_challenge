import fs from "fs";
// import nations from "./data/nations.json";
// import players from "./data/players.json";
// import teams from "./data/teams.json";
import { files } from "./constants.js";
export const checkDataExit = (selected) => {
  if (!fs.existsSync(`./data/${files[selected]}`)) {
    console.log("Data does not exist");
    process.exit();
  }
};
