import { input } from "./terminal.js";
export const getSelectSearchOption = async () => {
  let selectedOption = "";
  do {
    console.log("Select search options:");
    console.log("  - Press 1 to search");
    console.log("  - Press 2 to view a list of searchable fields");
    console.log("  - Type 'quit' to exit");

    selectedOption = await input("");
  } while (
    selectedOption.trim() !== "1" &&
    selectedOption.trim() !== "2" &&
    selectedOption.trim() !== "quit"
  );

  if (selectedOption === "quit") {
    process.exit();
  }

  return selectedOption;
};
