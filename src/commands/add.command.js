/*
 * @typedef {Object} Expense
 * @property {number} id - ID univoco della spesa
 * @property {string} description - Descrizione della spesa
 * @property {number} amount - Importo della spesa
 * @property {string} date - Data della spesa (formato DD-MM-YYYY)
 */

import fs from "fs";
import path from "path";
import chalk from "chalk";

import * as storage from "../utils/storage.util.js";

imoport { getCurrentDate } from "../utils/misc.util.js";

export const addExpense = (description, amount) => {
  if (!description || description.trim() === "") {
    console.error(chalk.red("Errore: La descrizione non può essere vuota."));
    process.exit(1);
  }
  if (isNaN(amount) || amount <= 0) {
    console.error(
      chalk.red("Errore: L'importo deve essere un numero positivo."),
    );
    process.exit(1);
  }

  const newExpense = {
    id: storage.getNextID(),
    description: description.trim(),
    amount: parseFloat(amount),
    date: getCurrentDate(),
  };

  // leggere le spese esistenti
  const expenses = storage.readStorage();
  // aggiungere la nuova spesa
  expenses.push(newExpense);
  // salvare le spese aggiornate
  storage.writeStorage(expenses);

  console.log(chalk.green("Spesa aggiunta con successo:"));
  console.log(
    `ID: ${newExpense.id}, Descrizione: ${
      newExpense.description
    }, Importo: €${newExpense.amount.toFixed(2)}, Data: ${newExpense.date}`,
  );
};
