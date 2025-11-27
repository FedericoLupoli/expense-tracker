#!/usr/bin/env node

import { program } from "commander";

program
  .name("expense-tracker")
  .description("A simple expense tracker CLI application")
  .version("1.0.0");

program
  .command("test")
  .description("Run a test command")
  .action(() => {
    console.log("Test command executed");
  });

program.parse(program.argv);
