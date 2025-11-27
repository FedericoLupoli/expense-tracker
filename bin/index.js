#!/usr/bin/env node

import { program } from "commander";

import { addExpense } from "../src/commands/add.command.js";
import { listEspenses } from "../src/commands/list.command.js";
import { deleteCommand } from "../src/commands/delete.command.js";

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

program
  .command("delete")
  .description("Delete an expense by ID")
  .requiredOption("-i, --id <id>", "ID of the expense to delete")
  .action((options) => {
    const { id } = options;
    deleteCommand(parseInt(id, 10));
  });

program.parse(program.argv);
