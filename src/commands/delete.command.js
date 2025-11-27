import fs from "fs";
import path from "path";
import chalk from "chalk";

import * as storage from "../utils/storage.util.js";

export const deleteCommand = (id) => {
  const storageData = storage.readStorage();
  const index = storageData.findIndex((item) => item.id === id);

  if (index === -1) {
    console.log(chalk.red(`Error: No entry found with ID ${id}.`));
    return;
  }

  storageData.splice(index, 1);
  storage.writeStorage(storageData);
  console.log(chalk.green(`Success: Entry with ID ${id} has been deleted.`));
};
