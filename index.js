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

async function start() {
  answer = await getSelectSearchOption();

  if (answer === "1") {
    do {
      console.log("Select 1: Players or 2: Teams or 3: Nations");
      answer = await input("");
    } while (!selection.includes(+answer));
    const selectedTable = answer;
    const mainData =
      answer === "1" ? players : answer === "2" ? teams : nations;
    let keys = Object.keys(mainData[0]);
    console.log("Enter search term:");
    answer = await input("");
    const searchTerm = answer;
    if (!keys.includes(answer)) {
      console.log("Search term does not exist");
      process.exit();
    }
    console.log("Enter search value:");
    answer = await input("");
    const isExist = mainData.filter((item) => {
      if (/^\d+$/.test(item[searchTerm].toString())) {
        return +item[searchTerm] === +answer;
      } else {
        return item[searchTerm] === answer;
      }
    });
    if (isExist.length === 0) {
      console.log("Search value does not exist");
      process.exit();
    }
    let res = {};
    if (selectedTable === "1") {
      res = [...isExist];
      res = res.map((item) => {
        const nation = nations.find((n) => n._id === item.nation_id);
        const team = teams.find((t) => t._id === item.team_id);
        if (nation) {
          item = { ...item, nation_name: nation.name };
        }
        if (team) {
          item = { ...item, team_name: team.name };
        }
        return item;
      });
    }

    if (selectedTable === "2") {
      res = [...isExist];
      res = res.map((item) => {
        const nation = nations.find((n) => n._id === item.nation_id);
        const player = players.filter((p) => p.team_id === item._id);
        if (nation) {
          item = { ...item, nation_name: nation.name };
        }
        if (player.length) {
          item = { ...item, players: [...player.map((p) => p.name)] };
        }
        return item;
      });
    }

    if (selectedTable === "3") {
      res = [...isExist];
      res = res.map((item) => {
        const team = teams.filter((t) => t.nation_id === item._id);
        const player = players.filter((p) => p.nation_id === item._id);
        if (team) {
          item = { ...item, team_name: [...team.map((t) => t.name)] };
        }
        if (player.length) {
          item = { ...item, players: [...player.map((p) => p.name)] };
        }
        return item;
      });
    }

    console.log("=> Result:");
    console.log(res);

    setTimeout(() => {
      console.log();
      console.log();
      start();
    }, 1000);
  }

  if (answer === "2") {
    answer = "";
    do {
      console.log("Select 1: Players or 2: Teams or 3: Nations");
      answer = await input("");
    } while (!selection.includes(+answer));
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
    // process.exit();

    setTimeout(() => {
      console.log();
      console.log();
      start();
    }, 1000);
  }
}
start();
