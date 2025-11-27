import fs from "fs";
import path from "path";
import chalk from "chalk";

import messages from "../utils/messages.json" with { type: "json" };

import * as storage from "../utils/storage.util.js";

export const listEspenses = () => {
  const expenses = storage.readStorage();
  if (expenses.length === 0) {
    console.log(chalk.yellow(`${messages.Error.NoExpenses}`));
    return;
  }

  console.log(chalk.green(messages.Info.ExpensesList));
  expenses.forEach((expense) => {
    console.log(
      `${chalk.cyan(messages.Info.ID)}: ${chalk.yellow(expense.id)}` +
        ` ${chalk.whiteBright(messages.Info.Description)}: ${chalk.white(
          expense.description,
        )}` +
        ` ${chalk.greenBright(messages.Info.Amount)}: ${chalk.green(
          `€${expense.amount.toFixed(2)}`,
        )}` +
        ` ${chalk.magenta(messages.Info.Date)}: ${chalk.gray(expense.date)}`,
    );
  });
};
