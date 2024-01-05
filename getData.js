import fs from "fs";

export const getData = (fileName) => {
  let jsonData;
  try {
    const data = fs.readFileSync(`./data/${fileName}.json`, "utf8");
    jsonData = JSON.parse(data);
  } catch (err) {
    console.error(err);
  }

  return jsonData;
};
