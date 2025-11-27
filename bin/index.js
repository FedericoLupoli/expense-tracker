#!/usr/bin/env node

import { program } from "commander";

import { addExpense } from "../src/commands/add.command.js";
import { listEspenses } from "../src/commands/list.command.js";

program
  .name("expense-tracker")
  .description("A simple expense tracker CLI application")
  .version("1.0.0");

program
  .command("add")
  .description("Add a new expense")
  .requiredOption(
    "-d, --description <description>",
    "Description of the expense",
  )
  .requiredOption("-a, --amount <amount>", "Amount of the expense")
  .action((options) => {
    const { description, amount } = options;
    addExpense(description, amount);
  });

program
  .command("list")
  .description("List all expenses")
  .action(() => {
    listEspenses();
  });

program.parse(program.argv);
