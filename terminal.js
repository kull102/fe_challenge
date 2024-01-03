import util from "node:util";
import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const input = util.promisify(rl.question).bind(rl);
