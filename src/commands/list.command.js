import fs from "fs";
import path from "path";
import chalk from "chalk";

import * as storage from "../utils/storage.util.js";

export const listEspenses = () => {
  const expenses = storage.readStorage();
  if (expenses.length === 0) {
    console.log(chalk.yellow("Nessuna spesa trovata."));
    return;
  }

  console.log(chalk.green("Elenco delle spese:"));
  expenses.forEach((expense) => {
    console.log(
      `${chalk.cyan("ID")}: ${chalk.yellow(expense.id)}` +
        ` ${chalk.whiteBright("Descrizione")}: ${chalk.white(
          expense.description,
        )}` +
        ` ${chalk.greenBright("Importo")}: ${chalk.green(
          `€${expense.amount.toFixed(2)}`,
        )}` +
        ` ${chalk.magenta("Data")}: ${chalk.gray(expense.date)}`,
    );
  });
};
