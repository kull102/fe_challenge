import fs from "fs";

export const getKeys = (fileName) => {
  let jsonData;
  try {
    const data = fs.readFileSync(`./data/${fileName}`, "utf8");
    jsonData = JSON.parse(data);
    
  } catch (err) {
    console.error(err);
  }

  return Object.keys(jsonData[0]);
};
