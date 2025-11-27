import { chalk, storage, messages } from "../utils/imports.js";

export const updateExpense = (id, newDescription = null, newAmount = null) => {
  const storageData = storage.readStorage();
  const expense = storageData.find((item) => item.id === id);

  if (!expense) {
    console.log(chalk.red(`${messages.Error.ExpenseNotFound} ${id}.`));
    return;
  }

  if (newDescription) {
    expense.description = newDescription;
  }
  if (newAmount !== null && newAmount !== undefined) {
    expense.amount = newAmount;
  }

  storage.writeStorage(storageData);
  console.log(
    chalk.green(
      `${messages.Success.ExpenseUpdated} ${messages.Info.ID}: ${id}.`,
    ),
  );
};
