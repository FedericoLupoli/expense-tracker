/*
 * @typedef {Object} Expense
 * @property {number} id - ID univoco della spesa
 * @property {string} description - Descrizione della spesa
 * @property {number} amount - Importo della spesa
 * @property {string} date - Data della spesa (formato DD-MM-YYYY)
 */

import { chalk, storage, messages, getCurrentDate } from "../utils/imports.js";

export const addExpense = (description, amount) => {
  if (!description || description.trim() === "") {
    console.error(chalk.red(`${messages.Error.InvalidDescription}`));
    process.exit(1);
  }
  if (isNaN(amount) || amount <= 0) {
    console.error(chalk.red(`${messages.Error.InvalidAmount}`));
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

  console.log(chalk.green(`${messages.Success.ExpenseAdded}`));
  console.log(
    `${messages.Info.ID}: ${newExpense.id}, ${messages.Info.Description}: ${
      newExpense.description
    }, ${messages.Info.Amount}: €${newExpense.amount.toFixed(2)}, ${
      messages.Info.Date
    }: ${newExpense.date}`,
  );
};
